---
title: "Blocks"
headerTitle: "Block utilities"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/containers"
nextPage: "/docs/3-layout-utilities/positions"
prevLink: "Containers"
nextLink: "Positions"
---

Sometimes you need to override an element’s native block or inline-block behavior.

## Inline-block utility

`inline-block` – makes any element behave as an inline-block element. Example using `inline-block` on a block element:

<div class="my-6">
<div class="inline-block bg-teal-200 p-2">This is a <code class="b-thin">&lt;div&gt;</code> element (normally a block element).</div>
</div>

```html
<div class="inline-block"> ... </div>
```

`inlne-block` has media query width variants, so the full set is:

* `inlne-block` / `xs:inlne-block` / `sm:inlne-block` / `md:inlne-block` / `lg:inlne-block`

## Block utility

`block` – makes any element behave as a block element. Example using `block` on an inline-block element, such as a `<span>` or an `<a href="">`:

<div class="my-6">
<span class="block bg-teal-200 p-2">This is an <code class="b-thin">&lt;span&gt;</code> element (normally an inline element).</a>
</div>

```html
<span class="block"> ... </span>
```

`block` has media query width variants, so the full set is:

* `block` / `xs:block` / `sm:block` / `md:block` / `lg:block`

## Notes on blocks and inline-blocks

1. The responsive block and inline-block utilities are useful in situations when you need to override a `flex` flexbox at a wider breakpoint.
2. Remember that CSS flexbox controls the behavior of its immediate child elements. So, if you are trying to use `block` or `inline-block` on an immediate child of a `flex` or `grid`, it won’t work.