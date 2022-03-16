---
title: "Grid"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/flexbox"
nextPage: "/docs/3-layout-utilities/aspect-ratios"
prevLink: "Flexbox"
nextLink: "Aspect ratios"
---

The [CSS Grid Layout Module](https://www.w3.org/TR/css-grid-2/) has been designed for setting up grid layouts without the need to use older pseudo grid layout systems that use table cells, floats or flexbox. The first version of the CSS Grid specificaction was implemented in a few web browsers in 2017, and CSS Grid is now found in [all major web browsers](https://caniuse.com/css-grid).

Here are some popular resources for learning CSS Grid layout:

* [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) – MDN Web Docs
* [Learn CSS Grid](https://learncssgrid.com/) – by Jonathan Suh
* [Grid by Example](https://gridbyexample.com/) – by Rachel Andrew
* [Grid Garden](https://cssgridgarden.com/) - a game for learning CSS Grid, by Codepip

When you’ve learned how to use it, CSS Grid is so powerful and easy to use that respected web developers such as Rachel Andrew have said that [a CSS grid-based grid system is unnecessary](https://rachelandrew.co.uk/archives/2017/07/01/you-do-not-need-a-css-grid-based-grid-system/).

So, yes you can learn CSS Grid and then weave your own layout. But I have found myself repeatedy using a simple set of CSS grid layout utility classes e.g. for a quick “two up”, “three up” layout. With several extras, and tiers for media query breakpoint widths, this has become a robust two dimensional grid system (or even three dimentional, becayse you can position grid items so that they overlap).

CSS Grid layout is capable of doing much more than the Codebase grid does. But it has you covered for most or all traditional layouts.

## The Codebase grid in theory

Let’s start with some basic concepts and terminology.

A grid consists of vertical and horizontal lines with square or rectangular spaces in between. In web design, we call the lines _grid tracks_ and the spaces _grid cells_. And the grid is not actually drawn on the browser screen – though it can be visualized e.g. by dashed lines in a browser’s _code inspector_ (dev tools).

Web designers place HTML elements (called _grid items_ in this context) _on_ the grid. The CSS Grid engine “snaps” the elements to the grid tracks, and you can design them to sit on one grid cell or to span multiple cells. 

Web browser screens can be any size from very small (phones) to very large (desktop or wall mounted displays). So, unlike with set grids paper-based poster or magazine page designs, and unlike with squared math or graph paper, CSS Grid can be _stretchy_, which is good for responsive layouts. Grid cells can have any width, dependant on the width of the browser screen, or dependant on the width of the Grid controlled area within a design. And grid cells can have any height, dependant on how much content (or, the height of the content) in an element that is places on the grid.

Codebase’s `grid` system has utility classes for controlling up to six _column tracks_ and six _row tracks_.

_Grid items_ are immediate child elements of an element that has the `grid` CSS class. By default, grid items occupy one _grid cell_ (the smallest rectangle). The Codebase grid system has CSS classes for:

* **Controling tracks at _grid wrapper_ level:**
    * [Grid](#the-codebase-5-grid-in-practice) – `grid` initializes the CSS grid. It adds `display: grid;` but it doesn’t provide information about how many columns you want.
    * [Gap](#adding-gaps) – also known as a _gutter_ between grid items:
        * `gap` (optional) adds vertical _and_ horizontal whitespace along internal grid tracks.
        * `col-gap` (optional) adds vertical whitespace along internal grid tracks – between columns.
        * `row-gap` (optional) adds horizontal whitespace along internal grid tracks – between rows.
    * [Column control](#auto-width-or-equal-width-columns):
        * `auto-{x}-cols` (optional) – specifies how many columns your layout has (up to six), where each column width can be different. The width depends on the width of the placed element’s content, or you can control it by specifying the width (on a per-column basis).
        * `equal-{x}-cols` (optional) – specifies how many columns your layout has (up to six), where each column width is equalized. So, if you have two columns each will have width 50%; if you have 3 columns each will be 33.3...%; and so on. (If you have a `gap`, these column widths are automatically recalculated by the CSS Grid engine.)
* **Controling positioning and spanning at _per-grid-item_ level:**
    * [Positioning](#controlling-grid-item-positioning-on-a-per-item-basis): `col-{x}` and `row-{x}` – for positioning each grid item over the grid cells.
    * [Spanning](#spanning-multiple-columns-and%2For-rows): `cols-{first}-{last}` and `rows-{first}-{last}` – for handling column and/or row spanning.
* **Grid layouts at different media query breakpoints**:
    * The Codebase grid system has five tiers of media query breakpoints, for creating [different grid layouts for different sized devices](#grid-layouts-at-different-media-query-breakpoints): (all), `xs`, `sm`, `md`, and `lg`.

The _singular named_ `col-` and `row-` classes are used to instruct the grid which grid cell you want your grid item to be placed on (up to 6 columns and/or 6 rows). The _plural named_ `cols-` and `rows-` classes can be used to make grid items to span up to 6 columns and/or 6 rows.


## Infographic: the Codebase grid

<div class="my-3">
<img src="{{ '/img/grid.svg' | url }}" width="1200" height="860">
</div>

## The Codebase grid in practice

The `grid` class does not specify or predict where you will position or how you will span your grid items. It just supplies the style `display: grid;` to initialize your grid area. So far, your layout will still only be in rows:

```html
<div class="grid">
  <div> ... </div>
  <div> ... </div>
  <div> ... </div>
</div>
```

<div class="grid my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

### Grid item wrapping

Grid items will _automatically wrap_ onto a new row if your layout requires it. (This is not like flexbox, where you have to command a flexbox to wrap using a style rule.)

```html
<div class="grid">
  <div class="col-1"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
  <div class="col-1"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
</div>
```

<div class="grid my-6">
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
</div>

When you have wrapping rows like this, you actually don’t need to add `col-` classes to grid items that drop to the next row (and third row, etc.). The CSS Grid engine will figure out what you want. After you have completed your required number of columns on your first row, CSS grid will automatically position the subsequent row’s grid items consecutively in the same columns as you specified in your first row.

The `col-` classes on subsequent rows are redundant but harmless – but you can include them if it helps you remember what you are doing, and to explain your intention to other designers in your collaboration.

```html
<div class="grid">
  <div class="col-1"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
  <div class="col-4"> ... </div>
  <div class="col-5"> ... </div>
  ...
</div>
```

<div class="grid my-6">
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
  <div class="col-4 b-thin p-1 bg-gray-100">col-4</div>
  <div class="col-5 b-thin p-1 bg-gray-100">col-5</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

### Auto-width or equal-width columns

Both `grid auto-{x}-cols` and `grid equal-{x}-cols` specify how many columns your grid will have, before items will wrap to a new row.

* Use `grid auto-{x}-cols` if you need columns that have their widths controlled additionally to the grid layout itself (e.g. you are setting a particular width on a sidebar, or you are setting up a columnar menu “buffet”).

* Use `grid equal-{x}-cols` if you are setting up a traditional “constrained columnar width” layout or a gallery of images or videos.

The two examples that follow differ only in whether they have `auto-3-cols` or `equal-3-cols`.

* `auto-3-cols`:

    ```html
    <div class="grid auto-3-cols">
      <div>Lorem</div>
      <div>ipsum dolor sit</div>
      <div>amet consectetur adipisicing elit.</div>
      <div>Explicabo enim</div>
      <div>velit veniam reiciendis vel inventore sequi quasi</div>
      <div>fugit sunt aliquam!</div>
    </div>
    ```

    <div class="grid auto-3-cols my-6">
      <div class="b-thin p-1 bg-gray-100">Lorem</div>
      <div class="b-thin p-1 bg-gray-100">ipsum dolor sit</div>
      <div class="b-thin p-1 bg-gray-100">amet consectetur adipisicing elit.</div>
      <div class="b-thin p-1 bg-gray-100">Explicabo enim</div>
      <div class="b-thin p-1 bg-gray-100">velit veniam reiciendis vel inventore sequi quasi</div>
      <div class="b-thin p-1 bg-gray-100">fugit sunt aliquam!</div>
    </div>

* `equal-3-cols`:

    ```html
    <div class="grid equal-3-cols">
      <div>Lorem</div>
      <div>ipsum dolor sit</div>
      <div>amet consectetur adipisicing elit.</div>
      <div>Explicabo enim velit veniam reiciendis</div>
      <div>velit veniam reiciendis vel inventore sequi quasi</div>
      <div>fugit sunt aliquam!</div>
    </div>
    ```

    <div class="grid equal-3-cols my-6">
      <div class="b-thin p-1 bg-gray-100">Lorem</div>
      <div class="b-thin p-1 bg-gray-100">ipsum dolor sit</div>
      <div class="b-thin p-1 bg-gray-100">amet consectetur adipisicing elit.</div>
      <div class="b-thin p-1 bg-gray-100">Explicabo enim velit veniam reiciendis</div>
      <div class="b-thin p-1 bg-gray-100">velit veniam reiciendis vel inventore sequi quasi</div>
      <div class="b-thin p-1 bg-gray-100">fugit sunt aliquam!</div>
    </div>

### Adding gaps

Add a gap (also known as a _gutter_) between grid items using `gap` classes. Grid gaps run in two dimensions:

* vertically along column tracks: use `col-gap`
* horizontally along row tracks : use `row-gap`
* vertically along column tracks and horizontally along row tracks: use `gap`

`grid gap equal-3-cols`:

<div class="grid gap equal-3-cols my-6">
  <div class="rows-1-2 b-thin p-1 bg-gray-100">rows-1-2</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

#### Gap thickness

The default `gap` is 1.5rem – which is 3 [element grid units]({{ '/docs/1-getting-started/element-grid/' | url }}), or the same as the default line height, and the height of the “empty line“ margin below paragraphs and headings in Codebase. There is also `gap-sm` (0.5rem, or 1 element grid unit) and `grid-lg` (3rem, or 6 element grid units).

`grid gap-sm equal-4-cols`:

<div class="grid gap-sm equal-4-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

`grid gap equal-4-cols`:

<div class="grid gap equal-4-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

`grid gap-lg equal-4-cols`:

<div class="grid gap-lg equal-4-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>


#### Column gaps and row gaps

`grid col-gap equal-3-cols`:

<div class="grid col-gap equal-3-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

`grid row-gap equal-3-cols`:

<div class="grid row-gap equal-3-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

#### Responsive gap tiers

All of the above `gap` permutations have 5 responsive tiers: at (all), `xs:`, `sm:`, `md:`, and `lg:` breakpoints. See [grid layouts at different media query breakpoints](#grid-layouts-at-different-media-query-breakpoints).

### Controlling grid item positioning on a per-item basis

If you don’t specify how many columns on the grid-wrapper level (using `auto-{x}-cols` or `equal-{x}-cols`), but you use `col-` positioning classes on your grid items, the CSS Grid engine can usually figure out what you want, if your layout is relatively simple.

Similar to the behavior of `auto-{x}-cols`, grid item `col-` classes do not have a percentile or other max-width built in. So, if you don not constrain columns, then they will expand depending on their content:

<div class="grid my-6">
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2 / Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim velit veniam reiciendis, vel inventore sequi quasi fugit sunt aliquam! Incidunt eum alias illo ea laudantium animi possimus amet sunt?</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
</div>

```html
<div class="grid">
  <div class="col-1"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
</div>
```

Now, if you want the grid item widths to be equalized, use `equal-3-cols` on the wrapper.

<div class="grid equal-3-cols y-6">
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2 / Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim velit veniam reiciendis, vel inventore sequi quasi fugit sunt aliquam! Incidunt eum alias illo ea laudantium animi possimus amet sunt?</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
</div>

```html
<div class="grid equal-3-cols">
  <div class="col-1"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
</div>
```

### Grid item reordering

You can use `col-` and or `row-` classes to display grid items in different positions, and even overlap them. However, with this added complexity, you will need to control both columns _and_ rows (be pedantic), so that CSS grid layout can figure out what you wanting to do.

In the example below, the grid items are rearranged into different columns. But I want still want them to be all in one row, therefore I must specify `row-1` on each item, so that the CSS Grid engine gets it right.

```html
<div class="grid">
  <div class="col-2 row-1">First item</div>
  <div class="col-4 row-1">Second item</div>
  <div class="col-3 row-1">Third item</div>
  <div class="col-1 row-1">Fourth item</div>
  <div class="col-5 row-1">Fifth item</div>
</div>
```

<div class="grid my-6">
  <div class="col-2 row-1 b-thin p-1 bg-gray-100">First item</div>
  <div class="col-4 row-1 b-thin p-1 bg-gray-100">Second item</div>
  <div class="col-3 row-1 b-thin p-1 bg-gray-100">Third item</div>
  <div class="col-1 row-1 b-thin p-1 bg-gray-100">Fourth item</div>
  <div class="col-5 row-1 b-thin p-1 bg-gray-100">Fifth item</div>
</div>

Not exemplified here: you can even overlap grid items by specifying that they occupy the same grid cell (whether entirely or in part). So, it’s a three dimensional grid system!

### Spanning multiple columns and/or rows

By default, one grid item sits on one grid cell – the grid item spans one column track wide and one row track high. But you can make grid items span up to 6 columns and/or up to 6 rows using the _plural named_ classes `cols-{first}-{last}` and/or `rows-{first}-{last}`.

**Note:** grid items can occupy grid cells to form any square or recangular shape, but cannot form e.g. irregular “L” shape.

Thinking about one row: the first grid item can span up to six columns (columns 1 to 6). The second grid item can span up to five columns (columns 2 to 6). And so on. And it’s similar for spanning rows.

Example: the second column spans three grid cells, from 2 through 4.

```html
<div class="grid equal-4-cols">
  <div class="col-1"> ... </div>
  <div class="cols-2-4"> ... </div>
</div>
```

<div class="grid equal-4-cols my-6">
  <div class="col-1 b-thin p-1 bg-gray-100">col-1</div>
  <div class="cols-2-4 b-thin p-1 bg-gray-100">cols-2-4</div>
</div>

Spanning multiple rows works the same way.

```html
<div class="grid equal-3-cols">
  <div class="col-1 rows-1-3"> ... </div>
  <div class="col-2"> ... </div>
  <div class="col-3"> ... </div>
  <div class=""> ... </div>
  <div class=""> ... </div>
  <div class=""> ... </div>
  <div class=""> ... </div>
</div>
```

<div class="grid equal-3-cols my-6">
  <div class="col-1 rows-1-3 b-thin p-1 bg-gray-100">col-1 rows-1-3</div>
  <div class="col-2 b-thin p-1 bg-gray-100">col-2</div>
  <div class="col-3 b-thin p-1 bg-gray-100">col-3</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>

### Grid layouts at different media query breakpoints

The `grid` class merely sets `display: grid`, without defining columns or rows or anything. Everything is controlled by `gap`, `equal-`, `col-`, `cols-`, `row-` and `rows-` classes.

Besides the exemplified classes above, each of these grid control classes has four more media query breakpoint tiers in Codebase (`xs:`, `sm:`, `md:`, and `lg:`).

With control of up to six columns and control of up to six rows over 5 media breakpoints tiers (including the base tier), _this gives you a lot of layout versatility_.

Here’s a simple example: a “gallery” layout with 4 items:

* For the smallest devices (phones in portrait orientation, below width 568px default), all four items are in one column.
* Turn a phone to landscape orientation (or do whatever it takes to get your screen/window width to 568px of above) and you get the items in two columns.
* Also, a grid gap takes effect at the same breakpoint width.
* Go wider to a tablet in landscape orientation (width 1024px and up), and it’s a four column layout.

```html
<div class="grid xs:gap">
  <div class="xs:col-1 md:col-1"> ... </div>
  <div class="xs:col-2 md:col-2"> ... </div>
  <div class="xs:col-1 md:col-3"> ... </div>
  <div class="xs:col-2 md:col-4"> ... </div>
</div>
```

<div class="grid xs:gap my-6">
  <div class="xs:col-1 md:col-1 b-thin p-1 bg-gray-100">xs:col-1 md:col-1</div>
  <div class="xs:col-2 md:col-2 b-thin p-1 bg-gray-100">xs:col-2 md:col-2</div>
  <div class="xs:col-1 md:col-3 b-thin p-1 bg-gray-100">xs:col-1 md:col-3</div>
  <div class="xs:col-2 md:col-4 b-thin p-1 bg-gray-100">xs:col-2 md:col-4</div>
</div>

You can switch on or off column gaps and row gaps at various breakpoints, if you design requires it. The responsive (i.e. media-query controlled) column gaps switch off their respective row gaps, and row gaps switch off their respective column gaps.

`grid sm:row-gap md:col-gap equal-3-cols`:

<div class="grid sm:row-gap md:col-gap equal-3-cols my-6">
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
  <div class="b-thin p-1 bg-gray-100">&nbsp;</div>
</div>