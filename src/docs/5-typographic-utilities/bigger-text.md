---
title: "Bigger text"
headerTitle: "Making text bigger"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/lists"
nextPage: "/docs/5-typographic-utilities/text-columns"
prevLink: "Lists"
nextLink: "Text columns"
---

In Codebase, you can control the size of text various ways:

1. Utility classes corresponding to [heading format](/codebase-5/docs/5-typographic-utilities/headings) font-sizes for `h1` through `h6`.
2. Wrapping text in `t-lg` causes text size to increase responsively from ×1.25 to ×1.5 depending on viewport width.
3. New in Codebase v.5.2.11: wrapping text in `t-display` causes text size to increase responsively from ×1.25 to ×2 depending on viewport width.
4. Wrapping text in `t-long-read` causes text size to increase responsively from ×1 to ×1.25 depending on viewport width.

The CSS `clamp()` ramps for `t-lg`, `t-display` and `t-long-read` are set in the default varibles file:

```css
:root {
  --t-lg:         clamp(1.125em, 0.875em  + 0.7813vw, 1.5em);
  --t-display:    clamp(1.25em,  0.5833em + 2.0833vw, 2.25em);
  --t-long-read:  clamp(1em,     0.8333em + 0.5208vw, 1.25em);
}
```

These values above have been calculated using Petter Walbø Johnsgård’s [Font-Size Clamp Generator](https://clamp.font-size.app) webapp, so that they ramp up from viewport width `xs` (512px default) to `lg` (1280px default).

## Lead text using `t-lg`

`t-lg` makes text ×1.125 bigger, , and then ramps up to ×1.5 bigger, from viewport width `xs` (512px) to `lg` (1280px) using a CSS `clamp()`.

Comparison with default text and heading sizes:

<div class="mb-3">
  <div class="grid gap xs:equal-2-cols gap-2">
    <div class="b-thin p-1">
      <p class="t-bold">Default:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Paragraph</p>
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
        <p>Paragraph</p>
      </div>
    </div>
  </div>
</div>

Example: you can use `t-lg` on the first paragraph in your page or blog post, to make it an enlarged _lead_ paragraph.

```html
<p class="t-lg">This is an example lead paragraph</p>
```

## Hero text using `t-display`

`t-display` makes text ×1.25 bigger, and then ramps up to ×2.25 bigger, from viewport width `xs` (512px) to `lg` (1280px) using a CSS `clamp()`.

Comparison with default text and heading sizes:

<div class="mb-3">
  <div class="grid gap xs:equal-2-cols gap-2">
    <div class="b-thin p-1">
      <p class="t-bold">Default:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Paragraph</p>
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
        <p>Paragraph</p>
      </div>
    </div>
  </div>
</div>

Example: the `t-display` wrapper is good for homepage or landing-page “hero” titles and slogans, or for making an important quote or message really stand out.

```html
<div class="t-display">
  <h1>This is an example hero title</h1>
</div>
```

## Comfortable prose using `t-long-read`

Use the `t-long-read` block wrapper utility class around text that you want to be larger on large screens, for ease of reading. For example, use `<article class="t-long-read">` for blog post templates.

On narrow viewports (small devices), and paragraph text, list items, table cells, etc. within the example `t-long-read` wrapper below will be the Codebase default sizes (1rem = 16px). On wider viewports, all text is scaled up using a CSS `clamp()` to a comfortable maximum (1.25rem = 20px). And any headings included within a `t-long-read` wrapper will also increase in size accordingly.

**Note:** If you play around adjusting the width of the browser window (as developers do), the page layout re-painting can happen very slowly when CSS `clamp()` is used on text. This is (partly) because the text is being resized hundreds of times while you’re dragging the window width in or out – during the width range where the `clamp()`’s mid-range. _Most people would never see this lag_, because ordinary people don’t spend their days resizing their browser window. 😊

Comparison of default vs `t-long-read` text sizes:

<div class="mb-3">
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