---
title: "Spacing"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/glass"
nextPage: "/docs/4-decoration-utilities/borders"
prevLink: "Glass"
nextLink: "Borders"
---

Codebase decoration utilities for <strong>margins and paddings</strong> have been set according to a “soft” 0.5rem <a href="{{ '/docs/1-getting-started/element-grid' | url }}">element grid</a>.

<table class="table">
  <thead>
    <tr>
      <th>Element grid measure</th>
      <th>Utility class suffix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.5rem</td>
      <td><code>-1</code></td>
    </tr>
    <tr>
      <td>1rem</td>
      <td><code>-2</code></td>
    </tr>
    <tr>
      <td>1.5rem</td>
      <td><code>-3</code></td>
    </tr>
    <tr>
      <td>2rem</td>
      <td><code>-4</code></td>
    </tr>
    <tr>
      <td>2.5rem</td>
      <td><code>-5</code></td>
    </tr>
    <tr>
      <td>3rem</td>
      <td><code>-6</code></td>
    </tr>
  </tbody>
</table>

## Responsive margins

* Margins all: `m-` / `xs:m-` / `sm:m-` / `md:m-` / `lg:m-`
* Margin top: `mt-` / `xs:mt-` / `sm:mt-` / `md:mt-` / `lg:mt-`
* Margin right: `mr-` / `xs:mr-` / `sm:mr-` / `md:mr-` / `lg:mr-`
* Margin bottom: `mb-` / `xs:mb-` / `sm:mb-` / `md:mb-` / `lg:mb-`
* Margin left: `ml-` / `xs:ml-` / `sm:ml-` / `md:ml-` / `lg:ml-`
* Margins top and bottom: `my-` / `xs:my-` / `sm:my-` / `md:my-` / `lg:my-`
* Margins left and right: `mx-` / `xs:mx-` / `sm:mx-` / `md:mx-` / `lg:mx-`

That makes 210 margin utilities. Plus a few extras below.

Margin examples:

<div class="my-6">
<div class="mb-1 b-thin">
  <div class="mr-0 bg-gray-100">mr-0</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-1 bg-gray-100">mr-1</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-2 bg-gray-100">mr-2</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-3 bg-gray-100">mr-3</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-4 bg-gray-100">mr-4</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-5 bg-gray-100">mr-5</div>
</div>
<div class="mb-1 b-thin">
  <div class="mr-6 bg-gray-100">mr-6</div>
</div>
</div>

## Responsive paddings

* Paddings all: `p-` / `xs:p-` / `sm:p-` / `md:p-` / `lg:p-`
* Padding top: `pt-` / `xs:pt-` / `sm:pt-` / `md:pt-` / `lg:pt-`
* Padding right: `pr-` / `xs:pr-` / `sm:pr-` / `md:pr-` / `lg:pr-`
* Padding bottom: `pb-` / `xs:pb-` / `sm:pb-` / `md:pb-` / `lg:pb-`
* Padding left: `pl-` / `xs:pl-` / `sm:pl-` / `md:pl-` / `lg:pl-`
* Paddings top and bottom: `py-` / `xs:py-` / `sm:py-` / `md:py-` / `lg:py-`
* Paddings left and right: `px-` / `xs:px-` / `sm:px-` / `md:px-` / `lg:px-`

That makes 210 padding utilities. Plus one extra below.

Padding examples:

<div class="my-6">
<div class="mb-1 bg-gray-100 pl-0">
  <div class="b-thin">pl-0</div>
</div>
<div class="mb-1 bg-gray-100 pl-1">
  <div class="b-thin">pl-1</div>
</div>
<div class="mb-1 bg-gray-100 pl-2">
  <div class="b-thin">pl-2</div>
</div>
<div class="mb-1 bg-gray-100 pl-3">
  <div class="b-thin">pl-3</div>
</div>
<div class="mb-1 bg-gray-100 pl-4">
  <div class="b-thin">pl-4</div>
</div>
<div class="mb-1 bg-gray-100 pl-5">
  <div class="b-thin">pl-5</div>
</div>
<div class="mb-1 bg-gray-100 pl-6">
  <div class="b-thin">pl-6</div>
</div>
</div>

## Spacing extras

### Margin x-axis auto

* `mx-auto` / `xs:mx-auto` / `sm:mx-auto` / `md:mx-auto` / `lg:mx-auto`
* `mr-auto` / `xs:mr-auto` / `sm:mr-auto` / `md:mr-auto` / `lg:mr-auto`
* `ml-auto` / `xs:ml-auto` / `sm:ml-auto` / `md:ml-auto` / `lg:ml-auto`

