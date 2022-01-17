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

I don’t know what colors you want in your web design project. 😁

Therefore, Codebase borrows the default set of seven [UI colors](#ui-colors) (as used for buttons, etc.), giving them obvious color names as aliases: <label class="label bg-orange-500 t-white">orange</label>, <label class="label bg-red-500 t-white">red</label>, <label class="label bg-green-500 t-white">green</label>, <label class="label bg-blue-500 t-white">blue</label>, <label class="label bg-purple-500 t-white">purple</label>, <label class="label bg-teal-500 t-white">teal</label>, and <label class="label bg-gray-500 t-white">gray</label>.

**Note:** since the base default color of each is aliased from the _UI colors_ (which are necessarily dark, for following the [WCAG 2.1 Level AA accessibility guidelines](https://www.w3.org/TR/WCAG21/)), these are set as the `-600` shades in the series.

_These default colors are merely here for demonstration purposes._ You can use them to get you started as-is, but you can also swap them out for whatever you need in your project. You can have your own named colors and color codes.

In the utility classes, shades of each named color are available. These shades are identified by suffixes `-100` to `-900`.

## Color swatches

Codebase default color examples using `bg-` (background) color shades.

Toggle the panel background color (white or black): 

<div class="mb-3" x-data="{ isDark: false }">
  <button
    class="b-0 p-0 hover:bg-transparent"
    @click="isDark = !isDark"
    aria-controls="panel-1"
  >
    <span x-cloak x-show="!isDark" class="p-block b-thin rounded-sm t-white bg-black">Toggle to black</span>
    <span x-cloak x-show="isDark" class="p-block b-thin rounded-sm bg-white">Toggle to white</span>
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
      <p class="my-1"><code>bg-orange-</code></p>
      <div class="flex flex-grow-equal">
        <div class="mr-1 rounded bg-orange-100 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-200 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-300 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-400 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-500 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-600 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-700 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-800 aspect-ratio-1x1"></div>
        <div class="mr-1 rounded bg-orange-900 aspect-ratio-1x1"></div>
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

The color shades are generated by nested `@each` loops in `codebase/scss/03_utilities/colors.scss`, that follow the Sass map in `codebase/scss/00_setup/default-variables.scss`.

The generator picks the theme _named colors_, and then mixes in white or black to generate the shades.

In the default variables file, the following two Sass maps set up the named colors and their shades:

```scss
$named-color: () !default;
$named-color: map-merge((
  "-green":          map-get($ui-color, success),
  "-orange":         map-get($ui-color, warning),
  "-red":            map-get($ui-color, danger),
  "-blue":           map-get($ui-color, info),
  "-purple":         map-get($ui-color, primary),
  "-teal":           map-get($ui-color, secondary),
  "-gray":           map-get($ui-color, tertiary),
), $named-color);

$shades: () !default;
$shades: map-merge((
  "100":            (white, 90),
  "200":            (white, 72),
  "300":            (white, 54),
  "400":            (white, 36),
  "500":            (white, 18),
  "600":            (black, 0),
  "700":            (black, 18),
  "800":            (black, 36),
  "900":            (black, 54)
), $shades);
```

And there’s a simple true/false toggle, that determines whether or not to crank the generator

```scss
$named-color-shades: true !default;
```

And in the `_colors.scss` file, this is the generator that outputs all the named color utilities:

```scss
@if $named-color-shades == true {
  @each $key, $val in $named-color {
    @each $key2, $val2 in $shades {
      .b#{$key}-#{$key2} { 
        border-color: mix(nth($val2, 1), $val, nth($val2, 2)) 
      }
      .hover\:b#{$key}-#{$key2}:hover { 
        border-color: mix(nth($val2, 1), $val, nth($val2, 2)) !important 
      }
      .bg#{$key}-#{$key2} { 
        background-color: mix(nth($val2, 1), $val, nth($val2, 2)) 
      }
      .hover\:bg#{$key}-#{$key2}:hover { 
        background-color: mix(nth($val2, 1), $val, nth($val2, 2)) !important
      }
      .t#{$key}-#{$key2} { 
        color: mix(nth($val2, 1), $val, nth($val2, 2)) 
      }
      .hover\:t#{$key}-#{$key2}:hover { 
        color: mix(nth($val2, 1), $val, nth($val2, 2)) !important 
      }
    }
  }
}
```

When overriding the named colors, you can do something similar: 

1. Choose your own base colors, and drop them into the `$named-color` Sass map.
2. If you have chosen base colors _on the darker side of mid-range_, then my `$shades` Sass map will work for you as-is. But if your base colors are lighter or darker, you will have to adjust the `$shades` Sass map accordingly, so that your `-100` shades is not too light and your `-900` shades are not too dark.
3. Notice that since the UI colors are somewhat dark (as per the WCAG 2.1 Level AA guidelines), therefore in the Codebase default decoration colors, the UI colors are set at shade `-600` and the lighter and darker shades are incremented accordingly.

If you can’t get my Sass maps to work on your choice of base colors, then you are on your own – _your design is your design!_ You have three options:

1. Create a separate Sass map/`@each` loop generator for your colors (clone and modify what I have done)
2. Generate your color swatches elsewhere, and copy them into your stylesheet
3. Go totally freestyle – build your own palette of swatches manually

The `hover:` (one shade darker) color utilities only take effect when the visitor moves a pointing device, e.g. mouse or finger on a touch screen, over the element. `hover:` utilities have an `!important` flag, so that they override other colors that have been set elsewhere. That has been done so you can use these utilities on hyperlinks and buttons.

The _border_ color utilities will color the _border on all sides_ (top, right, bottom, and left). But if you have only set borders on top `bt-`, right `br-`, bottom `bb-`, or left `bl-` only those sides will be colored. (You can’t use a combination of Codebase border color utilities on one HTML element.)

There are also a few [extra color utilities](#extra-color-utilies) that I will mention further down this page.

## Applying colors

Examples:

<div class="my-6">
  <p class="b-thin b-green-400 rounded-sm p-block bg-green-200 t-green-700">b-thin b-green-400 rounded-sm p-block bg-green-200 t-green-700</p>
  <p class="t-orange-600">t-orange-600</p>
  <p class="p-3 b-thick b-red-400 hover:b-red-500 bg-red-200 hover:bg-red-300 t-lg t-bold t-red-500 hover:t-red-700">p-3 b-thick b-red-400 hover:b-red-500 bg-red-200 hover:bg-red-300 t-lg t-bold t-red-500 hover:t-red-700</p>
</div>

## UI colors

The UI colors for <label class="label label-warning">warning</label>, <label class="label label-danger">danger</label>, <label class="label label-success">success</label>, <label class="label label-info">info</label>, <label class="label label-primary">primary</label>, <label class="label label-secondary">secondary</label>, and <label class="label label-tertiary">tertiary</label> are set independently from the named colors. You can change the UI colors too, to suit your design.

Codebase’s UI colors have been specifically chosen so that they conform to [WCAG 2.1 Level AA accessibility guidelines](https://www.w3.org/TR/WCAG21/) for user interface elements: they have a color contrast ratio of at least 4.5:1.

In the default decorative color scales (see above), it is the `-500` shade of each that corresponds to the UI colors.

## Color extras

### White and black

`-white` and `-black` background, border, text, and hover states of each. Self explanatory. No shades of either (use the `-gray-` grayscale swatches).

<div class="mb-3 p-3 lg:p-6 bg-primary t-white">
  This panel’s text is colored using <code>t-white</code> Both the horizontal rule and the button below have their border-color set using <code>b-white</code> The button also has <code>hover:b-white</code>
  <hr class="b-white">
  <button class="btn btn-primary b-white hover:b-white">A button</button>
</div>

### UI color utilities

Utilities for the UI colors – for background, border, text, and text hover (UI colors do not have shade suffix variations). Example:

* <span class="inline-block p-block bg-warning t-white">bg-warning</span>
* <span class="inline-block p-block bg-danger t-white">bg-danger</span>
* <span class="inline-block p-block bg-success t-white">bg-success</span>
* <span class="inline-block p-block bg-info t-white">bg-info</span>
* <span class="inline-block p-block bg-primary t-white">bg-primary</span>
* <span class="inline-block p-block bg-secondary t-white">bg-secondary</span>
* <span class="inline-block p-block bg-tertiary t-white">bg-tertiary</span>

### Transparent background

* `bg-transparent` / `hover:bg-transparent`

Useful for removing unwanted background colors. E.g. for creating outline (“ghost”) buttons.

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