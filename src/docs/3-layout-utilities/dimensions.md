---
title: "Block dimensions"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/positions"
nextPage: "/docs/3-layout-utilities/flexbox"
prevLink: "Block positions"
nextLink: "Flexbox"
---

Controlling widths and heights of blocks in one dimension (width _or_ height).

See also [container layouts]({{ '/docs/3-layout-utilities/containers' | url }})

## Width constraint wrappers

**Note:** width _suffixes_ (`-xs`, `-sm` etc.) set the max-width of an element at those specified variables, whereas responsive _prefixes_ (`xs:`, `sm:` etc.) set the media query breakpoint width at which the utility class takes effect.

All Codebase `w-` utility classes allow block elements to have _less than their specified width_ if there isn’t enough space — e.g. if the device width is narrower, or if used within a column that is narrower.

### Max-widths

Similar to [containers]({{ '/docs/3-layout-utilities/containers' | url }}), max-width utilities are set at **256px increments** – as is traditionally used in many web design layouts. They are first set to `width: 100%` and then constrained to these max-widths.

Therefore, blocks with little or no content will be _stretched_ to their max width (or, so far as the viewport width allows, if it is less than the max-width).

* `w-xxs` – max-width: 256px
* `w-xs` – max-width: 512px
* `w-sm` – max-width: 768px
* `w-md` – max-width: 1024px
* `w-lg` – max-width: 1280px
* `w-xl` – max-width: 1536px
* `w-xxl` – max-width: 1792px
* `w-max-100vw` - max-width: 100vw

### Max-width overrides

You can use one of these, for example, when you want an [offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }}) sidebar with `offvanvas-override`, where you don’t want its width constrained to `w-xxs` on a wider viewport, because you have it incorporated into a layout grid column.

* `w-auto` / `xs:w-auto` / `sm:w-auto` / `md:w-auto` / `lg:w-auto`

### Percentile widths

* `w-25%`
* `w-50%`
* `w-75%`
* `w-100%`

## Height constraint wrappers

### Min-heights

* `h-50vh` / `h-100vh`

These utilities will make a block have a _minimum_ of `50vh` or `100vh`.

### Heights

* `h-100%`

This utility will stretch a block vertically to fill the available space. This can be useful e.g. for “equalizing” the heights of inner-wrappers within [flexbox]({{ '/docs/3-layout-utilities/flexbox' | url }}) flex-items.

### Max-heights

* `h-max-100%`

This utility will cause the height of an element to max out at the height of the viewport. This is useful e.g. for [tall modals]({{ '/docs/7-alpinejs-components/modals/#panel-with-scrolling-body' | url }}) with a lot of scrolling content.

## Two Dimensions

Some simple utilities for controlling blocks in two dimensions (width _and_ height).

You can also control blocks two-dimensionally using [flexbox]({{ '/docs/3-layout-utilities/flexbox' | url }}), [grid]({{ '/docs/3-layout-utilities/grid' | url }}), and [aspect-ratios]({{ '/docs/3-layout-utilities/aspect-ratios' | url }}).

### Squares

You usually see thumbail images or avatars set in squares – or circles, which are fully-rounded squares.

With Codebase, you can use `square` to make elements square, and `square rounded-full overflow-hidden` to make elements circular.

* `square-sm`: 3rem<sup>2</sup> (24px<sup>2</sup> default)
* `square-md` (alias `square`): 4.5rem<sup>2</sup> (72px<sup>2</sup> default)
* `square-lg`: 6rem<sup>2</sup> (96px<sup>2</sup> default)

### Responsive squares

`square`’s have the full set of media query breakpoint variations (`md:`, `sm:`, `md:`, and `lg:`) so that you can make them larger or smaller in various layout contexts.

<div class="flex flex-middle flex-gap mb-1">
  <div>
    <div class="square-sm">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A square image">
    </div>
  </div>
  <div>
    <div class="square">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A square image">
    </div>
  </div>
  <div>
    <div class="square-lg">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A square image">
    </div>
  </div>
</div>

_Image attribution:_ Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com).

```html
<div class="square-sm">
  <img src="" width="" height="" alt="">
</div>

<div class="square">
  <img src="" width="" height="" alt="">
</div>

<div class="square-lg">
  <img src="" width="" height="" alt="">
</div>
```

<div class="flex flex-middle flex-gap mb-1">
  <div>
    <div class="square-sm rounded-full overflow-hidden">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A fully rounded square image">
    </div>
  </div>
  <div>
    <div class="square rounded-full overflow-hidden">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A fully rounded square image">
    </div>
  </div>
  <div>
    <div class="square-lg rounded-full overflow-hidden">
      <img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A fully rounded square image">
    </div>
  </div>
</div>

_Image attribution:_ Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com).

**Note:** `rounded-*` utility classes have `overflow: hidden` built in, so that content (in these examples, images) do not protrude out of the rounded corners.

```html
<div class="square-sm rounded-full overflow-hidden">
  <img src="" width="" height="" alt="">
</div>

<div class="square rounded-full overflow-hidden">
  <img src="" width="" height="" alt="">
</div>

<div class="square-lg rounded-full overflow-hidden">
  <img src="" width="" height="" alt="">
</div>
```

### Box

The `box` utility expands (you could say, “inflates”) an element to the full width and height of its wrapping block – provided the wrapping block has `position: relative` (e.g. using the `relative` utility class).

`box` has `position: absolute`, therefore it will be displayed on a layer behind or in front of any sibling elements within the same wrapper – depending on your HTML DOM order.

`box` is used to make a hero image fill its wrapper in the Codebase [hero component]({{ '/docs/7-simple-components/heros' | url }}).

<div class="mb-3 aspect-ratio-16x9 relative">
  <img class="box img-cover" src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
  <div class="aspect-ratio-16x9 flex flex-column flex-center flex-middle">
    <div class="m-4 p-2 xs:p-6 bg-white-glass-3 t-center t-lg">
      <h1 class="t-semibold t-black">Overlay title</h1>
      <p class="mb-0 t-black">Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com)._

```html
<div class="aspect-ratio-16x9 relative">
  <img class="box img-cover" src="" width="" height="" loading="lazy" alt="">
  <div class="aspect-ratio-16x9 flex flex-column flex-center flex-middle">
    <div class="m-4 p-2 xs:p-6 bg-white-glass-3 t-center t-lg">
      <h1 class="t-semibold t-black">Overlay title</h1>
      <p class="mb-0 t-black">Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>
```