These classes apply `margin-right: auto` and/or `margin-left: auto` to push an item away from its siblings or its wrapper walls.

For example, `ml-auto` will push an element to the right 

<div class="mb-3 b-dashed">
<div class="square ml-auto b-thin p-1 bg-gray-100"><code>ml-auto</code></div>
</div>

If you use `mx` (that’s for margings on the x-axis), this push will happen equally from the left and right. This will result in your element being _centered_, providing that its width is smaller than the width of its wrapper.

Example:

<div class="my-6">
<div class="b-dashed">
  <div class="mx-auto bg-gray-100" style="width:60%;">mx-auto</div>
</div>
</div>

```html
<div class="mx-auto bg-gray-100" style="width:60%;">mx-auto</div>
```

## Responsive spacing example 

Example of responsive [borders]({{ '/docs/4-decoration-utilities/borders/' | url }}) and spacing (i.e. margins and paddings) in a responsive [grid]({{ '/docs/3-layout-utilities/grid' | url }}):

<div class="my-6 grid xs:equal-2-cols lg:equal-4-cols b-thick xs:b-0 px-2 xs:px-0 xs:t-center">
  <div class="bb-thin xs:br-thin lg:bb-thick py-2 md:p-4 lg:py-6">Item one</div>
  <div class="bb-thin lg:br-thin lg:bb-thick py-2 md:p-4 lg:py-6">Item two</div>
  <div class="bb-thin xs:bb-thick xs:br-thin py-2 md:p-4 lg:py-6">Item three</div>
  <div class="bb-thick py-2 md:p-4 lg:py-6">Item four</div>
  <div class="bb-thin xs:br-thin lg:bb-0 py-2 md:p-4 lg:py-6">Item five</div>
  <div class="bb-thin lg:br-thin lg:bb-0 py-2 md:p-4 lg:py-6">Item six</div>
  <div class="bb-thin xs:br-thin xs:bb-0 py-2 md:p-4 lg:py-6">Item seven</div>
  <div class="py-2 md:p-4 lg:py-6">Item eight</div>
</div>

```html
<div class="my-6 grid xs:equal-2-cols lg:equal-4-cols b-thick xs:b-0 px-2 xs:px-0 xs:t-center">
  <div class="bb-thin xs:br-thin lg:bb-thick py-2 md:p-4 lg:py-6">Item one</div>
  <div class="bb-thin lg:br-thin lg:bb-thick py-2 md:p-4 lg:py-6">Item two</div>
  <div class="bb-thin xs:bb-thick xs:br-thin py-2 md:p-4 lg:py-6">Item three</div>
  <div class="bb-thick py-2 md:p-4 lg:py-6">Item four</div>
  <div class="bb-thin xs:br-thin lg:bb-0 py-2 md:p-4 lg:py-6">Item five</div>
  <div class="bb-thin lg:br-thin lg:bb-0 py-2 md:p-4 lg:py-6">Item six</div>
  <div class="bb-thin xs:br-thin xs:bb-0 py-2 md:p-4 lg:py-6">Item seven</div>
  <div class="py-2 md:p-4 lg:py-6">Item eight</div>
</div>
```

### Block padding

Table cells (`th` and `td`), and buttons have the same “block padding” built into them: `padding: 0.5rem 1rem`. This same block padding is available in the utility class `p-block`:

<div class="my-6 b-dashed p-block">This has block padding supplied by the utility class <code>p-block</code></div>

You can use `p-block` as a quick way of setting up menus, tab panels, etc.

## Empty line spacing

You may sometimes need to add extra spacing above or below an element equivalent to the spacing between paragraphs (i.e. one line height, or `1.5rem`) or two lines (`3rem`).

This can be done by top or bottoms margin or padding, using the element grid suffix `-3` or `-6`:

As margins:

<div class="mb-3 b-dashed">
  <div class="mt-3 bg-gray-100">mt-3</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mb-3 bg-gray-100">mb-3</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mt-6 bg-gray-100">mt-6</div>
</div>

<div class="mb-3 b-dashed">
  <div class="mb-6 bg-gray-100">mb-6</div>
</div>

As paddings:

<div class="mb-3 bg-gray-100 pt-3">
  <div class="b-dashed">pt-3</div>
</div>

<div class="mb-3 bg-gray-100 pb-3">
  <div class="b-dashed">pb-3</div>
</div>

<div class="mb-3 bg-gray-100 pt-6">
  <div class="b-dashed">pt-6</div>
</div>

<div class="mb-3 bg-gray-100 pb-6">
  <div class="b-dashed">pb-6</div>
</div>
