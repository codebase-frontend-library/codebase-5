---
title: "Tables"
layout: layout.njk
prevPage: "/docs/6-simple-components/labels"
nextPage: "/docs/6-simple-components/media-objects"
prevLink: "Labels"
nextLink: "Media objects"
---

The Codebase `table` component class expands tables to 100% width, aligns everything to the left, and adds some padding and a fine-line border around every table cell.</p>

<table class="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

```html
<table class="table">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
  </tbody>
</table>
```

## Table alternative styles

```html
<table class="table">
  ...
</table>

<table class="table table-borderless">
  ...
</table>

<table class="table table-compact">
  ...
</table>

<table class="table table-fixed">
  ...
</table>

<table class="table table-striped">
  ...
</table>
```

`table-borderless` – no borders around table or cells

<table class="table table-borderless">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

`table-compact` – less padding

<table class="table table-compact">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

`table-fixed` - applies a _fixed width_ to each table cell using `table-layout: fixed;`, so that column widths are equalized:

<table class="table table-fixed">
  <thead>
    <tr>
      <th>Table Header Number One</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1 has a more content than other cells</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4 - you really can have any amount of content, and the columns will still have a fixed equal width.</td>
    </tr>
  </tbody>
</table>

`table-striped` – applies a _transparent white tint_ and a _transparent black tint_ to alterating rows:

<table class="table table-striped">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

## Combining table styles

You can combine table styles. For example:

```html
<table class="table table-borderless table-compact table-striped">
  ...
</table>
```

<table class="table table-borderless table-compact table-striped">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

## Content alignments inside cells

* `vertical-align-middle` / `vertical-align-bottom`

`table` cells in Codebase normally have their content aligned top left of each cell (`<th>` or `<td>`). You cacn change the vertical alignment with `vertical-align-middle` or `vertical-align-bottom`.

For `table` `<th>` or `<td>` center or right alignment, use `t-center` or `t-right`.

## Oversized tables

For adding horizontal scrolling to a table that is too wide for the available space (especially important on narrow viewports), wrap the table in a `<div>` that has the `overflow-x` utility class.

Codebase `overflow-x` uses to remove margins from around Codebase table classes (but not from the classless `<table>` tag). Therefore you may also need to add some bottom margin to the overflow wrapper – e.g. using `mb-2`

```html
<div class="overflow-x mb-2">
  <table class="table table-compact table-striped">
    ...
  </table>
</div>
```

<div class="overflow-x mb-2">
<table class="table table-compact table-striped">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
      <th>Table Header 4</th>
      <th>Table Header 5</th>
      <th>Table Header 6</th>
      <th>Table Header 7</th>
      <th>Table Header 8</th>
      <th>Table Header 9</th>
      <th>Table Header 10</th>
      <th>Table Header 11</th>
      <th>Table Header 12</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
      <td>Table content 4.1</td>
      <td>Table content 5.1</td>
      <td>Table content 6.1</td>
      <td>Table content 7.1</td>
      <td>Table content 8.1</td>
      <td>Table content 9.1</td>
      <td>Table content 10.1</td>
      <td>Table content 11.1</td>
      <td>Table content 12.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
      <td>Table content 4.2</td>
      <td>Table content 5.2</td>
      <td>Table content 6.2</td>
      <td>Table content 7.2</td>
      <td>Table content 8.2</td>
      <td>Table content 9.2</td>
      <td>Table content 10.2</td>
      <td>Table content 11.2</td>
      <td>Table content 12.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
      <td>Table content 4.3</td>
      <td>Table content 5.3</td>
      <td>Table content 6.3</td>
      <td>Table content 7.3</td>
      <td>Table content 8.3</td>
      <td>Table content 9.3</td>
      <td>Table content 10.3</td>
      <td>Table content 11.3</td>
      <td>Table content 12.3</td>
    </tr>
  </tbody>
</table>
</div>

Are you have a situation where there is (or is going to be) multiple oversized, layout-breaking tables? Then you can add some JavaScript to your template, that automatically adds this `overflow-x` wrapper to all tables that have the `table` class.

Here’s one way of doing that:

```html
<script>
  (function () {

    [].forEach.call(document.querySelectorAll('.table'), function(el) {
      var table = el.outerHTML;
      var tableWrapped = '<div class="overflow-x mb-2">' + table + '</div>';
      el.outerHTML = tableWrapped;
    });

  }());
</script>
```