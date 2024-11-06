---
title: "Headings"
headerTitle: "Heading formats"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/font-stacks"
nextPage: "/docs/5-typographic-utilities/text-alignment"
prevLink: "Font stacks"
nextLink: "Text alignment"
---

Sometimes you may need to make some text as large as a heading, but without it actually being a heading. Or, sometimes you may need to change a heading size _without breaking the semantic heirarchical ordering_ – because that would be bad for SEO.

These heading format utility classes will help you out.

Since Codebase 5.3.0: Codebase `h1` through `h5` utilities onlyaffect font-size – they do not affect margins or font-weighs.

## Heading utility examples

The following are all `<div>` elements, in disguise:

<div class="my-6">
<div class="h1"><code>h1</code> Heading level 1</div>
<div class="h2"><code>h2</code> Heading level 2</div>
<div class="h3"><code>h3</code> Heading level 3</div>
<div class="h4"><code>h4</code> Heading level 4</div>
<div class="h5"><code>h5</code> Heading level 5</div>
<div class="h6"><code>h6</code> Heading level 6</div>
</div>

```html
<div class="h1">Heading level 1</div>

<div class="h2">Heading level 2</div>

<div class="h3">Heading level 3</div>

<div class="h4">Heading level 4</div>

<div class="h5">Heading level 5</div>

<div class="h6">Heading level 6</div>
```

## Why you sometimes need heading utilities

Why would you want to use heading utilities? In your web design, you may have situations where you want to enlarge some text (to make it look like a header), but not actually have it to be a header that would interupt the sematic hierarchical ordering.

Consider the following examples: you may want a title in a sidebar, footer, card, or modal to be enlaged but not by using an actual `<h1>` through `<h6>` tag.