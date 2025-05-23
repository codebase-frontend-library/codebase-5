---
title: "Responsive design in Codebase"
layout: layout.njk
prevPage: "/docs/1-getting-started/introduction"
nextPage: "/docs/1-getting-started/element-grid"
prevLink: "Introduction"
nextLink: "Element grid"
---

Responsive design in Codebase is accomplished by [containers]({{ '/docs/3-layout-utilities/containers' | url }}), [flexbox]({{ '/docs/3-layout-utilities/flexbox' | url }}) and [grid]({{ '/docs/3-layout-utilities/grid' | url }}) layouts, and various utility classes all controlled by media query breakpoint widths, plus a few utilities controlled by `CSS clamp()`.</p>

## Layouts

Layouts in Codebase follow the familiar responsive “from small screens up” design methodology. For controlling layouts on increasingly wider viewports, Codebase has several containers and max-width wrappers:

* [Containers]({{ '/docs/3-layout-utilities/containers' | url }}) have a max-width that will be  either 2rem less than 100%, or a set max width (in the defaults), thereby preventing legibility problems), and x-axis margin-auto-centering.
* Codebase also has [max-width wrappers]({{ '/docs/3-layout-utilities/dimensions/#max-widths' | url }}) that simply have set max widths.

## Widths and breakpoint tiers

Codebase has several layout widths built in, that are used in [containers]({{ '/docs/3-layout-utilities/containers' | url }}), [max-width wrappers]({{ '/docs/3-layout-utilities/dimensions/#max-widths' | url }}), [offcanvas panel overrides]({{ '/docs/7-alpinejs-components/offcanvas/#offcanvas-override-(for-wide-viewports)' | url }}), and several [typographic styles](#typography).

These pre-set widths are in increments of 256px. Some are used in other web frameworks (e.g. Bootstrap), but in Codebase series is extended. You may also recognise some of these dimensions from Apple devices (e.g. the classic iPad has viewport size 1024px &times; 768px, and the 16 inch Macbook pro has viewport width 1792px).

Many of Codebase’s CSS utility classes have media query width variants. Four variants are available for each, indicated by a _colon-separated prefix_ that indicates the media query width at which the utility style takes effect. Therefore, there five tiers are available:

<table class="table">
  <thead>
    <tr>
      <th>Width suffix</th>
      <th>Breakpoint tier prefix</th>
      <th>Default width value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>-xxs</code></td>
      <td>—</td>
      <td>256px</td>
    </tr>
    <tr>
      <td><code>-xs</code></td>
      <td><code>xs:</code></td>
      <td>512px</td>
    </tr>
    <tr>
      <td><code>-sm</code></td>
      <td><code>sm:</code></td>
      <td>768px</td>
    </tr>
    <tr>
      <td><code>-md</code></td>
      <td><code>md:</code></td>
      <td>1024px</td>
    </tr>
    <tr>
      <td><code>-lg</code></td>
      <td><code>lg:</code></td>
      <td>1280px</td>
    </tr>
    <tr>
      <td><code>-xl</code></td>
      <td>—</td>
      <td>1536px</td>
    </tr>
    <tr>
      <td><code>-xxl</code></td>
      <td>—</td>
      <td>1792px</td>
    </tr>
  </tbody>
</table>

Codebase CSS classes that have media query width variants:

1. [Block utilities]({{ '/docs/3-layout-utilities/blocks' | url }})
2. [Flexbox layouts]({{ '/docs/3-layout-utilities/flexbox' | url }})
3. [Grid layouts]({{ '/docs/3-layout-utilities/grid' | url }})
4. [Block positions]({{ '/docs/3-layout-utilities/positions' | url }})
5. [Floats]({{ '/docs/3-layout-utilities/floats' | url }})
6. [Spacing]({{ '/docs/4-decoration-utilities/spacing' | url }}) (margins and paddings) and [borders]({{ '/docs/4-decoration-utilities/borders' | url }})
7. [Invisibility utilities]({{ '/docs/3-layout-utilities/invisibility' | url }})
8. Offcanvas panel components, powered by [AlpineJS]({{ '/docs/8-alpinejs-components/offcanvas' | url }})

There are also some and viewport-height based [heights]({{ '/docs/3-layout-utilities/dimensions/#heights' | url }}) utilities

## Typography

Codebase typography is also responsive to viewport width (device size):

* The default text size is 100% (usually 16px) on small devices, bumping up to 112.5% at 768px (same as `sm:` default) (usualy 18px). So for text at 768px and above, 1rem = 18px.
* Utilities for [making text bigger]({{ '/docs/5-typographic-utilities/making-text-bigger' | url }}):
    * Heading-sized utility classes `h1` to `h6`
    * `t-lg` wrapper to simply increase text size by ×1.25 (so for )
    * `t-display` wrapper CSS `clamp()` ramp responsively increases text size by ×1.25 up to ×2 if viewport width allows
    * `t-long-read` wrapper CSS `clamp()` ramp responsively increases text size by ×1 up to ×1.25 if viewport width allows
* Responsive [text alignment]({{ '/docs/5-typographic-utilities/text-alignment' | url }}) utilities

## Infographic: Responsive CSS classes in Codebase

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="relative mb-2 b-thin rounded py-2"
>
  <div class="absolute right inline-block mr-2 sm:hidden-below">
    <button
      type="button"
      @click="open = true"
      :aria-controls="$id('modal')"
      :aria-expanded="open"
      aria-expanded="false"
      aria-label="Enlarge infographic"
      class="btn-primary btn-icon btn-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
    </button>
  </div>
  <div
    :id="$id('modal')"
    :aria-label="$id('modal')"
    x-trap.noscroll.inert="open"
    :class="open ? 'fixed box z-index-999' : ''"
    @keyup.escape.prevent.stop="open = false"
  >
    <div
      :class="open ? 'box py-6 bg-white overflow-y scale-in' : 'mb-2'"
    >
      <button
        type="button"
        x-show="open"
        class="fixed top right z-index-1 m-2 btn-sm btn-primary btn-icon"
        @click="open = false"
        :aria-expanded="open"
        aria-label="close popout"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 160 96 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="48 160 96 160 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="160 208 160 160 208 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="96 48 96 96 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
      </button>
      <div class="container-lg">
        <p class="t-center t-semibold" :class="open ? 'h1' : 'h4'">Responsive CSS classes<br>in Codebase</p>
        <img src="{{ '/img/responsive-design.svg' | url }}" width="1280" height="1792">
      </div>
    </div>
  </div>
</div>
