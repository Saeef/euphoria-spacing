// @flow

const R = require('ramda')

function makeSpacingClass(type, direction, sizeName, size) {
  const classname = `.${type[0]}${direction ? direction[0] : ''}-${sizeName}`

  const t = type
  const s = size
  const d = direction
  let space
  switch (d) {
    case 'x':
      space = `${t}-left: ${s}; ${t}-right: ${s};`
      break
    case 'y':
      space = `${t}-bottom: ${s}; ${t}-top: ${s};`
      break
    case 'bottom':
      space = `${t}-${d}: ${s};`
      break
    case 'left':
      space = `${t}-${d}: ${s};`
      break
    case 'right':
      space = `${t}-${d}: ${s};`
      break
    case 'top':
      space = `${t}-${d}: ${s};`
      break
    default:
      space = `${t}: ${s};`
  }
  return `${classname} { ${space} }`
}

const types = ['padding', 'margin']
const directions = ['', 'bottom', 'left', 'right', 'top', 'x', 'y']
const defaultSpacing = {
  none: 0,
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.75rem',
  xl: '3.25rem',
  xxl: '5rem',
}

module.exports = (spacing = defaultSpacing) =>
  R.join(
    '\n',
    R.flatten(
      R.map(
        t =>
          R.map(
            d =>
              R.map(
                s => makeSpacingClass(t, d, s[0], s[1]),
                R.toPairs(spacing)
              ),
            directions
          ),
        types
      )
    )
  )
