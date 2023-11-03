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

2. The flexbox modifier classes documented below (`gap-3`, `flex-wrap`, etc.) will all just work as expected with these responsive prefixed flex wrappers – they will only take effect above the specified (lowest) breakpoint.
3. All flexbox system wrappers affect their _immediate child elements_ (i.e. flex-items).
4. `flex` is not used for a pseudo grid system. Instead, Codebase has a [real grid]({{ '/docs/3-layout-utilities/grid' | url }}) that uses _CSS Grid Layout_.
5. By default, flex sytems do not _wrap_ their content onto a new row if there is not enough space available. So, if you require wrapping, use `flex flex-wrap`.
6. If required in your design, you can override a flexbox at a wider breakpoint the element so that it is back to being a full-width block, using a responsive [block]({{ '/docs/3-layout-utilities/blocks' | url }}) utility.
7. New in `v.5.2.9`: In addition to the `flex` setup class, you can also override eah of the flex modifier classes at the `xs`, `sm`, `md`, and `lg` breakpoint widths — see [responsive flex modifier tiers](#responsive-flex-modifier-tiers).

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

## Responsive flex modifier tiers

New in Codebase v.5.2.9: In addition to the `flex` setup class, you can also override eah of the flex modifier classes at the `xs`, `sm`, `md`, and `lg` breakpoint widths:

* `flex-start` / `flex-center` / `flex-end` 
* `flex-top` / `flex-middle` / `flex-bottom`
* `flex-column` / `flex-column-reverse`
* `flex-row` / `flex-row-reverse`
* `flex-space-around` / `flex-space-between` / `flex-space-evenly`
* `flex-grow-auto` / `flex-grow-equal`
* `flex-wrap`

So, you can create layout components that use flexbox positioning, orienting, ordering, spacing, growing (stretching), and wrapping differently for different devices.

Example: in this simple menubar, the links are centered for small viewports and right-aligned for medium viewports up:

<nav class="mb-3 b-thin p-block flex flex-center md:flex-end gap-2">
  <a href="#/">About</a>
  <a href="#/">Blog</a>
  <a href="#/">Contact</a>
</nav>

```html
<nav class="b-thin p-block flex flex-center md:flex-end gap-2">
  <a href="">About</a>
  <a href="">Blog</a>
  <a href="">Contact</a>
</nav>
```

## Adding gaps

There are two ways to add gaps in `flex` sets.

### Gaps using `gap-*`

Codebase uses the [gap property](https://caniuse.com/flexbox-gap) for flexbox to style `flex` gaps (i.e. the same gap property as for CSS grid).

Since Codebase v.5.1.0, these have ben set using the same element grid unit spacing variables as are used for the margins and paddings utilities

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

#### Responsive gap tiers

All of the above `gap` permutations have 5 responsive tiers: at (all), `xs:`, `sm:`, `md:`, and `lg:` breakpoints. Like so:

* Gaps between both rows and columns: `gap-` / `xs:gap-` / `sm:gap-` / `md:gap-` / `lg:gap-`
* Gaps between both columns only: `col-gap-` / `xs:col-gap-` / `sm:col-gap-` / `md:col-gap-` / `lg:col-gap-`
* Gaps between both rows only: `row-gap-` / `xs:row-gap-` / `sm:row-gap-` / `md:row-gap-` / `lg:row-gap-`

That makes 90 (`flex` or `grid`) gap utilities.

#### Gap example

`flex gap-2 flex-grow-auto flex-wrap`

<div class="my-6">
<div class="flex gap-2 flex-grow-auto flex-wrap">
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

#### Column Gaps and Row Gaps

`flex col-gap-2 flex-grow-auto flex-wrap`

<div class="my-6">
<div class="flex col-gap-2 flex-grow-auto flex-wrap">
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

`flex row-gap-2 flex-grow-auto flex-wrap`

<div class="my-6">
<div class="flex row-gap-2 flex-grow-auto flex-wrap">
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

