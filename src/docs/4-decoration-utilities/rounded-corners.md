---
title: "Rounded corners"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/borders"
nextPage: "/docs/4-decoration-utilities/box-shadows"
prevLink: "Borders"
nextLink: "Box shadows"
---

**New in Codebase 5.3.3:** Reinvention of the way Codebase handles rounded corners. Breaking changes: (1.) Different border radius size classes now only provide _values_ &ndash; they need to be paired with `rounded` (or specific rounded corner class, e.g. `rounded-tl`) as a modifier; (2.) Now there is only one `unrounded` reset &ndash; instead e.g. for form/button combos, start from `unrounded` and add what you need. (3.) For fully rounded or circular rounding, you now only need `rounded-pill`.

The simplest rounded-corner utility in Codebase is `rounded`:

<div class="w-xxs mx-auto my-6 b-thin rounded p-2"><code>rounded</code><br>border-radius<br>= 0.5rem (8px default)</div>

This will round all four corners by the default 0.5rem.

## Rounding each corner separately

_Instead of_ using `rounded`, you can use one or more of the following:

* `rounded-tl` top-left / `rounded-tr` top-right / `rounded-br` bottom-right / `rounded-bl` bottom-left

These will round one specific corner by the default 0.5rem.

<div class="my-6 grid xs:equal-2-cols md:equal-4-cols gap-4">
  <div class="t-center">
    <div class="mx-auto mb-1 p-1 b-thin rounded-tl" style="width:100px;height:100px;"></div><code>rounded-tl</code></span>
  </div>
  <div class="t-center">
    <div class="mx-auto mb-1 p-1 b-thin rounded-tr" style="width:100px;height:100px;"></div><code>rounded-tr</code></span>
  </div>
  <div class="t-center">
    <div class="mx-auto mb-1 p-1 b-thin rounded-br" style="width:100px;height:100px;"></div><code>rounded-br</code></span>
  </div>
  <div class="t-center">
    <div class="mx-auto mb-1 p-1 b-thin rounded-bl" style="width:100px;height:100px;"></div><code>rounded-bl</code></span>
  </div>
</div>

You can combine these classes, e.g. `rounded-tl rounded-tr` will round both top corners.

## Five “levels” of roundness

Each of the five rounded corner options above provides rhe default 0.5rem border radius. If you want a different border radius (that _potentially applies to all four corners_), add one of the following modifiers:

* `rounded-sm` / `rounded` / `rounded-lg` / `rounded-xl` / `rounded-pill`

**Note:** these modifiers do not provide the border-radius _property_, only the _value_ (by a CSS variable). You need to pair each of these modifiers with (at least) one of the five rounded corner options above.

Examples using `rounded` (the default; all corners rounded):

<div class="my-6 grid gap-3 equal-2-cols sm:equal-4-cols t-center">
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-sm" style="width:100px;height:100px;"></div><code>rounded rounded-sm</code><br><span class="t-teal-600">border-radius<br>= 0.25rem (4px default)</span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded" style="width:100px;height:100px;"></div><code>rounded</code><br>(default)<br><span class="t-teal-600">border-radius<br>= 0.5rem (8px default)</span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-lg" style="width:100px;height:100px;"></div><code>rounded rounded-lg</code><br><span class="t-teal-600">border-radius<br>= 1rem (16px default)</span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-xl" style="width:100px;height:100px;"></div><code>rounded rounded-xl</code><br><span class="t-teal-600">border-radius<br>= 2.5rem (40px default)</span>
  </div>
</div>
<div class="my-6 grid gap-3 equal-2-cols sm:equal-3-cols t-center">
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-pill" style="width:200px;height:100px;">&nbsp;</div><code>rounded rounded-pill</code><br><span class="t-teal-600">This will round the left and right corners where the content width is greater than its height.</span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-pill" style="width:100px;height:200px;">&nbsp;</div><code>rounded rounded-pill</code><br><span class="t-teal-600">This will round the top and bottom corners where the content width is less than its height.</span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded rounded-pill" style="width:100px;height:100px;"></div><code>rounded rounded-pill</code><br><span class="t-teal-600">This will produce a circle if the block element is a square.</span>
  </div>
</div>

Examples using specified corners:

<div class="my-6 grid xs:equal-2-cols md:equal-4-cols gap-4 t-center">
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded-tl rounded-lg" style="width:100px;height:100px;"></div><code>rounded-tl rounded-lg</code></span>
  </div>
  <div>
  <div class="mx-auto mb-1 p-1 b-thin rounded-tl rounded-br rounded-xl" style="width:100px;height:100px;"></div><code>rounded-tl rounded-br rounded-xl</code></span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded-br rounded-pill" style="width:100px;height:100px;"></div><code>rounded-br rounded-pill</code></span>
  </div>
  <div>
    <div class="mx-auto mb-1 p-1 b-thin rounded-br rounded-bl rounded-pill" style="width:100px;height:100px;"></div><code>rounded-br rounded-bl rounded-pill</code></span>
  </div>
</div>

## “Unrounded” corners override

Additionally, there is an `unrounded` class that removes (all) rounded corners. You would only need this on elements that already have rounded corners. The only elements in Codebase that have rounded corners by default are form elements and buttons. For such combos, use `unrounded` first, then you can assign new rounded corners only where you need them.

