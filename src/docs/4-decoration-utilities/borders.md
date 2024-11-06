---
title: "Borders"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/spacing"
nextPage: "/docs/4-decoration-utilities/rounded-corners"
prevLink: "Spacing"
nextLink: "Rounded corners"
---

In Codebase, borders and other detail elements (table cells, form inputs, etc.) are a transparent black color by default, so that they appear as a pale gray on a white background, and they also work well on backgrounds of other colors.

## Border thickness

<div class="mb-2">
<div class="mb-1 p-1 b-thin b-0"> <code>b-0</code> 0px – for <em>removing</em> borders (has the <code>!important</code> flag)</div>
<div class="mb-1 p-1 b-dashed"> <code>b-dashed</code> – 1px default</div>
<div class="mb-1 p-1 b-thin"> <code>b-thin</code> – 1px default</div>
<div class="mb-1 p-1 b-thick"> <code>b-thick</code> – 4px default</div>
<div class="mb-1 p-1 b-heavy"> <code>b-heavy</code> – 8px default</div>
</div>

## Border on one edge

Examples using `-heavy`:

<div class="mb-2 flex gap-3 flex-grow-equal">
  <div><div class="mb-1 bt-heavy bg-gray-100 p-1">bt-heavy</div></div>
  <div><div class="mb-1 br-heavy bg-gray-100 p-1">br-heavy</div></div>
  <div><div class="mb-1 bb-heavy bg-gray-100 p-1">bb-heavy</div></div>
  <div><div class="mb-1 bl-heavy bg-gray-100 p-1">bl-heavy</div></div>
</div>

Of course, you can have borders on more than one edge by using more than one of these utilities on an element.

## Responsive borders

Five tiers of border control, because besides the examples menuined above, each border utility has `xs:`, `sm:`, `md:`, and `lg:` variants. That makes 150 border utilities!

In addition, there are all the border `b-{color}-{shade}` utilities – see [colors]({{ '/docs/4-decoration-utilities/colors/' | url }}).

### Responsive borders example

Example of responsive borders and [spacing]({{ '/docs/4-decoration-utilities/spacing/' | url }}) (i.e. margins and paddings) in a responsive [grid]({{ '/docs/3-layout-utilities/grid' | url }}):

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

## Border colors

By default, borders are colored by the variable `$color-detail`, – this variable is used for `.table` borders, horizontal rules `<hr>`, and form element inputs, textareas, and buttons (default and `btn`).

In Codebase, `$color-detail` has its color set using an alpha-channel transparency – `rgba(0, 0, 0, 0.15)` (default).

You can override these default semi-transparent gray borders using any of the (opaque) `b-` [color utility]({{ '/docs/4-decoration-utilities/colors/' | url }}) classes for borders.

**Note:** you can only apply one border color utility class per element. It will color all of whichever border side borders are being displayed on your element.

## Borders and background colors/images

The semi-transparent default border color enables backgrounds and background-colors of _wrapper elements_ to show through, thereby changing the apparent tint of the border line, if the background color is md-range.

In the following examples, the top row uses the default borders, whereas the the bottom row uses the nearest similer (but opaque) gray utility color for borders: `b-gray-200`. (See [colors]({{ '/docs/4-decoration-utilities/colors' | url }}).)

<div class="my-6">
<div class="flex flex-grow-equal">
  <div class="p-2 bg-white">
    <div class="b-thick p-3"></div>
  </div>
  <div class="p-2 bg-primary">
    <div class="b-thick p-3"></div>
  </div>
  <div class="p-2 bg-success">
    <div class="b-thick p-3"></div>
  </div>
  <div class="p-2 bg-black">
    <div class="b-thick p-3"></div>
  </div>
</div>
<div class="mt-3 flex flex-grow-equal">
  <div class="p-2 bg-white">
    <div class="b-thick b-gray-200 p-3"></div>
  </div>
  <div class="p-2 bg-primary">
    <div class="b-thick b-gray-200 p-3"></div>
  </div>
  <div class="p-2 bg-success">
    <div class="b-thick b-gray-200 p-3"></div>
  </div>
  <div class="p-2 bg-black">
    <div class="b-thick b-gray-200 p-3"></div>
  </div>
</div>
</div>

**Note:** The last item on the top row demonstrates a situation where you can’t see the default border, because it is semi-transparent black over a black background on the wrapper element.

```html
<div class="p-2 bg-primary">
  <div class="b-thick p-3"></div>
</div>

<div class="p-2 bg-primary">
  <div class="b-thick b-gray-200 p-3"></div>
</div>
```

What if you want the background image or background color of the bordered element itself to show thorugh the semi-transpatent border? Ordinarily, this doesn’t work because the background is only applied applied to the content of the emement (the border goes _around the outside_ of the content).

However, in CSS3 you can change the [background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin) of the background image or background color. Codebase enables you to do this using the special background utility class `bg-under-border` – this sets `background-origin: border-box`.

<div class="my-6">
<div class="flex flex-grow-equal">
  <div class="p-2">
    <div class="b-thick bg-white bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick bg-primary bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick bg-success bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick bg-black bg-under-border p-3"></div>
  </div>
</div>
<div class="mt-3 flex flex-grow-equal">
  <div class="p-2">
    <div class="b-thick b-gray-200 bg-white bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick b-gray-200 bg-primary bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick b-gray-200 bg-success bg-under-border p-3"></div>
  </div>
  <div class="p-2">
    <div class="b-thick b-gray-200 bg-black bg-under-border p-3"></div>
  </div>
</div>
</div>

**Note:** The last item on the top row demonstrates a situation where you can’t see the default border, because it is semi-transparent black over a black background on the element itself.


```html
<div class="p-2">
  <div class="b-thick bg-primary bg-under-border p-3"></div>
</div>

<div class="p-2">
  <div class="b-thick b-gray-200 bg-primary bg-under-border p-3"></div>
</div>
```