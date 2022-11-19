---
title: "Element grid"
headerTitle: "The Codebase element grid"
layout: layout.njk
prevPage: "/docs/1-getting-started/responsive-design"
nextPage: "/docs/1-getting-started/css-variables"
prevLink: "Responsive design"
nextLink: "CSS variables"
---

Codebase uses a “soft” 0.5rem element grid (default 8px) for consistently positioning elements relative to each other.

This is similar in principle to various 8px grids out there (also known as 8-point or 8dp [device pixel] grids). For example:

* [SpecFM’s 8-point grid](https://spec.fm/specifics/8-pt-grid)
* [Intro to The 8-Point Grid System](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632) by Elliot Dahl

## How the element grid is used

The Codebase element grid has been deployed a follows:

1. By default, the base typography vertical rhythm (line-height) is set at 1.5rem (= 3 element grid units). 
 The line heights for headers have also been set using 0.5rem increments.
2. Spacing utilities for margins, paddings and gaps (used in both flexbox and grid) have been set using values from the 0.5rem element grid.

```scss
$spacing: (
  "0": 0,
  "1": 0.5rem,
  "2": 1rem,
  "3": 1.5rem,
  "4": 2rem,
  "5": 2.5rem,
  "6": 3rem,
);

$spacing-setup: (
  "0": 0,
  "1": var(--sp-1),
  "2": var(--sp-2),
  "3": var(--sp-3),
  "4": var(--sp-4),
  "5": var(--sp-5),
  "6": var(--sp-6),
);
```

## Infographic: the Codebase element grid

<div class="my-6">
<img src="{{ '/img/element-grid.svg' | url }}" width="736" height="446">
</div>

**Note:** the padding for buttons and table cells corresponds to Codebase utility classes `px-2 py-1`. Since this would be used frequently for menu itams, tab labels, etc., Codebase also has `p-block` that adds this margin (`margin: var(--sp-1) var(--sp-2);`) in one utility class.

## Utility class spacing

The element grid has been used throughout Codebase’s classless (basic) styling. Where element grid units have been used in [spacing]({{ '/docs/5-decoration-utilities/spacing' | url }}) utility classes (i.e. margins and paddings), these are provided as follows:

<table class="table">
  <thead>
    <tr>
      <th>Element grid measure</th>
      <th>Utility class suffix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0.5rem</code></td>
      <td><code>-1</code></td>
    </tr>
    <tr>
      <td><code>1rem</code></td>
      <td><code>-2</code></td>
    </tr>
    <tr>
      <td><code>1.5rem</code> = 1 line height</td>
      <td><code>-3</code></td>
    </tr>
    <tr>
      <td><code>2rem</code></td>
      <td><code>-4</code></td>
    </tr>
    <tr>
      <td><code>2.5rem</code></td>
      <td><code>-5</code></td>
    </tr>
    <tr>
      <td><code>3rem</code> = 2 lines</td>
      <td><code>-6</code></td>
    </tr>
  </tbody>
</table>