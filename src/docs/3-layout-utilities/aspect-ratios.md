---
title: "Aspect ratios"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/grid"
nextPage: "/docs/3-layout-utilities/floats"
prevLink: "Grid"
nextLink: "Floats"
---

Here are several utility classes that can be used on _wrapper_ elements for constraining the aspect ratio of whatever is their immediate child element. These can be used to wrap tiles, cards, images, videos, embeds, or whatever you need to be constrained to an aspect ratio.

Since v.1.0.3, Codebase 5 uses the new `aspect-ratio` CSS property, since this has seen [widespread adoption in browsers in 2021](https://caniuse.com/mdn-css_properties_aspect-ratio).

## Notes on aspect ratios

1. Codebase 5’s `aspect-ratio` classes maintain a block wrapper’s aspect ratio _unless deformed by excess content within_. For example, you may have a [hero image with a text overlay]({{ '/docs/6-simple-components/heros' | url }}). On wider viewports it makes sense to maintain the aspect ratio but on small phones the text may be too much for the down-scaled wrapper, so you will want it to be taller than the aspect ration requires in order to still contain the overlay text.

## Image/video aspect ratios 

<div class="mb-3 flex flex-grow-equal gap-1">
  <div>
    <div class="aspect-ratio-9x16 b-thin bg-gray-100">
      9×16
    </div>
  </div>
  <div>
    <div class="aspect-ratio-5x7 b-thin bg-gray-100">
      5×7
    </div>
  </div>
  <div>
    <div class="aspect-ratio-7x5 b-thin bg-gray-100">
      7×5
    </div>
  </div>
  <div>
    <div class="aspect-ratio-16x9 b-thin bg-gray-100">
      16×9
    </div>
  </div>
  <div>
    <div class="aspect-ratio-21x9 b-thin bg-gray-100">
      21×9
    </div>
  </div>
  <div>
    <div class="aspect-ratio-24x9 b-thin bg-gray-100">
      24×9
    </div>
  </div>
  <div>
    <div class="aspect-ratio-32x9 b-thin bg-gray-100">
      32×9
    </div>
  </div>
</div>

```html
<div class="aspect-ratio-9x16"> ... </div>

<div class="aspect-ratio-5x7"> ... </div>

<div class="aspect-ratio-7x5"> ... </div>

<div class="aspect-ratio-16x9"> ... </div>

<div class="aspect-ratio-21x9"> ... </div>

<div class="aspect-ratio-24x9"> ... </div>

<div class="aspect-ratio-32x9"> ... </div>
```

**Note:** `aspect-ratio-24×9` and `aspect-ratio-32×9` have been included in Codebase, although these are not common image or video aspect ratios, becausethey are useful for _full-width hero components_ where you want your top menubar _plus_ the hero _plus_ a teaser of your subsequent content to be on display on a laptop screen (laptops, display monitors, and HDTVs often have screen sizes of 16x9 or 21×9 aspect ratio).

## Aspect ratio styles can be distorted

`aspect-ratio-*` wrappers constrain their content to the set aspect ratio _unless there’s too much content_ in the immediate child element. This means that at small viewport widths, if you have a lot of text content inside, it will “override” the aspect ratio for phones. Example:

<div class="mb-3 aspect-ratio-21x9 bg-amber-200 flex flex-center flex-middle">
  <div class="w-xs p-1">This content is within a wrapper with <code class="b-thin">aspect-ratio-21x9</code> but at smaller viewport widths, all this text will deform the aspect ratio wrapper constraint. (That’s a good thing.) // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ad corrupti expedita blanditiis! Consequatur mollitia temporibus dolorum, dolorem dolor soluta vero ab facere sint velit. Dolor consequuntur repellat, minus molestiae totam earum accusantium dolorum eligendi exercitationem ratione aliquam quibusdam nihil veniam atque labore magni doloremque iusto!</div>
</div>

```html
<div class="aspect-ratio-21x9 bg-amber-200 flex flex-center flex-middle">
  <div class="w-xs p-1">
    Lorem ipsum dolor sit amet...
  </div>
</div>
```

This deformation is a good thing, because it means that downstream designers and content creators can’t break your layout wrapper so easily.

However, in situations where you don’t want this deformation to happen, you can simply wrap your content in a block with the CSS class [box]({{ '/docs/3-layout-utilities/dimensions/#box' | url }}) – and you may need to add `overflow-y` if you have content therefore needs to be scrolled.

## Squared tile aspect ratios

For setting up squared tile arrays, as popularised by the modern Microsoft Windows home screen (or, desktop) layout.

There are sufficient aspect ratio squared tile utility classes, for up to a 6×6 tile layout — and “responsive” breakpoint width `xs`, `sm`, `md`, and `lg` variants of each squared tile are included. This is because Codebase  squared tile aspect ratios can be mapped on to the Codebase 6×6 [grid]({{ '/docs/3-layout-utilities/grid' | url }}) system.

Example:

<div class="mb-3 grid equal-6-cols">
  <div class="col-1 row-1 aspect-ratio-1x1 b-thin bg-gray-100">
    1×1
  </div>
  <div class="col-2 rows-1-2 aspect-ratio-1x2 b-thin bg-gray-100">
    1×2
  </div>
  <div class="col-3 rows-1-3 aspect-ratio-1x3 b-thin bg-gray-100">
    1×3
  </div>
  <div class="cols-4-6 row-1 aspect-ratio-3x1 b-thin bg-gray-100">
    3×1
  </div>
  <div class="col-1 row-2 aspect-ratio-1x1 b-thin bg-gray-100">
    1×1
  </div>
  <div class="cols-4-6 rows-2-5 aspect-ratio-3x5 b-thin bg-gray-100">
    3×5
  </div>
  <div class="cols-1-2 row-3 aspect-ratio-2x1 b-thin bg-gray-100">
    2×1
  </div>
  <div class="cols-1-3 rows-4-5 aspect-ratio-1x1 b-thin bg-gray-100">
    1×1
  </div>
</div>

```html
<div class="mb-3 grid equal-6-cols">
  <div class="col-1 row-1 aspect-ratio-1x1">
    1×1
  </div>
  <div class="col-2 rows-1-2 aspect-ratio-1x2">
    1×2
  </div>
  <div class="col-3 rows-1-3 aspect-ratio-1x3">
    1×3
  </div>
  <div class="cols-4-6 row-1 aspect-ratio-3x1">
    3×1
  </div>
  <div class="col-1 row-2 aspect-ratio-1x1">
    1×1
  </div>
  <div class="cols-4-6 rows-2-5 aspect-ratio-3x5">
    3×5
  </div>
  <div class="cols-1-2 row-3 aspect-ratio-2x1">
    2×1
  </div>
  <div class="cols-1-3 rows-4-5 aspect-ratio-1x1">
    1×1
  </div>
</div>
```

Available square tile `aspect-ratio-` utility suffixes in Codebase:

<div class="overflow-x mb-3">
<table class="table">
  <thead>
    <tr>
      <th colspan="2" rowspan="2"></th>
      <th colspan="6" class="t-center">Horizontal aspect</th>
    </tr>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6" style="width: 2.5rem; padding: 1rem 0.5rem; writing-mode: vertical-rl; text-orientation: mixed; text-align: center; font-weight: bold;">Vertical aspect</td>
      <td class="t-bold">1</td>
      <td><code>-1x1</code></td>
      <td><code>-2x1</code></td>
      <td><code>-3x1</code></td>
      <td><code>-4x1</code></td>
      <td><code>-5x1</code></td>
      <td><code>-6x1</code></td>
    </tr>
    <tr>
      <td class="t-bold" style="width: 3rem;">2</td>
      <td><code>-1x2</code></td>
      <td>—</td>
      <td><code>-3x2</code></td>
      <td>—</td>
      <td><code>-5x2</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td class="t-bold">3</td>
      <td><code>-1x3</code></td>
      <td><code>-2x3</code></td>
      <td>—</td>
      <td><code>-4x3</code></td>
      <td><code>-5x3</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td class="t-bold">4</td>
      <td><code>-1x4</code></td>
      <td>—</td>
      <td><code>-3x4</code></td>
      <td>—</td>
      <td><code>-5x4</code></td>
      <td>—</td>
    </tr>
    <tr>
      <td class="t-bold">5</td>
      <td><code>-1x5</code></td>
      <td><code>-2x5</code></td>
      <td><code>-3x5</code></td>
      <td><code>-4x5</code></td>
      <td>—</td>
      <td><code>-6x5</code></td>
    </tr>
    <tr>
      <td class="t-bold">6</td>
      <td><code>-1x6</code></td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td><code>-6x5</code></td>
      <td>—</td>
    </tr>
  </tbody>
</table>
</div>

The ‘missing’ utilities are unnecessary. E.g. you don’t need `-3x3` because you can use `-1x1`; you don’t need `-2x4` because you can use `-1x2`; and so on.

Besides the “all viewports” examples above, there are media query tiered variants of the squared tile aspect ratio classes: `xs:`, `sm:`, `md:`, and `lg:`.

These variants enable you to both _set up_ and _rearrange_ a square tile array for different device sizes.

Another example:

<div class="mb-3 grid xs:equal-2-cols sm:equal-3-cols">
  <div class="xs:col-1 xs:rows-1-2 aspect-ratio-1x1 xs:aspect-ratio-1x2 relative">
    <img class="box img-cover" src="{{ '/img/pexels-daniyal-ghanavati-110320.jpg' | url }}" width="640" height="978" loading="lazy" alt="Photo by Daniyal Ghanavati from Pexels">
  </div>
  <div class="sm:col-2 sm:row-1 aspect-ratio-1x1 relative">
    <img class="box img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
  </div>
  <div class="sm:col-3 sm:row-1 aspect-ratio-1x1 relative">
    <img class="box img-cover" src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="1280" height="834" loading="lazy" alt="Photo by Erik Karits from Pexels">
  </div>
  <div class="xs:cols-1-2 xs:row-3 sm:cols-2-3 sm:row-2 aspect-ratio-1x1 xs:aspect-ratio-2x1 relative">
    <img class="box img-cover" src="{{ '/img/pexels-trudie-roden-2419158.jpg' | url }}" width="1280" height="640" loading="lazy" alt="Photo by Trudie Roden from Pexels">
  </div>
</div>

_Images:_ 
gulls by [Daniyal Ghanavati](https://www.pexels.com/@daniyal-ghanavati-10741?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels); robin by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/); swans by [Trudie Roden](https://www.pexels.com/@trudie-roden-1054578?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels); owl by [Eric Karits](https://www.pexels.com/@erik-karits-2093459?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels). All obtained from [Pexels](https://www.pexels.com).

```html
<div class="grid xs:equal-2-cols sm:equal-3-cols">
  <div class="xs:col-1 xs:rows-1-2 aspect-ratio-1x1 xs:aspect-ratio-1x2 relative">
    <img class="box img-cover" src="" alt="">
  </div>
  <div class="sm:col-2 sm:row-1 aspect-ratio-1x1 relative">
    <img class="box img-cover" src="" alt="">
  </div>
  <div class="sm:col-3 sm:row-1 aspect-ratio-1x1 relative">
    <img class="box img-cover" src="" alt="">
  </div>
  <div class="xs:cols-1-2 xs:row-3 sm:cols-2-3 sm:row-2 aspect-ratio-1x1 xs:aspect-ratio-2x1 relative">
    <img class="box img-cover" src="" alt="">
  </div>
</div>
```