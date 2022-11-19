---
title: "Introduction"
layout: layout.njk
nextPage: "/docs/1-getting-started/responsive-design"
nextLink: "Responsive design"
---

You can start working immediately with Codebase in a simple HTML setup.

<div class="my-6 flex gap-3 flex-wrap flex-center t-center">
  <div>
    <a class="btn btn-primary btn-lg rounded-pill" href="{{ '/dist/codebase.css' | url }}">Download CSS</code></a>
  </div>
  <div>
    <a class="btn btn-secondary btn-lg rounded-pill" href="https://github.com/codebase-frontend-library/codebase-5">GitHub repostory</a>
  </div>
</div>

The sourcemap is also available in the <a href="https://github.com/codebase-frontend-library/codebase-5/tree/main/src/dist">src/dist/</a> folder.

```js
dist/
 ├─ codebase.css
 └─ codebase.css.map
```

## Simple HTML setup

1. [Download the CSS]({{ '/dist/codebase.css' | url }}) (alternatively, get the entire `dist/`) and place it in your project.
2. Create your first HTML page – e.g. copying the starter example below.
3. Link to `codebase.css` and `alpine.js` in the HTML `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codebase</title>
    <link rel="stylesheet" href="/path/to/your/codebase.css">
    <script src="/path/to/your/alpine.js" defer></script>
  </head>
  <body>
    
    <h1>Hello world</h1>

  </body>
</html>
```

Make the paths to your `codebase.css` and `alpine.js` follow your project’s directory structure to link to your files.

## The stylesheet

`codebase.css` is production-ready, meaning that you can just drop it into your project and use it as-is.

### Basics

Codebase has a good base of styles even before you add CSS classes. Take a walk through the [classless basics]({{ '/docs/2-classless-basics/block-elements/' | url }}) and you will see what I mean.

### Utilities

Almost everything else is done in Codebase using utility classes. _Utility classes do one thing well_, such as control a background color or set a padding. You will find an extensive range of utilities for layout, decoration, and typography.

### Components

All Codebase components have been designed and built using a “utility first” approach. This means that first, utility classes have been used to scaffold the component. For many components, nothing else is required.

There are two occasions when Codebase adds some bespoke component CSS classes:

1. Where it makes more sense to apply a CSS cascade that affects _nested_ HTML elements.
2. For complex Codebase components that require some added features (e.g. for CSS transitions) for visualising their change of state.

#### Simple components

Here are some simple components that you can build using Codebase (I’m calling a component “simple” if it requires only CSS and no JavaScript for functionality):

* [Menus]({{ '/docs/6-simple-components/menus' | url }})
* [Heros]({{ '/docs/6-simple-components/heros' | url }})
* [Buttons]({{ '/docs/6-simple-components/buttons' | url }})
* [Badges]({{ '/docs/6-simple-components/badges' | url }})
* [Labels]({{ '/docs/6-simple-components/labels' | url }})
* [Tables]({{ '/docs/6-simple-components/tables' | url }})
* [Media objects]({{ '/docs/6-simple-components/media-objects' | url }})
* [Cards]({{ '/docs/6-simple-components/cards' | url }})

#### Components using AlpineJS

Codebase pairs well with [AlpineJS](https://alpinejs.dev/). The Codebase components examples in these doce have been re-factored to use Alpine v3.

The following are several examples of Codebase components that can be powered by Alpine:

* [Collapse]({{ '/docs/7-alpinejs-components/collapse' | url }})
* [Dropdowns]({{ '/docs/7-alpinejs-components/dropdowns' | url }})
* [Modals]({{ '/docs/7-alpinejs-components/modals' | url }})
* [Offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }})
* [Tabs]({{ '/docs/7-alpinejs-components/tabs' | url }})
* [Slideshows]({{ '/docs/7-alpinejs-components/slideshows' | url }})
* [Animations]({{ '/docs/7-alpinejs-components/animations' | url }})

