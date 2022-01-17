---
title: "Long-read text"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/large-display-text"
nextPage: "/docs/5-typographic-utilities/text-columns"
prevLink: "Large display text"
nextLink: "Text columns"
---

Use the `t-long-read` block wrapper utility class around text that you want to be larger on large screens, for ease of reading. For example, use `<article class="t-long-read">` for blog post templates.

## Increasing text sizes for long-read articles

1. On narrow viewports (small devices), all text within the example `t-long-read` wrapper below will be the Codebase default sizes.
2. On wider viewports, all text is scaled up using a [CSS clamp](https://levelup.gitconnected.com/fluid-typography-with-css-clamp-is-my-new-favorite-thing-573d0b8d7bfc) to a comfortable maximum.
3. If you play around adjusting the width of the browser window (as developers do), the page layout re-painting can happen very slowly when CSS `clamp()` is used on text. This is (partly) because the text is being resized hundreds of times while you’re dragging the window width in or out – during the width range where the `clamp()`’s mid-range. _Most people would never see this lag_, because ordinary people don’t spend their days resizing their browser window. 😊

## Comparison: default vs `t-long-read` text sizes

<div class="mb-3">
  <div class="grid gap xs:equal-2-cols">
    <div class="b-thin p-1">
      <p class="t-bold">Default sizes:</p>
      <p class="h1">Heading 1</p>
      <p class="h2">Heading 2</p>
      <p class="h3">Heading 3</p>
      <p class="h4">Heading 4</p>
      <p class="h5">Heading 5</p>
      <p class="h6">Heading 6</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
      <ol>
        <li>First item in a list</li>
        <li>Second item in a list</li>
        <li>Third item in a list</li>
      </ol>
    </div>
    <div class="b-thin p-1">
      <p class="t-bold">Long-read sizes:</p>
      <div class="t-long-read">
        <p class="h1">Heading 1</p>
        <p class="h2">Heading 2</p>
        <p class="h3">Heading 3</p>
        <p class="h4">Heading 4</p>
        <p class="h5">Heading 5</p>
        <p class="h6">Heading 6</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident sint totam minus nisi, ab dolore. Velit ullam consequatur qui nihil omnis temporibus sequi quia asperiores, sit obcaecati quae veritatis eum deleniti labore est aut fugit, provident cum. Provident mollitia neque perferendis alias accusamus quae, aut ullam quo totam nostrum!</p>
        <ol>
          <li>First item in a list</li>
          <li>Second item in a list</li>
          <li>Third item in a list</li>
        </ol>
      </div>
    </div>
  </div>
</div>

```html
<div class="t-long-read">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <p>Lorem ipsum dolor sit amet...
</div>
```