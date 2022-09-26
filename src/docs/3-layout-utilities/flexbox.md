---
title: "Flexbox Layouts"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/dimensions"
nextPage: "/docs/3-layout-utilities/grid"
prevLink: "Dimensions"
nextLink: "Grid"
---

Codebase’s simple `flex` flexbox layout system enables you to organize wrapped groups of elements in a row (e.g. for a menubar, or a media object) or in a column (e.g. for a card).

## Notes on `flex`

1. Besides `flex` (takes effect at all screen widths), there are also responsive prefix flex wrappers: `xs:flex`, `sm:flex`, `md:flex` and `lg:flex`. The flexbox effect for these responsive wrappers will take effect at extra-small, small, medium or large viewport widths.

    <div class="overflow-x mb-3">
    <table class="table">
      <thead>
        <tr>
          <th>Flex system wrapper</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>flex</code></td>
          <td><code>display: flex;</code> for all viewport widths</td>
        </tr>
        <tr>
          <td><code>xs:flex</code></td>
          <td><code>display: flex;</code> from 568px (default) up</td>
        </tr>
        <tr>
          <td><code>sm:flex</code></td>
          <td><code>display: flex;</code> from 768px (default) up</td>
        </tr>
        <tr>
          <td><code>md:flex</code></td>
          <td><code>display: flex;</code> from 1024px (default) up</td>
        </tr>
        <tr>
          <td><code>lg:flex</code></td>
          <td><code>display: flex;</code> from 1280px (default) up</td>
        </tr>
      </tbody>
    </table>
    </div>

    Below these breakpoints the child block element layout will be displayed the default way: all stacked in a single column with 100% width.

2. The flexbox modifier classes documented below (`flex-gap`, `flex-wrap`, etc.) will all just work as expected with these responsive prefixed flex wrappers – they will only take effect above the specified (lowest) breakpoint.
3. All flexbox system wrappers affect their _immediate child elements_ (i.e. flex-items).
4. `flex` is not used for a pseudo grid system. Instead, Codebase has a [real grid]({{ '/docs/3-layout-utilities/grid' | url }}) that uses _CSS Grid Layout_.
5. By default, flex sytems do not _wrap_ their content onto a new row if there is not enough space available. So, if you require wrapping, use `flex flex-wrap`.
6. If required in your design, you can override a flexbox at a wider breakpoint the element so that it is back to being a full-width block, using a responsive [block]({{ '/docs/3-layout-utilities/blocks' | url }}) utility.

## Setting up a `flex` flexbox

All you need is `flex`:

<div class="my-6">
<div class="flex">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
  <div class="b-thin p-1 bg-gray-100">Four</div>
</div>
</div>

```html
<div class="flex">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

The `flex` wrapper (and its breakpoint width variants; see above), is great for making, e.g. [menubars]({{ '/docs/6-simple-components/menus/#menubars' | url }}).

### Columnar flexbox

You can also turn the flexbox mechanism thorugh 90&deg; using `flex flex-column`.

Flex columns are great for setting up, e.g. [cards]({{ '/docs/6-simple-components/cards' | url }}).

## Stretching flex items

There are two ways that you can expand flex items horizontally to “fill” a row.

**Note:** it’s also possible to cause individual flex items to grow – see [using `grow` to stretch individual flex items](#using-grow-to-stretch-individual-flex-items) below.

### Equal stretching

If you want your flex items to all stretch equally, add `flex-grow-equal` to the `flex` wrapper:

<div class="my-6">
<div class="flex flex-grow-equal">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
  <div class="b-thin p-1 bg-gray-100">Four</div>
</div>
</div>

```html
<div class="flex flex-grow-equal">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

`flex-grow-equal` may be all you need if you require a number of equal width columns (e.g. for a “two up” or “three up”). You can easily use a breakpoint width prefix on the wrapper (e.g. use`md:flex` instead of `flex`), so that your flexbox takes effect only above that viewport width.

### Unequal stretching

If you want to make the flex items stretch unequally, according to their content, then add `flex-grow-auto` to the `flex` wrapper:

`flex flex-grow-auto `:

<div class="my-6">
<div class="flex flex-grow-auto">
  <div class="b-thin p-1 bg-gray-100">First flex-item</div>
  <div class="b-thin p-1 bg-gray-100">Another flex-item</div>
  <div class="b-thin p-1 bg-gray-100">And a third</div>
  <div class="b-thin p-1 bg-gray-100">Last flex-item in this flexbox set</div>
</div>
</div>

## Flex item wrapping

By default, `flex` does not cause flex items to wrap if there’s not enough horizontal space for them. If you require wrapping, add `flex-wrap` to the flexbox wrapper.

To see the effect `flex-wrap`, make your viewport narrower intil the last item on the example below wraps to a new row. Compage this with the previous example to see the difference.

<div class="my-6">
<div class="flex flex-grow-auto flex-wrap">
  <div class="b-thin p-1 bg-gray-100">First flex-item</div>
  <div class="b-thin p-1 bg-gray-100">Another flex-item</div>
  <div class="b-thin p-1 bg-gray-100">And a third</div>
  <div class="b-thin p-1 bg-gray-100">Fourth flex-item in this flexbox set</div>
  <div class="b-thin p-1 bg-gray-100">Here’s another item</div>
  <div class="b-thin p-1 bg-gray-100">We’re not finished yet</div>
  <div class="b-thin p-1 bg-gray-100">There’s more to come</div>
  <div class="b-thin p-1 bg-gray-100">Still not finished</div>
  <div class="b-thin p-1 bg-gray-100">What, you want more?</div>
  <div class="b-thin p-1 bg-gray-100">Really?</div>
  <div class="b-thin p-1 bg-gray-100">Finally, the last flex-item</div>
