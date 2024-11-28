---
title: "Introduction"
layout: layout.njk
nextPage: "/docs/1-getting-started/responsive-design"
nextLink: "Responsive design"
---

You can start working immediately with Codebase in a simple HTML setup.

<div class="my-6 flex gap-3 flex-wrap flex-center t-center">
  <div>
    <a class="btn btn-primary rounded-pill" href="{{ '/dist/codebase.css' | url }}">Download CSS</code></a>
  </div>
  <div>
    <a class="btn btn-secondary rounded-pill" href="https://github.com/codebase-frontend-library/codebase-5">GitHub repostory</a>
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
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Codebase</title>
    <link rel="stylesheet" href="/path/to/your/codebase.css">

    <!-- Alpine and Plugins -- for development; host these yourself for production. -->
    <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/alpinejs"></script>
  </head>
  <body>
    
    <h1>Hello world</h1>
    <p x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></p>

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

* [Menus and menubars]({{ '/docs/6-simple-components/menus-and-menubars' | url }})
* [Heros]({{ '/docs/6-simple-components/heros' | url }})
* [Buttons]({{ '/docs/6-simple-components/buttons' | url }})
* [Badges]({{ '/docs/6-simple-components/badges' | url }})
* [Labels]({{ '/docs/6-simple-components/labels' | url }})
* [Tables]({{ '/docs/6-simple-components/tables' | url }})
* [Media objects]({{ '/docs/6-simple-components/media-objects' | url }})
* [Cards]({{ '/docs/6-simple-components/cards' | url }})
* [Panel links]({{ "/docs/6-simple-components/panel-links/" | url }})

#### Components using AlpineJS

Codebase pairs well with [AlpineJS](https://alpinejs.dev/). The Codebase components examples in these docs have been re-factored to use Alpine v3.

**Notes:**

1. `codebase.css` does not require Alpine as a dependency. You can use Codebase with other JS frameworks, or none at all.
2. Codebase (and this documentation) does not include AlpineJS. You will need to [source the latest version](https://github.com/alpinejs/alpine) for yourself, or link to it from a CDN (e.g. [UNPKG](https://unpkg.com/) or [JSDELIVR](https://www.jsdelivr.com/package/npm/alpinejs)).

The following are several examples of Codebase components that can be powered by Alpine:

* [Collapse]({{ '/docs/7-alpinejs-components/collapse' | url }})
* [Dropdowns]({{ '/docs/7-alpinejs-components/dropdowns' | url }})
* [Modals]({{ '/docs/7-alpinejs-components/modals' | url }})
* [Offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }})
* [Tabs]({{ '/docs/7-alpinejs-components/tabs' | url }})
* [Slideshows]({{ '/docs/7-alpinejs-components/slideshows' | url }})
* [Animations]({{ '/docs/7-alpinejs-components/animations' | url }})

## The SCSS library

Codebase is a highly versatile SCSS library, preprocessed and minified to CSS.

The SCSS library is clean, modern and minimalist, and highly versatile because of all the utility classes it contains. It can do most things that most people want, “out of the box”.

Available in the repository are all the Codebase [SCSS files](https://github.com/codebase-frontend-library/codebase-5/tree/main/src/codebase/scss).

**Notes:**

1. Codebase uses [CSS variables]({{ '/docs/1-getting-started/css-variables/' | url }})**, not Sass variables.
2. _PostCSS_ and its associated dependencies have not been used. So there are no generated vendor prefixes (for supporting pre ~2018 browsers). In the few places where vendor prefixes are still required (in the body tag, and in the glassmorphic overlays), I have added them manually. CSS minification is done thorugh `--style compact` on the _Sass_ package (not CSS Nano).
3. Internet Explorer is not supported.

You can incrementally add your web project’s distinctive design features after including Codebase in your HTML `<head>` (or including it whichever way you need to do it in your design platform). And you can customize Codebase itself.

### Sass Maps in Codebase

For example, here is the [Sass map](https://sass-lang.com/documentation/values/maps) of the nine shades that can be applied to one of the seven default theme colors in Codebase:

```scss
$lightness: (
  "100": white 90%,
  "200": white 72%,
  "300": white 54%,
  "400": white 36%,
  "500": white 18%,
  "600": black 0%,
  "700": black 18%,
  "800": black 36%,
  "900": black 54%
);
```

The Codebase color utility class generator uses this Sass map. These shades are applied by a `color-mix()` function using the OKCH color space (since Codebase v.5.3.4). See [Color utilities]({{ '/docs/4-decoration-utilities/colors' | url }}).

## System font stacks

Codebase contains three simple `font-family` system font stacks, plus a few more that are aliased from these three. These aliases can make Codebase SCSS adaptable to the needs of your project.

Codebase’s `--font-base` follows the popular trend for sans-serif in web design. It is applied to the HTML `<body>` tag by default.

User interface (UI) elements such as buttons and form inputs have the user interface `--font-ui` applied. This defaults to `--font-base`, so they look the same. But from this default setup you can diverge – you can have different font stacks for base and UI.

Then, the HTML `<code>` example tag and a couple of others have a monospace font stack, `--font-mono`. And there’s a default serif font stack `--font-serif` available, but no classless HTML elements have it applied (default). The serif font stank is there as a starter, for you to use if you want a serif alternative for long test articles, blog posts etc.

More information on Codebase font stacks, and how they are used, can be found at [typographic utilities: font stacks]({{ '/docs/5-typographic-utilities/font-stacks/' | url }}).

## Browser support

Codebase works on all the common modern web browsers such as Chrome, Safari, Edge, Firefox, Opera, and others.

Codebase is not compatible with older browsers such as Internet Explorer 11 and Opera Mini.

Also, [Alpine v.3x does not support IE11](https://alpinejs.dev/upgrade-guide#no-ie-11).

And more importantly, since June 2022 [Microsoft no longer supports IE11](https://blogs.windows.com/windowsexperience/2022/06/15/internet-explorer-11-has-retired-and-is-officially-out-of-support-what-you-need-to-know/).