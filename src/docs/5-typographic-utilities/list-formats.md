---
title: "Lists"
headerTitle: "List formats"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/inline-text"
nextPage: "/docs/5-typographic-utilities/text-columns"
prevLink: "Inline text"
nextLink: "Text columns"
---

Codebase has several `list-style-type-` utilities (to be used on `<ol>` and `<ul>` tags), for controlling  list item indicators.

## Ordered lists

Normal (classless):

<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-none`

<ol class="list-style-type-none">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-lower-alpha`

<ol class="list-style-type-lower-alpha">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-upper-alpha`

<ol class="list-style-type-upper-alpha">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-lower-roman`

<ol class="list-style-type-lower-roman">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-upper-roman`

<ol class="list-style-type-upper-roman">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

`list-style-type-decimal`

<ol class="list-style-type-decimal">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

## Unordered lists

Normal (classless):

<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

`list-style-type-none`

<ul class="list-style-type-none">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

`list-style-type-square`

<ul class="list-style-type-square">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

`list-style-type-circle`

<ul class="list-style-type-circle">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

`list-style-type-disc`

<ul class="list-style-type-disc">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

## Menus are usually lists

At their most basic, web navigation menus are lists of hyperlinks. Usually they are styled up a bit, to make them look more interesting. And for accessabiilty, you should swap the (outer) `<ul>` for `<nav>` or `<menu>` tag.

See the simple [menus (and menubars)]({{ '/docs/6-simple-components/menus-and-menubars/' | url }}) component.