---
title: "Text alignment"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/headings"
nextPage: "/docs/5-typographic-utilities/inline-text"
prevLink: "Headings"
nextLink: "Inline text"
---


## Simple text alignment

<p><code>t-left</code></p>
<p class="t-left">Lorem ipsum dolor sit amet...</p>

<p><code>t-center</code></p>
<p class="t-center">Lorem ipsum dolor sit amet...</p>

<p><code>t-right</code></p>
<p class="t-right">Lorem ipsum dolor sit amet...</p>

## Responsive text-alignment

Besides the text alignment classes above, there are other text alignment classes that take effect at the different media query breakpoint widths. So, here’s the full set of text alignment utility classes:

* `t-left` / `sm:t-left` / `md:t-left` / `lg:t-left`
* `t-center` / `sm:t-center` / `md:t-center` / `lg:t-center`
* `t-right` / `sm:t-right` / `md:t-right` / `lg:t-right`

With these, you can set the text alignment for phones first, and then _override_ with a different text alignment for medium or large screens up.

## An example card

Consider this card design:

<div class="mb-3 grid gap-3 sm:equal-2-cols">
  <div>
    <div class="rounded p-2 bg-amber-100">
      <p class="h4 mb-1 sm:t-center">Card title</p>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi. In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque. Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque. In ornare lectus dui, tempor ultricies felis commodo nec.</p>
    </div>
  </div>
  <div>
    <div class="rounded p-2 bg-amber-100">
      <p class="h4 mb-1 sm:t-center">Card title</p>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi. In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque. Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque. In ornare lectus dui, tempor ultricies felis commodo nec.</p>
    </div>    
  </div>
</div>

In these cards the titles are left aligned (default) for small devices, and the cards are stacked on two rows. But for medium viewports up, the header becomes centered (at the same breakpount when the cards become arranged side-by-side).

```html
<div class="rounded p-2 bg-amber-100">
  <h4 class="sm:t-center">Card header</h4>
  <p>Lorem ipsum dolor sit amet ...</p>
</div>
```