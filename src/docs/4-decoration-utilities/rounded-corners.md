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

* `rounded-sm` / `rounded` (alias `rounded-md`) / `rounded-lg` / `rounded-xl` / `rounded-pill` / `rounded-circle` (alias `rounded-full`)

New in Codebase v.5.2.9: `rounded-xl`.

<div class="my-6">
  <div class="grid gap-3 equal-2-cols xs:equal-4-cols t-center">
    <div>
      <div class="mx-auto p-1 b-thin rounded-sm" style="width:100px;height:100px;"></div>rounded-sm<br><span class="t-teal-600">border-radius<br>= 0.25rem (4px default)</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded" style="width:100px;height:100px;"></div>rounded<br>(a.k.a. rounded-md)<br><span class="t-teal-600">border-radius<br>= 0.5rem (8px default)</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-lg" style="width:100px;height:100px;"></div>rounded-lg<br><span class="t-teal-600">border-radius<br>= 1rem (16px default)</span>
    </div>
    <div>
      <div class="mx-auto p-1 b-thin rounded-xl" style="width:100px;height:100px;"></div>rounded-xl<br><span class="t-teal-600">border-radius<br>= 2.5rem (40px default)</span>
    </div>
    <div class="cols-1-2">
      <div class="mx-auto p-1 b-thin rounded-pill" style="width:200px;height:100px;">&nbsp;</div>rounded-pill<br><span class="t-teal-600">This will round the left and right of buttons, form elements, etc. where the content width is greater than its height.</span>
    </div>
    <div class="cols-1-2 xs:cols-3-4">
      <div class="mx-auto p-1 b-thin rounded-circle" style="width:100px;height:100px;"></div>rounded-circle<br>(a.k.a. rounded-full)<br><span class="t-teal-600">This will produce an ellipse if the block element is not a square.</span>
    </div>
  </div>
</div>

Buttons and form inputs have a border radius equivalent to that of `rounded-sm`.

`rounded`, `rounded-lg`, and `rounded-xl` are designed for nesting when you pair these with  `p-1`, `p-2`, or `p-3` respectively. As you can see below, the nested corners curve nicely without “pinching”.

<p class="mb-1"><code>rounded-xl p-3</code>:</p>
<div class="mb-2 b-thin rounded-xl p-3">
<p class="mb-1"><code>rounded-lg p-2</code>:</p>
<div class="b-thin rounded-lg p-2">
<p class="mb-1"><code>rounded p-1</code>:</p>
<div class="b-thin rounded p-1">
<button>Button</button> — has equivalent of <code>rounded-sm</code> built in
</div>
</div>
</div>

The CSS variables for Codebase border radii are as follows:

## Rounded corners on images

If you use a `rounded` utility on a _wrapper_ around an image (without padding), you will also need to add `overflow: hidden;` so that the corners of the image are are hidden (seemingly “clipped”) by the wrapper’s rounded corners.

<div class="grid gap-3 sm:equal-3-cols">
  <div>
    <img class="rounded mb-2" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy">
    <p>Image with utility class <code>&lt;img class="rounded" src="" alt=""&gt;</code> — works OK</p>
  </div>
  <div>
    <div class="rounded mb-2"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy"></div>
    <p>Image wrapped in <code>&lt;div class="rounded"&gt;</code> (but the image corners protrude into the rounded corners)</p>
  </div>
  <div>
    <div class="rounded overflow-hidden mb-2"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy"></div>
    <p>Image wrapped in <code>&lt;div class="rounded overflow-hidden"&gt;</code></p>
  </div>
</div>

Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com/).

## Unrounded corner overrides

If you want to round only some corners and not others, then apply one of these `unrounded-*` classes to any element that has rounded corners.

These `unrounded-*` classes work on all the `rounded-*` variations above. You can also use them on buttons and form elements.

* `unrounded-top-right` / `unrounded-bottom-right` / `unrounded-bottom-left` / `unrounded-top-left`
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
  <div class="xs:w-25% mb-2">
    <div class="mx-auto p-1 b-thin rounded-lg unrounded-top" style="width:100px;height:100px;"></div>unrounded-top
  </div>
  <div class="xs:w-25% mb-2">
    <div class="mx-auto p-1 b-thin rounded-lg unrounded" style="width:100px;height:100px;"></div>unrounded <br> <span class="t-teal-600">(unrounded-all)</span>
  </div>
</div>
</div>

`unrounded` (alias `unrounded-all`) is useful if you need to remove rounded corners on a middle button within a button bar.

## Other things you can do with rounded corners

You can use the Codebase variables for border radii directly in your CSS. The variables are as follows:

```scss
:root {
  // border radius for rounded corners
  --rad-sm: .25rem; // 4px default
  --rad-md: .5rem; // 8px default
  --rad-lg: 1rem; // 16px default
  --rad-xl: 2.5rem; // 40px default
  --rad-pill: 99rem;
  --rad-circle: 50%;
}
```

For example, you can assign different values to each corner:

<div class="w-xxs mx-auto my-6 grid equal-3-cols gap-1">
<div class="cols-1-3 overflow-hidden" style="border-radius: var(--rad-xl) var(--rad-xl) var(--rad-md) var(--rad-md)">
<img src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
</div>
<div class="p-cell flex flex-center bg-teal-200" style="border-radius: var(--rad-md) var(--rad-md) var(--rad-md) var(--rad-xl)">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
</div>
<div class="rounded p-cell flex flex-center bg-teal-200">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path></svg>
</div>
<div class="p-cell flex flex-center bg-teal-200" style="border-radius: var(--rad-md) var(--rad-md) var(--rad-xl) var(--rad-md)">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg></div>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni) from [Pexels](https://www.pexels.com)._


```html
<div class="w-xxs mx-auto my-6 grid equal-3-cols gap-1">
  <div 
  class="cols-1-3 overflow-hidden" 
  style="border-radius: var(--rad-xl) var(--rad-xl) var(--rad-md) var(--rad-md)"
  >
    <!-- image -->
  </div>
  <div 
  class="p-cell flex flex-center bg-teal-200" 
  style="border-radius: var(--rad-md) var(--rad-md) var(--rad-md) var(--rad-xl)"
  >
    <!-- icon -->
  </div>
  <div class="rounded p-cell flex flex-center bg-teal-200">
    <!-- icon -->
  </div>
  <div 
  class="p-cell flex flex-center bg-teal-200" 
  style="border-radius: var(--rad-md) var(--rad-md) var(--rad-xl) var(--rad-md)"
  >
    <!-- icon -->
  </div>
</div>
```
