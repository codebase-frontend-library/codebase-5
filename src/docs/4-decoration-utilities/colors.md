---
title: "Colors"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/invisibility"
nextPage: "/docs/4-decoration-utilities/glass"
prevLink: "Invisibility"
nextLink: "Glass"
---

Codebase’s color swatches have been deployed as utility classes for backgrounds, borders, text – and hover states for each.

* **Backgrounds:** `bg-{colorname}-{shade}` and `hover:bg-{colorname}-{shade}`
* **Borders:** `b-{colorname}-{shade}` and `hover:b-{colorname}-{shade}`
* **Text:** `t-{colorname}-{shade}` and `hover:t-{colorname}-{shade}`

## Default colors

Codebase has a set of 7 base colors with obvious names. <label class="label bg-amber-500 t-white">amber</label>, <label class="label bg-red-500 t-white">red</label>, <label class="label bg-green-500 t-white">green</label>, <label class="label bg-blue-500 t-white">blue</label>, <label class="label bg-purple-500 t-white">purple</label>, <label class="label bg-teal-500 t-white">teal</label>, and <label class="label bg-gray-500 t-white">gray</label>.

These colors are deliberately mid-shade, so that a range of lighter and darker variants can be drawn out of them (see [color swatches](#color-swatches) below).

_The default colors are merely here for demonstration purposes._ You can use them to get you started as-is, or you can also swap them out for whatever you need in your project. You can have your own named colors and color codes.

In the utility classes, shades of each named color are available. These shades are identified by suffixes `-100` to `-900`.

A slightly darker shade of each of these seven are also aliased as `warning`, `danger`, `success`, `info`, `primary`, `secondary`, and `tertiary` for use as [UI colors](#ui-colors). UI colors are used for buttons, badges and labels. The UI colors are declared separately, so you can adjust euther the base colors or the UI colors separately. UI colors do not have a corresponding set of shade swatches.

## Color swatches

Codebase default color examples using `bg-` (background) color shades.

Toggle the panel background color (white or black):

<div class="mb-2" x-data="{ isDark: false }">
  <button
    class="b-0 p-0 hover:bg-transparent"
    @click="isDark = !isDark"
    aria-controls="panel-1"
  >
    <span x-cloak x-show="!isDark" class="p-cell b-thin rounded rounded-sm t-white bg-black">Toggle to black</span>
    <span x-cloak x-show="isDark" class="p-cell b-thin rounded rounded-sm bg-white">Toggle to white</span>
  </button>
  <div
    class="my-3 b-thin rounded p-2"
    :class="isDark && 'bg-black'"
  >
    <div class="overflow-x">
      <div class="flex flex-grow-equal">
        <div><code>100</code></div>
        <div><code>200</code></div>
        <div><code>300</code></div>
        <div><code>400</code></div>
        <div><code>500</code></div>
        <div><code>600</code></div>
        <div><code>700</code></div>
        <div><code>800</code></div>
        <div><code>900</code></div>
      </div>
      <p class="my-1"><code>bg-amber-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-amber-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-amber-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-red-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-red-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-red-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-green-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-green-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-green-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-blue-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-blue-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-blue-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-purple-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-purple-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-purple-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-teal-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-teal-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-teal-900 aspect-ratio-1x1"></div>
      </div>
      <p class="my-1"><code>bg-gray-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-gray-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-gray-900 aspect-ratio-1x1"></div>
      </div>
    </div>
  </div>
</div>

That makes 378 color utilities. Plus there are several extras below.

### The Sass color generator

The color shades are generated by nested `@each` loops in `codebase/scss/03_utilities/_colors.scss`, that follow the Sass map in `codebase/scss/00_setup/_default-variables.scss`.

Since Codebase v.5.3.0, the shades are generated using some new CSS features: the `color-mix()` function and the OKLAB color space.

* Information on [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) at Mozilla Developer Network.
* [Interview With Björn Ottosson, creator of the OKLAB color space](https://www.smashingmagazine.com/2024/10/interview-bjorn-ottosson-creator-oklab-color-space/) on Smashing Magazine.

The Codebase color swatches generator picks the theme colors, and then mixes in white or black to generate the shades.

In the default variables file `codebase/scss/00_setup/_default-variables.scss`, the following Sass maps set up the named colors and their shades:

```scss
// Root color variables
:root {
  // Variables
  --blue: #1262ed;
  --green: #128a12;
  --amber: #f0b300;
  --red: #cf000f;
  --purple: #9400d3;
  --teal: #0080A2;
  --gray: #767676;
}

// Theme color namer map
$theme-color: (
  "blue": var(--blue),
  "green": var(--green),
  "amber": var(--amber),
  "red": var(--red),
  "purple": var(--purple),
  "teal": var(--teal),
  "gray": var(--gray),
);

// Shade Sass map
$shade: (
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

The colors utility class generator is in `codebase/scss/03_utilities/_colors.scss`:

```scss
@if $color-shade-utilities == true {

  @each $key, $val in $theme-color {

    @each $key2, $val2 in $shade {

      .b-#{$key}-#{$key2},
      .hover\:b-#{$key}-#{$key2}:hover {
        border-color: var(--#{$key}-#{$key2});
      }

      .bg-#{$key}-#{$key2},
      .hover\:bg-#{$key}-#{$key2}:hover {
        background-color: var(--#{$key}-#{$key2});
      }

      .t-#{$key}-#{$key2},
      .hover\:t-#{$key}-#{$key2}:hover {
        color: var(--#{$key}-#{$key2});
      }
    }
  }
}
```

### Modifying Codebase colors

* **Simple modifications using only CSS variables:**
  * When adjusting the Codebase theme colors, if you want to keep and reuse the seven color namesall you need to do is re-declare the variables with your colors. Choose a mid-shade colour as your base, so that you get a good set of swatches.
* **Complex modifications using Sass maps:**
  * With the Dart Sass preprocessor operating in your web development setup, all you need to do is (remove the Codebase color variables and) declare your own set of `:root {}` color variables, and create a corresponding theme color namer Sass map, to replace `$theme-colors {}` (see above). You may need to adjust the `$shades {}` map too.

If you follow what I did in the default variables file, then you shouldn't need to modify the color utilities file.

The `hover:` color utilities only take effect when the visitor moves a pointing device, e.g. mouse or finger on a touch screen, over the element. `hover:` utilities have an `!important` flag, so that they override other colors that have been set elsewhere. That has been done so you can use these utilities on hyperlinks and buttons.

The _border_ color utilities will color the _border on all sides_ (top, right, bottom, and left). But if you have only set borders on top `bt-`, right `br-`, bottom `bb-`, or left `bl-` only those sides will be colored. (You can’t use a combination of Codebase border color utilities on one HTML element.)

There are also a few [extra color utilities](#extra-color-utilies) that I will mention further down this page.

## Applying colors

Examples:

<div class="mb-2">
  <p class="b-thin b-green-400 rounded rounded-sm p-cell bg-green-200 t-green-700">b-thin b-green-400 rounded rounded-sm p-cell bg-green-200 t-green-700</p>
  <p class="t-amber-600">t-amber-600</p>
  <p class="p-3 b-thick b-red-400 hover:b-red-500 bg-red-200 hover:bg-red-300 t-lg t-bold t-red-500 hover:t-red-700">p-3 b-thick b-red-400 hover:b-red-500 bg-red-200 hover:bg-red-300 t-lg t-bold t-red-500 hover:t-red-700</p>
</div>

## UI colors

The seven UI colors for <label class="label label-warning">warning</label>, <label class="label label-danger">danger</label>, <label class="label label-success">success</label>, <label class="label label-info">info</label>, <label class="label label-primary">primary</label>, <label class="label label-secondary">secondary</label>, and <label class="label label-tertiary">tertiary</label> are set independently from the named colors. You can change the UI colors too, to suit your design.

Codebase’s UI colors have been specifically chosen so that they conform to [WCAG 2.1 Level AA accessibility guidelines](https://www.w3.org/TR/WCAG21/) for user interface elements: they have a color contrast ratio of at least 4.5:1. These are slightly darker than the four base colors from which they are derived (amber, red, green, and blue), corresponding to the `-600` swatch shades of these colors. These slightly darker shades comply with [WCAG 2.1 Level AA accessibility guidelines](https://www.w3.org/TR/WCAG21/)) – but note that this requires the "warning" UI color to be paired with black text instead of white.

The Codebase UI elements that receive color are buttons, badges, and labels. These incorporate the appropriate colour forthe text (white for text on "danger", "success", and "info"; black for text on "warning".) E.g.

<button class="btn-primary">Primary</button> – a primary button using `btn btn-primary`

Note: the `:hover` state colors on buttons is one Codebase shade darker.

<label class="label label-warning">Warning</label> – a warning label using `label label-warning`

<span class="badge badge-danger">3</span> – a "danger" badge using `badge badge-danger`

See [buttons]({{ '/docs/6-simple-components/buttons' | url }}), [badges]({{ '/docs/6-simple-components/badges' | url }}) and [labels]({{ '/docs/6-simple-components/labels' | url }}).

In addition, there are simple utility classes for text border `b-`, text `t-`, and background `bg-` for these seven UI colors (note: UI colors do not have shade suffix variations). Example:

* <span class="inline-block px-6 bg-warning t-white">&nbsp;</span> – bg-warning
* <span class="inline-block px-6 bg-danger t-white">&nbsp;</span> – bg-danger
* <span class="inline-block px-6 bg-success t-white">&nbsp;</span> – bg-success
* <span class="inline-block px-6 bg-info t-white">&nbsp;</span> – bg-info
* <span class="inline-block px-6 bg-primary t-white">&nbsp;</span> – bg-primary
* <span class="inline-block px-6 bg-secondary t-white">&nbsp;</span> – bg-secondary
* <span class="inline-block px-6 bg-tertiary t-white">&nbsp;</span> – bg-tertiary

## Other color utilities

### White and black

`-white` and `-black` background, border, text, and hover states of each. Self explanatory. No shades of either (use the `-gray-` grayscale swatches).

<div class="mb-2 p-3 lg:p-6 bg-primary t-white">
  This panel’s text is colored using <code>t-white</code> Both the horizontal rule and the button below have their border-color set using <code>b-white</code> The button also has <code>hover:b-white</code>
  <hr class="b-white">
  <button class="btn btn-primary b-white hover:b-white">A button</button>
</div>

### Transparent border and background

* `b-transparent` / `hover:b-transparent`
* `bg-transparent` / `hover:bg-transparent`

Useful for removing unwanted colors. E.g. use `bg-transparent` for creating outline (“ghost”) buttons.

### Background under border

`bg-under-border` – makes the element background image or background-color show though the default semi-transparent detail border.

<div class="flex flex-grow-equal">
  <div class="p-2">
    <div class="b-thick bg-white bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick bg-primary bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick bg-success bg-under-border p-3"></div>
  </div>
</div>

```html
<div class="b-thick bg-primary bg-under-border"></div>
```

See [borders and background colors/images]({{ '/docs/4-decoration-utilities/borders/#borders-and-background-colors%2Fimages' | url }}) for more information.