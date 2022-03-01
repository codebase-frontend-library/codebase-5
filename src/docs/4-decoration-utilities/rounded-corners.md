---
title: "Rounded corners"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/borders"
nextPage: "/docs/4-decoration-utilities/box-shadows"
prevLink: "Borders"
nextLink: "Box shadows"
---

There are several options for rounded corners in Codebase, handled by CSS border radius. All of these apply to <em>all four corners</em> of an element.

## Five levels of roundness

* `rounded-sm` / `rounded` / `rounded-lg` / `rounded-pill` / `rounded-full`

<div class="my-6">
  <div class="grid gap equal-2-cols sm:equal-3-cols t-center">
    <div>
      <div class="mx-auto p-1 b-thin rounded-sm" style="width:100px;height:100px;"></div>rounded-sm <br> <span class="t-teal-600">border-radius<br>= 0.25rem (4px) default</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded" style="width:100px;height:100px;"></div>rounded <br> <span class="t-teal-600">border-radius<br>= 0.5rem (8px) default</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-lg" style="width:100px;height:100px;"></div>rounded-lg <br> <span class="t-teal-600">border-radius<br>= 1rem (16px) default</span>
    </div>
    <div class="cols-1-2">
      <div class="mx-auto p-1 b-thin rounded-pill" style="width:100px;">&nbsp;</div>rounded-pill <br> <span class="t-teal-600">This will round the left and right of buttons, form elements, etc. where the content width is greater than its height.</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-full" style="width:100px;height:100px;"></div>rounded-full <br> <span class="t-teal-600">This will produce an ellipse if the block element is not a square.</span>
    </div>
  </div>
</div>

## Rounded corners on images

If you use a `rounded` utility on a _wrapper_ around an image without padding), you will also need to add `overflow: hidden;` so that the corners of the image are hidden.

<div class="grid gap sm:equal-3-cols">
  <div>
    <img class="rounded mb-3" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy">
    <p>Image with utility class <code>&lt;img class="rounded" src="" alt=""&gt;</code> — works OK</p>
  </div>
  <div>
    <div class="rounded mb-3"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy"></div>
    <p>Image wrapped in <code>&lt;div class="rounded"&gt;</code> (but the image corners protrude into the rounded corners)</p>
  </div>
  <div>
    <div class="rounded overflow-hidden mb-3"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy"></div>
    <p>Image wrapped in <code>&lt;div class="rounded overflow-hidden"&gt;</code></p>
  </div>
</div>

Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com/).

## Unrounded corner overrides

If you want to round only some corners and not others, then apply one of these `unrounded-*` classes to any element that has rounded corners.

These `unrounded-*` classes work on all the `rounded-*` variations above. They also work on buttons and form elements.

* `unrounded-top-right` / `unrounded-bottom-right` / `unrounded-bottom-left` / `rounded-top-left`
* `unrounded-top` / `unrounded-bottom` / `unrounded-left` / `rounded-right`
* `unrounded-all` (alias `unrounded`)

<div class="my-6">
<div class="grid gap equal-2-cols sm:equal-4-cols t-center">
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-top-right" style="width:100px;height:100px;"></div>unrounded-top-right
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-bottom-right" style="width:100px;height:100px;"></div>unrounded-bottom-right
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-bottom-left" style="width:100px;height:100px;"></div>unrounded-bottom-left
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-top-left" style="width:100px;height:100px;"></div>unrounded-top-left
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-right" style="width:100px;height:100px;"></div>unrounded-right
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-bottom" style="width:100px;height:100px;"></div>unrounded-bottom
  </div>
  <div>
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-left" style="width:100px;height:100px;"></div>unrounded-left
  </div>
  <div class="xs:w-25% mb-3">
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-top" style="width:100px;height:100px;"></div>unrounded-top
  </div>
  <div class="xs:w-25% mb-3">
    <div class="mx-auto p-1 b-thin rounded-lg unrounded" style="width:100px;height:100px;"></div>unrounded <br> <span class="t-teal-600">(unrounded-all)</span>
  </div>
</div>
</div>

`unrounded` (alias `unrounded-all`) is useful if you need to remove rounded corners on a middle button in a button bar.