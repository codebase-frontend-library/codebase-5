---
title: "Making text bigger"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/font-stacks"
nextPage: "/docs/5-typographic-utilities/text-alignment"
prevLink: "Font stacks"
nextLink: "Text alignment"
---

In Codebase, you can increase the size of text in various ways using utility classes:

1. Headings font-sizes: `h1` through `h6`.
2. Wrapping text in `t-lg` simply causes text size to increase by ×1.25.
3. New in Codebase v.5.2.11: wrapping text in `t-display` causes text size to increase responsively from ×1.25 to ×2 depending on viewport width.
4. Wrapping text in `t-long-read` causes text size to increase responsively from ×1 to ×1.25 depending on viewport width.

The `t-display` and `t-long-read` CSS `clamp()` sets above have been calculated using Petter Walbø Johnsgård’s [Font-Size Clamp Generator](https://clamp.font-size.app) webapp, so that they ramp up from viewport width `xs` (512px default) to `lg` (1280px default). At `xs`, these will begin to upsize on phones turned to landscape orientation.

## Heading utilities `h1` – `h6`

Sometimes you may need to make some text as large as a heading, but without it actually being a heading. Or, sometimes you may need to change a heading size _without breaking the semantic heirarchical ordering_ – because that would be bad for SEO.

These heading format utility classes will help you out.

Codebase `h1` through `h6` utilities are styled the same as the Codebase basic (classless) styling for `<h1>` through `<h6>` headings.

### Heading utility examples

The following are all `<div>` elements, in disguise:

<div class="my-6">
<p class="h1"><code>h1</code> heading</p>
<p class="h2"><code>h2</code> heading</p>
<p class="h3"><code>h3</code> heading</p>
<p class="h4"><code>h4</code> heading</p>
<p class="h5"><code>h5</code> heading</p>
<p class="h6"><code>h6</code> heading</p>
</div>

```html
<div class="h1">Heading level 1</div>

<div class="h2">Heading level 2</div>

<div class="h3">Heading level 3</div>

<div class="h4">Heading level 4</div>

<div class="h5">Heading level 5</div>

<div class="h6">Heading level 6</div>
```

### Why you sometimes need heading utilities

Why would you want to use heading utilities? In your web design, you may have situations where you want to enlarge some text (to make it look like a header), but not actually have it to be a header that would interupt the sematic hierarchical ordering.

Consider the following examples: you may want a title in a sidebar, footer, card, or modal to be enlarged but not by using an actual `<h1>` through `<h6>` tag.

## Slightly larger text using `t-lg`

`t-lg` simply makes text ×1.25 bigger.

Comparison with default text and heading sizes:

<div class="mb-2">
  <div class="grid gap xs:equal-2-cols gap-2">
    <div class="b-thin p-1">
      <p class="t-bold">Default:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Paragraph. Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="b-thin p-1">
      <p class="t-bold"><code>t-lg</code>:</p>
      <div class="t-lg">
        <p class="h1">Heading 1</p>
        <p class="h2">Heading 2</p>
        <p class="h3">Heading 3</p>
        <p class="h4">Heading 4</p>
        <p class="h5">Heading 5</p>
        <p class="h6">Heading 6</p>
        <p>Paragraph. Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</div>

Example: you can use `t-lg` on the first paragraph in your page or blog post, to make it an enlarged _lead_ paragraph.

```html
<p class="t-lg">This is an example lead paragraph</p>
```

You can also use `t-lg` to make <span class="t-lg">something important</span> stand out (because sometimes, but rarely, bold and italics and capitalization is not enougn). Or for a subtle increase in size for a blockquote.

<blockquote class="t-lg">This is an example of some text quoted from elsewhere.</blockquote>

## Hero text using `t-display`

`t-display` makes text ×1.25 bigger, and then ramps up to ×2 bigger, from viewport width `xs` (512px) to `lg` (1280px) using a CSS `clamp()`.

Comparison with default text and heading sizes:

<div class="mb-2">
  <div class="grid gap xs:equal-2-cols gap-2">
    <div class="b-thin p-1">
      <p class="t-bold">Default:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Paragraph. Lorem ipsum dolor sit amet</p>
    </div>
    <div class="b-thin p-1">
      <p class="t-bold"><code>t-display</code>:</p>
      <div class="t-display">
        <p class="h1">Heading 1</p>
        <p class="h2">Heading 2</p>
        <p class="h3">Heading 3</p>
        <p class="h4">Heading 4</p>
        <p class="h5">Heading 5</p>
        <p class="h6">Heading 6</p>
        <p>Paragraph. Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</div>

Example: the `t-display` wrapper is good for homepage or landing page “hero” titles and slogans, or for making an important title or message really stand out.

```html
<div class="t-display">
  <h1>This is an example hero title</h1>
</div>
```

## Comfort-sized prose using `t-long-read`

Use the `t-long-read` block wrapper utility class around text that you want to be larger on large screens, for ease of reading. For example, use `<article class="t-long-read">` for blog post templates.

On narrow viewports (small devices), and paragraph text, list items, table cells, etc. within the example `t-long-read` wrapper below will be the Codebase default sizes (1rem = 16px). On wider viewports, all text is scaled up using a CSS `clamp()` to a comfortable maximum (1.25rem = 20px). And any headings included within a `t-long-read` wrapper will also increase in size accordingly.

Comparison of default vs `t-long-read` text sizes:

<div class="mb-2">
  <div class="grid gap-2 xs:equal-2-cols">
    <div class="b-thin p-1">
      <p class="t-bold">Default:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
    </div>
    <div class="b-thin p-1">
      <p class="t-bold"><code>long-read</code>:</p>
      <div class="t-long-read">
        <p class="h1">Heading 1</p>
        <p class="h2">Heading 2</p>
        <p class="h3">Heading 3</p>
        <p class="h4">Heading 4</p>
        <p class="h5">Heading 5</p>
        <p class="h6">Heading 6</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="t-long-read">
  <p>Lorem ipsum dolor sit amet...
</div>
```