Buttons and form inputs (default) have a border radius equivalent to that of `rounded-sm`.

Examples:

<div class="flex flex-center mt-6 mb-2">
<button class="btn-icon unrounded rounded-bl rounded-tl rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
</button>
<button class="btn-icon unrounded rounded-tr rounded-br rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="152" y1="56" x2="104" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="200" x2="144" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="112" y1="56" x2="192" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
&nbsp;
<button class="btn-icon unrounded rounded-bl rounded-tl rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="188" x2="168" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
<button class="btn-icon unrounded">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="188" x2="192" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
<button class="btn-icon unrounded rounded-tr rounded-br rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="88" y1="108" x2="216" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="88" y1="188" x2="216" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
&nbsp;
<button class="btn-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><circle cx="124" cy="116" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><path d="M204,216c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><line x1="107" y1="99" x2="37.9" y2="29.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
</div>

<div class="mb-6 w-xs mx-auto">
<form class="flex">
  <input id="search-example" class="unrounded rounded-bl rounded-tl rounded-pill px-2" name="examplename" placeholder="Search our product catalog" type="search">
  <button aria-label="Submit" type="submit" class="btn unrounded rounded-tr rounded-br rounded-pill">Search</button>
</form>
</div>

```html
<form class="flex">
  <input id="search-example" class="unrounded rounded-bl rounded-tl rounded-pill px-2" name="examplename" placeholder="Search..." type="search">
  <button aria-label="Submit" type="submit" class="btn unrounded rounded-tr rounded-br rounded-pill">Search</button>
</form>
```

## Nesting rounded corners

The modifiers `rounded` (alias `rounded rounded-md`), `rounded rounded-lg`, and `rounded rounded-xl` are designed for nesting when you pair these with  `p-1`, `p-2`, or `p-3` respectively. As you can see below, the nested corners curve nicely without “pinching”.

<p class="mb-1"><code>rounded rounded-xl p-3</code>:</p>
<div class="mb-2 b-thin rounded rounded-xl p-3">
<p class="mb-1"><code>rounded rounded-lg p-2</code>:</p>
<div class="b-thin rounded rounded-lg p-2">
<p class="mb-1"><code>rounded p-1</code>:</p>
<div class="b-thin rounded p-1">
<button>Button</button> — has equivalent of <code>rounded-sm</code> built in
</div>
</div>
</div>

The CSS variables for Codebase border radii are as follows:

## Rounded corners on images

If you use a `rounded` utility on a _wrapper_ around an image (without padding), you will also need to add `overflow: clip;` so that the corners of the image are are removedby the wrapper’s rounded corners.

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
    <div class="rounded overflow-clip mb-2"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy"></div>
    <p>Image wrapped in <code>&lt;div class="rounded overflow-clip"&gt;</code></p>
  </div>
</div>

Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com/).

## Using Codebase rounded corner CSS variables in yoru code

All the Codebase rounded corner classes above (except for `unrounded`) apply the same border radius value _potentially to all four corners_ (from a CSS variable). 

But what if you wanted different radius vaues on different corners of the same  HTML element? Then you can use the Codebase variables for border radii directly in your CSS. The variables are as follows:

```scss
:root {
  // border radius for rounded corners
  --rad-sm: .25rem; // 4px default
  --rad-md: .5rem; // 8px default
  --rad-lg: 1rem; // 16px default
  --rad-xl: 2.5rem; // 40px default
  --rad-pill: 99rem;
}
```

Example:

<div class="w-xxs mx-auto my-6 grid equal-3-cols gap-1">
<div class="cols-1-3 aspect-ratio-16x9 relative overflow-clip" style="border-radius: var(--rad-xl) var(--rad-xl) var(--rad-md) var(--rad-md)">
<img class="img-cover" src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
</div>
<button class="btn-primary" aria-label="" style="border-radius: var(--rad-md) var(--rad-md) var(--rad-md) var(--rad-xl)">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
</button>
<button class="btn-primary rounded"  aria-label="">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path></svg>
</button>
<button class="btn-primary" aria-label="" style="border-radius: var(--rad-md) var(--rad-md) var(--rad-xl) var(--rad-md)">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
</button>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni) from [Pexels](https://www.pexels.com)._


```html
<div class="w-xxs mx-auto my-6 grid equal-3-cols gap-1">
  <div 
  class="cols-1-3 aspect-ratio-16x9 relative overflow-clip" 
  style="border-radius: var(--rad-xl) var(--rad-xl) var(--rad-md) var(--rad-md)"
  >
    <img class="img-cover" src="" width="" height="" alt="">
  </div>
  <button 
  class="btn-primary" 
  style="border-radius: var(--rad-md) var(--rad-md) var(--rad-md) var(--rad-xl)"
  >
    <!-- icon -->
  </button>
  <div class="btn-primary rounded">
    <!-- icon -->
  </div>
  <div 
  class="btn-primary" 
  style="border-radius: var(--rad-md) var(--rad-md) var(--rad-xl) var(--rad-md)"
  >
    <!-- icon -->
  </div>
</div>
```
