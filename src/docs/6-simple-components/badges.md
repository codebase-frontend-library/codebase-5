---
title: "Badges"
layout: layout.njk
prevPage: "/docs/6-simple-components/buttons"
nextPage: "/docs/6-simple-components/labels"
prevLink: "Buttons"
nextLink: "Labels"
---

## Inline badges

Codebase badges have no built-in positioning by default. So, they will appear inline with your text if you put the `badge` class on a `<span>` element, with their content on the text baseine. Also by default, badges do not have smaller text.

Example inline badge: <span class="badge">1</span>

```html
<span class="badge">1</span>
```
Another example:

<div class="my-6">
<a class="flex flex-middle bt-thin bb-thin p-cell t-underline-none t-gray-700 hover:t-gray-900 hover:bg-gray-100" href="#/">
<div class="mr-1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></rect><path d="M40,156H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></div>
<div class="t-bold mr-1">Inbox</div>
<div><span class="badge badge-secondary">17</span></div>
</a>
</div>

```html
<a class="flex flex-middle bt-thin bb-thin p-cell t-underline-none t-gray-700 hover:t-gray-900 hover:bg-gray-100" href="">
  <div class="mr-1">
    <!-- icon inbox -->
  </div>
  <div class="t-bold mr-1">Inbox</div>
  <div><span class="badge badge-secondary">17</span></div>
</a>
```

## Superscript and subscript

For an inline superscript position, apply `badge` to a `<sup>` element (because superscript, the badge will be smaller).

Example superscript badge <sup class="badge">2</sup>

For an inline subscript position, apply `badge` to a `<sub>` element (because subscript, the badge will be smaller).

Example subscript badge <sub class="badge">3</sub>

```html
Inline <span class="badge">1</span>

Superscript <sup class="badge">2</sup>

Subscript <sub class="badge">3</sub>
```

Badge colors:

<span class="badge badge-warning">1</span> <span class="badge badge-danger">2</span> <span class="badge badge-success">345</span> <span class="badge badge-info">678</span> <span class="badge badge-primary">99+</span> <span class="badge badge-secondary">10</span> <span class="badge badge-tertiary">11</span>


```html
<span class="badge badge-warning">1</span>
<span class="badge badge-danger">2</span>
<span class="badge badge-success">345</span>
<span class="badge badge-info">678</span>
<span class="badge badge-primary">99+</span>
<span class="badge badge-secondary">10</span>
<span class="badge badge-tertiary">11</span>
```

## Different sizes

Codebase badges are sized im `em` units, so that they grow according to the size of the text they are on. Besides applying `badge` to superscript and subscript, badge size can be controlled in other ways.

<p style="font-size: 36px">This text is bigger, and so is its badge <sup class="badge">1</sup></p>

```html
<p style="font-size: 36px">This text is bigger, and so is its badge <sup class="badge">1</sup></p>
```

If you want a badge to be smaller than <span class="badge">ABC</span>, like this: <span class="badge t-sm">ABC</span> – that can be done with `t-sm`.

```html
<span class="badge">ABC</span>

<span class="badge t-sm">ABC</span>
```

See [inline text utilities]({{ '/docs/6-typographic-utilities/inline-text/' | url }})

## Over the corners of parent elements

Give the containing element the `relative` class, so that the following `absolute` positioned badges will be in the correct places.

<div class="container-sm my-6">
<div class="flex flex-middle">
<button class="btn btn-primary btn-icon relative mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg><span class="badge badge-top-right badge-warning t-sm">99+</span></button>
<button class="btn-icon relative mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><path d="M197.4,80.7a73.6,73.6,0,0,1,6.3,10.9L229.6,106a102,102,0,0,1,.1,44l-26,14.4a73.6,73.6,0,0,1-6.3,10.9l.5,29.7a104,104,0,0,1-38.1,22.1l-25.5-15.3a88.3,88.3,0,0,1-12.6,0L96.3,227a102.6,102.6,0,0,1-38.2-22l.5-29.6a80.1,80.1,0,0,1-6.3-11L26.4,150a102,102,0,0,1-.1-44l26-14.4a73.6,73.6,0,0,1,6.3-10.9L58.1,51A104,104,0,0,1,96.2,28.9l25.5,15.3a88.3,88.3,0,0,1,12.6,0L159.7,29a102.6,102.6,0,0,1,38.2,22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg><span class="badge badge-bottom-right badge-primary">2</span></button>
<button class="btn-icon relative b-dashed mr-3"><span class="badge badge-top-left">?</span></button>
<button class="btn btn-secondary btn-icon relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><circle cx="100" cy="128" r="16"></circle><circle cx="156" cy="128" r="16"></circle></svg><span class="badge badge-bottom-left badge-danger t-sm">!</span></button>
</div>
</div>

```html
<button>
  <!-- text or icon -->
  <span class="badge badge-top-right badge-warning t-sm">99+</span>
</button>
```