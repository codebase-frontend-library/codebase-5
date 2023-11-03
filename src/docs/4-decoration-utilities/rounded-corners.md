---
title: "Rounded corners"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/borders"
nextPage: "/docs/4-decoration-utilities/box-shadows"
prevLink: "Borders"
nextLink: "Box shadows"
---

There are several options for rounded corners in Codebase, handled by CSS border radius. All of these apply to <em>all four corners</em> of an element.

## Six “levels” of roundness

* `rounded-sm` / `rounded` / `rounded-lg` / `rounded-xl` / `rounded-pill` / `rounded-full`

New in Codebase v.5.2.9: `rounded-xl`.

<div class="my-6">
  <div class="grid gap-3 equal-2-cols xs:equal-4-cols t-center">
    <div>
      <div class="mx-auto p-1 b-thin rounded-sm" style="width:100px;height:100px;"></div>rounded-sm <br> <span class="t-teal-600">border-radius<br>= 0.25rem (4px) default</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded" style="width:100px;height:100px;"></div>rounded <br> <span class="t-teal-600">border-radius<br>= 0.5rem (8px) default</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-lg" style="width:100px;height:100px;"></div>rounded-lg <br> <span class="t-teal-600">border-radius<br>= 1rem (16px) default</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-xl" style="width:100px;height:100px;"></div>rounded-xl <br> <span class="t-teal-600">border-radius<br>= 2rem (40px) default</span>
    </div>
    <div class="cols-1-2">
      <div class="mx-auto p-1 b-thin rounded-pill" style="width:200px;height:100px;">&nbsp;</div>rounded-pill <br> <span class="t-teal-600">This will round the left and right of buttons, form elements, etc. where the content width is greater than its height.</span>
    </div>
    <div class="cols-1-2 xs:cols-3-4">
      <div class="mx-auto p-1 b-thin rounded-full" style="width:100px;height:100px;"></div>rounded-full <br> <span class="t-teal-600">This will produce an ellipse if the block element is not a square.</span>
    </div>
  </div>
</div>

Buttons and form inputs have a border radius equivalent to that of `rounded-sm`.

`rounded`, `rounded-lg`, and `rounded-xl` are designed for nesting when you pair these with  `p-1`, `p-2`, or `p-3` respectively. As you can see below, the nested corners curve nicely without “pinching”.

<p class="mb-1"><code>rounded-xl p-3</code>:</p>
<div class="mb-3 b-thin rounded-xl p-3">
<p class="mb-1"><code>rounded-lg p-2</code>:</p>
<div class="b-thin rounded-lg p-2">
<p class="mb-1"><code>rounded p-1</code>:</p>
<div class="b-thin rounded p-1">
<button>Button</button> — has equivalent of <code>rounded-sm</code> built in
</div>
</div>
</div>

## Rounded corners on images

If you use a `rounded` utility on a _wrapper_ around an image (without padding), you will also need to add `overflow: hidden;` so that the corners of the image are are hidden (seemingly “clipped”) by the wrapper’s rounded corners.

<div class="grid gap-3 sm:equal-3-cols">
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
<div class="grid gap-3 equal-2-cols sm:equal-4-cols t-center">
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