</div>
</div>

### Using `grow` to stretch individual flex items

Adding the flexbox `grow` utility to  a flex item will expand it to occupy the available space.
`grow` only take effect inside of a `flex` wrapper (and only then if above your specified breakpoint width, whether `-xs`, `-sm`, `-md` or `-lg`).

Examples of `grow`:

<div class="my-6 flex">
  <div class="grow b-thin p-1 bg-gray-100">grow</div>
  <div class="b-thin p-1 bg-gray-100 pr-6">x</div>
</div>
<div class="my-6 flex">
  <div class="b-thin p-1 bg-gray-100 pr-6">x</div>
  <div class="grow b-thin p-1 bg-gray-100">grow</div>
  <div class="b-thin p-1 bg-gray-100 pr-6">x</div>
  <div class="b-thin p-1 bg-gray-100 pr-6">x</div>
</div>

```html
<div class="flex">
  <div class="grow">grow</div>
  <div>x</div>
</div>

<div class="flex">
  <div>x</div>
  <div>x</div>
  <div class="grow">grow</div>
  <div>x</div>
  <div>x</div>
  <div>x</div>
</div>
```

With `flex flex-column` (and the flex wrapper has `style="height: 250px"` for this demo):

<div class="my-6">
<div class="flex flex-column" style="height: 250px">
  <div class="b-thin p-1 bg-gray-100">x</div>
  <div class="grow b-thin p-1 bg-gray-100">grow</div>
</div>
</div>

```html
<div class="flex flex-column" style="height: 250px">
  <div>x</div>
  <div class="grow>grow</div>
</div>
```

## Adding a gap

There are two ways to add gaps in `flex` sets.

### Gaps using `flex-gap`

Codebase uses [flexbox-gap](https://caniuse.com/flexbox-gap) style rule for flex gaps.

If you want a gap between flex items, add `flex-gap` to the `flex` wrapper:

<div class="my-6">
<div class="flex flex-gap flex-grow-auto">
  <div class="b-thin p-1 bg-gray-100">First flex-item</div>
  <div class="b-thin p-1 bg-gray-100">Another flex-item</div>
  <div class="b-thin p-1 bg-gray-100">And a third</div>
  <div class="b-thin p-1 bg-gray-100">Last flex-item in this flexbox set</div>
</div>
</div>

The thickness `flex-gap` is 1.5rem (default) – which is 3 [element grid units]({{ '/docs/1-getting-started/element-grid/' | url }}), or the same as the default line height, and the height of the “empty line“ margin below paragraphs and headings in Codebase.

`flex-gap` adds gaps vertically (between columns) and horizontally (between rows)s, as you see in the example below:

<div class="my-6">
<div class="flex flex-gap flex-grow-auto flex-wrap">
  <div class="b-thin p-1 bg-gray-100">First flex-item</div>
  <div class="b-thin p-1 bg-gray-100">Another flex-item</div>
  <div class="b-thin p-1 bg-gray-100">And a third</div>
  <div class="b-thin p-1 bg-gray-100">Fourth flex-item in this flexbox set</div>
  <div class="b-thin p-1 bg-gray-100">Here’s another item</div>
  <div class="b-thin p-1 bg-gray-100">We’re not finished yet</div>
  <div class="b-thin p-1 bg-gray-100">There’s more to come</div>
  <div class="b-thin p-1 bg-gray-100">Still not finished</div>
  <div class="b-thin p-1 bg-gray-100">What, you want more?</div>
  <div class="b-thin p-1 bg-gray-100">Really?</div>
  <div class="b-thin p-1 bg-gray-100">Finally, the last flex-item</div>
</div>
</div>

**Note:** if you need to revert to using the old “flexbox gap hack“ that adds _negative x-axis margins_ to the `flex` wrapper and corresponding _positive x-axis paddings_ to the flex items, this is still available: just change `$use-flex-gap: true` to `false` in the default variables file.

### Other ways to add white space

`flex flex-space-between`:

<div class="my-6">
<div class="mb-6 flex flex-space-between b-dashed">
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
</div>

`flex flex-space-around`:

<div class="flex flex-space-around b-dashed">
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
  <div class="b-thin p-1 bg-gray-100">Item</div>
</div>
</div>

## Alignment of flex items

### Horizontal alignment

`flex flex-start` / `flex flex-center` / `flex flex-end`:

<div class="my-6">
<div class="flex flex-start b-dashed">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
<div class="my-6 flex flex-center b-dashed">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
<div class="flex flex-end b-dashed">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
</div>

### Vertical alignment

`flex flex-top` / `flex flex-middle` / `flex flex-bottom`:

<div class="my-6">
<div class="flex flex-top b-dashed" style="height: 150px">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
<div class="my-6 flex flex-middle b-dashed" style="height: 150px">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
<div class="flex flex-bottom b-dashed" style="height: 150px">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
</div>

`flex flex-center flex-middle`:

<div class="my-6">
<div class="flex flex-center flex-middle b-dashed" style="height: 150px">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
</div>

Same as above but with `flex-column`:

`flex flex-column flex-center flex-middle`:

<div class="my-6">
<div class="flex flex-column flex-center flex-middle b-dashed" style="height: 150px">
  <div class="b-thin p-1 bg-gray-100">One</div>
  <div class="b-thin p-1 bg-gray-100">Two</div>
  <div class="b-thin p-1 bg-gray-100">Three</div>
</div>
</div>

