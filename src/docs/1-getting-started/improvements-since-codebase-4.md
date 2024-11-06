---
title: "Improvements"
headerTitle: "Improvements since Codebase 4"
layout: layout.njk
prevPage: "/docs/1-getting-started/css-variables"
nextPage: "/docs/1-getting-started/accessibility"
prevLink: "CSS variables"
nextLink: "Accessibility"
---

Codebase has grown up a lot since 2020. So much has changed since version 4, that this has become a separate project. (Meanwhile Codebase 4 and Codebase 3 are still available as archives.)

Besides hundreds of tiny tweeks, there are several important things added and removed:

## Additions and improvements

There have been hundreds of improvements since Codebase version 4. The following are the most important:

### Dart Sass

The Sass preprocessor has been updated to [Dart Sass](https://sass-lang.com/dart-sass), and the SCSS files have been refactored accordingly.

### AlpineJS version 3

The Codebase [AlpineJS components]({{ '/docs/7-alpinejs-components/collapse' | url }}) have been updated to [Alpine 3](https://alpinejs.dev/).

### Another media query widths tier

Another tier `xs` has been added to [media query width controlled CSS classes]({{ '/docs/1-getting-started/responsive-design/#responsive-layouts' | url }}), to enable greater design control for the wide range of phones and small tablets.

### Utilities with media query variants

Several utility classes now have a large range media width variants, so that you can adjust them for different viewports (device sizes):

* [Blocks]({{ '/docs/4-layout-utilities/blocks' | url }}) – `block` and `inline-block`
* [Max-width overrides]({{ '/docs/4-layout-utilities/dimensions/#max-width-overrides' | url }})
* [Positions]({{ '/docs/4-layout-utilities/positions' | url }}) - `relative`, `absolute`, `fixed`, `sticky`, `top`, `right`, `bottom` and `left`
* [Floats]({{ '/docs/4-layout-utilities/floats' | url }}) – `right` and `left`
* [Spacing]({{ '/docs/5-decoration-utilities/spacing' | url }}) – margins and paddings
* `Gap-*` in [flexbox]({{ '/docs/3-layout-utilities/flexbox/#adding-gaps' | url }}) and [grid]({{ '/docs/3-layout-utilities/grid/#adding-gaps' | url }})
* [Borders]({{ '/docs/5-decoration-utilities/borders' | url }})

### Real CSS grid system

The real CSS Grid [grid system]({{ '/docs/3-layout-utilities/grid' | url }}) has been totally reinvented.

### Aspect ratios

[Aspect ratio]({{ '/docs/3-layout-utilities/aspect-ratios' | url }}) wrapper utility classes have been added.

### Size and media query abbreviations

Some of the size abbreviations (`xs`, `sm`, `md`, and `lg`) do a double duty, and this could cause confusion. But Codebase now separates these out as either _prefixes_ or _suffixes_, the same way as is done in Tailwind:

* **Colon separated prefix** (`xs:`, `sm:`, `md:` `lg:`) – this means the CSS class takes effect at media query width. Block display (e.g. flexbox), widths, invisibility (`hidden`), positions, spacing (margins, paddings) and other elements all have media query width variants. 
* **Hyphen separated suffix** (`-xxs`, `-xs`, `-sm`, `-md`, `-lg`, `-xl`, `-xxl`) – this means a size variation. Containers can have any of these pre-set widths. Buttons can be small, medium (default), or large. And so on.

## Color system

Improvements to [colors]({{ '/docs/4-decoration-utilities/colors' | url }}):

* Codebase’s UI colors for <label class="label label-success">success</label>, <label class="label label-warning">warning</label>, <label class="label label-danger">danger</label>, and <label class="label label-info">info</label> have been darkened so that they conform to the [WCAG 2.1 Level AA accessibility guidelines](https://www.w3.org/TR/WCAG21/) _for text_: the UI colors now each have a color contrast ratio of at least 4.5:1. There are also  defaults for <label class="label label-primary">primary</label>, <label class="label label-secondary">secondary</label>, and <label class="label label-tertiary">tertiary</label> accent colors. All of these can be overridden in the default variables file to make them as required in your design.
* For demonstration purposes, Codebase contains seven named colors that have been aliased and generated from the UI and accent colors: these are simply named <label class="label t-white bg-green-500">green</label>, <label class="label t-white bg-amber-500">amber</label>, <label class="label t-white bg-red-500">red</label>, <label class="label t-white bg-blue-500">blue</label>, <label class="label t-white bg-purple-500">purple</label>, <label class="label t-white bg-teal-500">teal</label>, and <label class="label t-white bg-gray-500">gray</label>. These have been used for the [utility classes for _shades_ of each color]({{ '/docs/4-decoration-utilities/colors' | url }}) `-100` to `-900` for background, border, and text – and for hover states of each.
* Color names and shades have been made easier to understand in Codebase, because “dark mode” is no longer built into Codebase. So, you will not here use Codebase 4’s contextual suffixes for the grayscale (“-background”, “-fineline”, “-text”, etc.). But you will use e.g. `-gray-100` to `-gray-900` plus `-white` and `-black`.
* Hover states of color utilities are also available, with the `hover:` prefix.
* Added semi-transparent [glass layers]({{ '/docs/4-decoration-utilities/glass' | url }}) for use e.g. on modal backdrops, and hero image overlays.

## Accessibility

Codebase CSS has several improved accessibility features, such as focus `:focus` rings on [buttons]({{ '/docs/6-simple-components/buttons' | url }}), and `:focus-visible` rings on links.

In addition, AlpineJS dropdown component examples have been refactored for accessibility, and they include [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) labels, roles, and states.

For more information see [Accessibility features in Codebase 5]({{ '/docs/1-getting-started/accessibility' | url }})

## Things that have been removed

There are several small things removed from Codebase CSS, that are not listed here. The following are the most important:

* “Dark mode” styling is not included in Codebase. (Dark mode may come back again as a side project in future.)
* The flexbox percentile “pseudo grid” system has been removed from Codebase. You can use the real CSS Grid [grid system]({{ '/docs/3-layout-utilities/grid' | url }}) instead.
* Support for Internet Explorer 11 has been dropped.
* The Codebase 4 `activator.js` has been retired, and all CSS pertaining to it has been removed. (Use AlpineJS instead.)

## Internet Explorer 11 is not supported

IE11 came out in 2013, and [Microsoft stopped supporting IE11 in August 2021](https://docs.microsoft.com/en-us/lifecycle/announcements/m365-ie11-microsoft-edge-legacy) as a standalone browser. Microsoft stopped supporting IE11 in [May 2022](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge).

Several things have been included in Codebase CSS that have no backward-compatibility to older browsers such as IE11:

* The real _CSS Grid_ based [grid system]({{ '/docs/3-layout-utilities/grid' | url }})
* The `gap` CSS property for flexbox and grid
* [Aspect-ratio]({{ '/docs/3-layout-utilities/aspect-ratios' | url }}) wrappers
* Some styles have size constraints using `clamp()`

**Note:** also, [Alpine 3 does not support Interet Explorer 11](https://alpinejs.dev/upgrade-guide#no-ie-11).

## Gulp is no longer required

The [Gulp](https://gulpjs.com/) taskrunner is no longer required.

* Since `activator.js` has been removed, Babel and Uglify are no longer required.
* Since support for IE11 has been dropped, Autoprefixer is no longer required for the CSS.
* Since only the minified `codebase.css` (and sourcemap) remain, there is no longer a need to provide a Zipped folder.
* So, only NPM modules for preprocessing `codebase.css` are required. Sass and Eleventy (for the docs) are run directly the script `npm run dev` (see `package.json`).