**Note:** Codebase (and this documentation) does not include AlpineJS. You will need to [source the latest version](https://github.com/alpinejs/alpine) for yourself, or link to it from a CDN (e.g. [JSDELIVR](https://www.jsdelivr.com/package/npm/alpinejs)).

## The SCSS library

Codebase is a highly versatile SCSS library, preprocessed and minified to CSS.

The SCSS library is clean, modern and minimalist, and highly versatile because of all the utility classes it contains. It can do most things that most people want, “out of the box”.

Available in the repository are all the Codebase [SCSS files](https://github.com/codebase-frontend-library/codebase-5/tree/main/src/codebase/scss).

**Notes:**

1. **Since v.5.2, Codebase has been refactored to use [CSS variables]({{ '/docs/1-getting-started/css-variables/' | url }})**, whereas these were all Sass variables previously. Also, all the `!default` flags have been removed from these variables, as they can now be overridden in the CSS without requiring Sass to do so.
2. **Since Codebase v.5.2, _PostCSS_ and its associated dependencies have not been used in this project**, as ithey are not needed for adding vendor prefixes (browsers older than ~2018, including Internet Explorer, aren’t supported). In the few places where vendor prefixes are still required (in the body tag, and in the glassmorphic overlays), I have added them manually. The main reason why _PostCSS_ has been removed is because I didn’t want it converting the CSS variables static CSS (for old browser support). Also, with _PostCSS_ removed, I can’t use _cssnano_ (a dependency) for minification; therefore I am simply using `--style compact` on the _Sass_ package.

You can incrementally add your web project’s distinctive design features after including Codebase in your HTML `<head>` (or including it whichever way you need to do it in your design platform). And you can customize Codebase itself.

The Codebase SCSS library contains a lot of [default variables](https://github.com/codebase-frontend-library/codebase-5/tree/master/src/codebase/scss/00_setup/_default-variables.scss) that are under a `!default` flag – so that they can be overridden.

For example, here is the [Sass map](https://sass-lang.com/documentation/values/maps) of the seven default theme colors in Codebase:

```scss
$theme-color: (
  "blue":   #1262ed,
  "green":  #128a12,
  "amber":  #f0b300,
  "red":    #cf000f,
  "purple": #9400d3,
  "teal":   #0080a2,
  "gray":   #767676,
);
```

These colors are the same as those in the `$ui-color` map that sets the UI colors (for buttons, badges, and labels) but you can change that by editing the `$theme-color` map and preprocessing the SCSS.

You can override all these names and color codes, remove some or add more – to suit your branding – and the Codebase utility classes will all be generated using `each()` loops. So, you don’t need to figure out or input all the shades or each color.

Read more on [CSS variables in Codebase]({{ '/docs/1-getting-started/css-variables/' | url }}).

## System font stacks

Codebase contains three `font-family` system font stacks, plus a few more that are aliased from these three. These aliases can make Codebase SCSS adaptable to the needs of your project.

Since v.5.0.6, Codebase’s font stacks have been based on Tom MacWright’s [System Font Stacks](https://systemfontstack.com) (but not including the emoji fonts).

Codebase’s `$font-stack-base` follows the popular trend for sans-serif in web design. It is applied to the HTML `<body>` tag by default.

User interface (UI) elements such as buttons and form inputs have the user interface `$font-stack-ui` applied. This defaults to `$font-stack-base`, so they look the same. But from this default setup you can diverge – you can have different font stacks for base and UI.

Then, the HTML `<code>` example tag and a couple of others have a monospace font stack, `$font-stack-mono`. And there’s a default serif font stack `$font-stack-serif` available, but no classless HTML elements have it applied (default). The serif font stank is there as a starter, for you to use if you want a serif alternative for long test articles, blog posts etc.

More information on Codebase font stacks, and how they are used, can be found at [typographic utilities: font stacks]({{ '/docs/5-typographic-utilities/font-stacks/' | url }}).

## Browser support

Codebase works on all the common modern web browsers such as Chrome, Safari, Edge, Firefox, Opera, and others.

Codebase is not compatible with older browsers such as Internet Explorer 11 and Opera Mini.

**Note:** also, [Alpine v.3x does not support IE11](https://alpinejs.dev/upgrade-guide#no-ie-11).