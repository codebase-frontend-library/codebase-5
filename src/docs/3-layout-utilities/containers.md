---
title: "Containers"
headerTitle: "Container layouts"
layout: layout.njk
prevPage: "/docs/2-classless-basics/media"
nextPage: "/docs/3-layout-utilities/blocks"
prevLink: "Media"
nextLink: "Blocks"
---

Sonce Codebase v5.0.7, `container` classes work in a different way to containers in other CSS frameworks (e.g. Bootstrap), in that _no x-axis padding_ is used to inset the content away from the viewport (or wrapping block) sides. Instead, container widths are set by a modern CSS `min()` function, so that they are either `100% - 2rem` (default), or the set width (default).

Plus, also unlike other frameworks, Codebase containers have several set width modifiers, for different use cases. For example, use `container-xs` for modals, `container-sm` for centered blog layouts, and others as you need for wider and multi-column layouts.

## Containers at different max-widths

Codebase’s (max) set widths are set at **256px increments** – as is traditionally used in many web design layouts and also in some hardware (e.g. the classic iPad has a screen of 1024px &times; 768px). Containers are first set to `width: 100%` and then constrained these max-widths.

The default `container` behaves the same as `container-xxl`.

<table class="table">
<thead>
<tr>
<th>Containers</th>
<th>(Max) width of content block</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>container-xxl</code><br>(and <code>container</code>)</td>
<td><code>xxl</code> 1792px</td>
</tr>
<tr>
<td><code>container-xl</code></td>
<td><code>xl</code> 1536px</td>
</tr>
<tr>
<td><code>container-lg</code></td>
<td><code>lg</code> 1280px</td>
</tr>
<tr>
<td><code>container-md</code></td>
<td><code>md</code> 1024px</td>
</tr>
<tr>
<td><code>container-sm</code></td>
<td><code>sm</code> 768px</td>
</tr>
<tr>
<td><code>container-xs</code></td>
<td><code>xs</code> 512px</td>
</tr>
</tbody>
</table>

## Containers demo (popout)

On medium screens up, you can expand the following demo:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="relative mb-2 b-thin rounded p-2"
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
      </button>
      <p class="t-center" :class="open ? 'h1 mb-6' : 'h4'">
        Codebase containers demo
      </p>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-xxl b-thin b-blue-500 py-1"><code>container-xxl</code> (and <code>container</code>)</div></div>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-xl b-thin b-blue-500 py-1"><code>container-xl</code></div></div>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-lg b-thin b-blue-500 py-1"><code>container-lg</code></div></div>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-md b-thin b-blue-500 py-1"><code>container-md</code></div></div>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-sm b-thin b-blue-500 py-1"><code>container-sm</code></div></div>
      <div class="mb-1 b-dashed b-blue-300 bg-white"><div class="container-xs b-thin b-blue-500 py-1"><code>container-xs</code></div></div>
    </div>
  </div>
</div>

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

<div class="container-xs">
  <div>Content ...</div>
</div>
```