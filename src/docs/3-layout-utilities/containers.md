---
title: "Containers"
headerTitle: "Container layouts"
layout: layout.njk
prevPage: "/docs/2-classless-basics/media"
nextPage: "/docs/3-layout-utilities/blocks"
prevLink: "Media"
nextLink: "Blocks"
---

The CodebaseCSS `container` class works the same way as in other CSS frameworks (e.g. Bootstrap), using x-axis `margin: auto` centering, and x-axis padding to improve legibility of content against screen sides right and left.

In addition, CodebaseCSS containers have several width modifiers, for easily setting up narrower centered layouts for e.g. blog posts.

## Containers at different max-widths

CodebaseCSS’s max-widths are set at **256px increments** – as is traditionally used in many web design layouts and also in some hardware (e.g. the classic iPad has a screen of 1024px &times; 768px). Containers are first set to `width: 100%` and then constrained these max-widths.

The default `container` behaves the same as `container-lg`.

<table class="table">
<thead>
<tr>
<th>Containers</th>
<th>Max-width of content block<br>
<span class="t-italic t-normal">(grid cell 2)</span></th>
<th>Calculated from</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>container-xxl</code></td>
<td><strong>1760px</strong></td>
<td><code>xxl</code> 1792px – (2 × 1rem side margins)</td>
</tr>
<tr>
<td><code>container-xl</code></td>
<td><strong>1504px</strong></td>
<td><code>xl</code> 1536px – (2 × 1rem side margins)</td>
</tr>
<tr>
<td><code>container-lg</code><br>(and <code>container</code>)</td>
<td><strong>1228px</strong></td>
<td><code>lg</code> 1280px – (2 × 1rem side margins)</td>
</tr>
<tr>
<td><code>container-md</code></td>
<td><strong>992px</strong></td>
<td><code>md</code> 1024px – (2 × 1rem side margins)</td>
</tr>
<tr>
<td><code>container-sm</code></td>
<td><strong>736px</strong></td>
<td><code>sm</code> 768px – (2 × 1rem side margins)</td>
</tr>
</tbody>
</table>

## Containers demo (popout)

On large screens, you can expand the following demo:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="relative mb-3 b-thin rounded p-2"
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
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
      :class="open ? 'box py-6 bg-white overflow-y scale-in' : 'mb-3'"
    >
      <button
        type="button"
        x-show="open"
        class="fixed top right z-index-1 m-2 btn-sm btn-primary btn-icon"
        @click="open = false"
        :aria-expanded="open"
        aria-label="close popout"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
      </button>
      <p class="t-center" :class="open ? 'h1 mb-6' : 'h4'">
        Codebase containers demo
      </p>
      <style>
        .container-demo > * {
          margin-right: 1rem !important;
          margin-left: 1rem !important;
        }
      </style>
      <div class="container-xxl container-demo mb-1 b-dashed b-blue-300 bg-white"><div class="b-thin b-blue-500 py-1"><code>container-xxl</code></div></div>
      <div class="container-xl container-demo mb-1 b-dashed b-blue-300 bg-white"><div class="b-thin b-blue-500 py-1"><code>container-xl</code></div></div>
      <div class="container-lg container-demo mb-1 b-dashed b-blue-300 bg-white"><div class="b-thin b-blue-500 py-1"><code>container-lg</code> (and <code>container</code>)</div></div>
      <div class="container-md container-demo mb-1 b-dashed b-blue-300 bg-white"><div class="b-thin b-blue-500 py-1"><code>container-md</code></div></div>
      <div class="container-sm container-demo mb-1 b-dashed b-blue-300 bg-white"><div class="b-thin b-blue-500 py-1"><code>container-sm</code></div></div>
    </div>
  </div>
</div>

**Note:** the demo containers (above) are nested in this page’s container based layout. Therefore, ordinarily they have their x-axis margins removed. But for purposes of the demo, these margins have been added back in.

```html
<div class="container-xxl">
  <div>Content ...</div>
</div>

<div class="container-xl">
  <div>Content ...</div>
</div>

<div class="container-lg">
  <div>Content ...</div>
</div>

<div class="container-md">
  <div>Content ...</div>
</div>

<div class="container-sm">
  <div>Content ...</div>
</div>
```