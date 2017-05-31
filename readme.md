# euphoria-spacing

A Euphoria.css utility library to create margin and padding classes in your CSS-to-JS projects.

This module returns a string of class names you can then inject into a page, using something like [glamor][glamor].

We automatically inject `none` classes for padding and spacing (eg `.p-none { padding: 0; }`) and `auto` classes for margins (eg `.m-auto { margin: auto; }`).

NOTE: Currently this only works with ES6 support using Babel or Node 7.x+.


## Installation

```bash
# with yarn:
yarn add euphoria-spacing

# with npm
npm i -S euphoria-spacing
```

## Usage

This module can be used in many ways. For example, using [glamor][glamor], you would do the following:

```js
import { css } from 'glamor'
import spacing from 'euphoria-spacing'

css.insert(
  spacing({
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  })
)
```

Now you will have the following classes available to you:

```css
// Padding
.p-none { padding: 0; }
.p-sm { padding: 0.5rem; }
.p-md { padding: 1rem; }
.p-lg { padding: 2rem; }

.pb-none { padding-bottom: 0; }
.pb-sm { padding-bottom: 0.5rem; }
.pb-md { padding-bottom: 1rem; }
.pb-lg { padding-bottom: 2rem; }

.pl-none { padding-left: 0; }
.pl-sm { padding-left: 0.5rem; }
.pl-md { padding-left: 1rem; }
.pl-lg { padding-left: 2rem; }

.pr-none { padding-right: 0; }
.pr-sm { padding-right: 0.5rem; }
.pr-md { padding-right: 1rem; }
.pr-lg { padding-right: 2rem; }

.pt-none { padding-top: 0; }
.pt-sm { padding-top: 0.5rem; }
.pt-md { padding-top: 1rem; }
.pt-lg { padding-top: 2rem; }

.px-none { padding-left: 0; padding-right: 0; }
.px-sm { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-md { padding-left: 1rem; padding-right: 1rem; }
.px-lg { padding-left: 2rem; padding-right: 2rem; }

.py-none { padding-top: 0; padding-bottom: 0; }
.py-sm { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-md { padding-top: 1rem; padding-bottom: 1rem; }
.py-lg { padding-top: 2rem; padding-bottom: 2rem; }

// Margins
.m-none { margin: 0; }
.m-sm { margin: 0.5rem; }
.m-md { margin: 1rem; }
.m-lg { margin: 2rem; }
.m-auto { margin: auto; }

.mb-none { margin-bottom: 0; }
.mb-sm { margin-bottom: 0.5rem; }
.mb-md { margin-bottom: 1rem; }
.mb-lg { margin-bottom: 2rem; }
.mb-auto { margin-bottom: auto; }

.ml-none { margin-left: 0; }
.ml-sm { margin-left: 0.5rem; }
.ml-md { margin-left: 1rem; }
.ml-lg { margin-left: 2rem; }
.ml-auto { margin-left: auto; }

.mr-none { margin-right: 0; }
.mr-sm { margin-right: 0.5rem; }
.mr-md { margin-right: 1rem; }
.mr-lg { margin-right: 2rem; }
.mr-auto { margin-right: auto; }

.mt-none { margin-top: 0; }
.mt-sm { margin-top: 0.5rem; }
.mt-md { margin-top: 1rem; }
.mt-lg { margin-top: 2rem; }
.mt-auto { margin-top: auto; }

.mx-none { margin-left: 0; margin-right: 0; }
.mx-sm { margin-left: 0.5rem; margin-right: 0.5rem; }
.mx-md { margin-left: 1rem; margin-right: 1rem; }
.mx-lg { margin-left: 2rem; margin-right: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

.my-none { margin-top: 0; margin-bottom: 0; }
.my-sm { margin-top: 0.5rem; margin-bottom: 0.5rem; }
.my-md { margin-top: 1rem; margin-bottom: 1rem; }
.my-lg { margin-top: 2rem; margin-bottom: 2rem; }
.my-auto { margin-top: auto; margin-bottom: auto; }
```

Calling `spacing` without arguments will get you the default spacing mapping, which is:

```js
{
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.75rem',
  xl: '3.25rem',
  xxl: '5rem',
}
```

## Changelog

### v0.3.0
- Automatically insert `none` classes since they're expected as defaults.

### v0.2.0
- Add margin auto helpers: `.m-auto`, `.ml-auto`, `.mr-auto`, `.mb-auto`, `.mt-auto`, `.mx-auto`, `.my-auto`

### v0.1.1
- Remove flow cruft

### v0.1.0
- Initial release!

## License

MIT

## Credits

Dana Woodman

[glamor]: https://github.com/threepointone/glamor
