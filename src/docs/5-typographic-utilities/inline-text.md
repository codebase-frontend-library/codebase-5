---
title: "Inline text"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/text-alignment"
nextPage: "/docs/5-typographic-utilities/list-formats"
prevLink: "Text alignment"
nextLink: "List formats"
---

Codebase has several simple text utility classes. (See also [font-stacks]({{ '/docs/5-typographic-utilities/font-stacks' | url }}).)

## Text weights

**Note:** Your visitor needs to have font-weights 200, 400, 600, 700, and 900 (both normal and italic) in your website’s typeface installed on their device, or added via a CDN (e.g. Google Fonts), or else they may not see these weights.

<span class="t-bolder">Bolder • <span class="t-italic">Italic</span></span><br>
<span class="t-bold">Bold • <span class="t-italic">Italic</span></span><br>
<span class="t-semibold">Semibold • <span class="t-italic">Italic</span></span><br>
<span class="t-normal">Normal • <span class="t-italic">Italic</span></span><br>
<span class="t-lighter">Lighter • <span class="t-italic">Italic</span></span>

* `t-bolder` (and alias `t-heavy`)

    <span class="t-bolder">Bolder text (default 900)</span>

* `t-bold` (and alias `t-strong`)

    <span class="t-bold">Bold text (default 700)</span> (same as `<b>` and `<strong>`)

* `t-semibold`

    <span class="t-semibold">Semibold text (default 600)</span>

* `t-normal`

    <span class="t-bold t-italic">Returns text to normal weight (default 400) and removes italicization. <span class="t-normal">Perhaps you may find this useful</span> in some circumstances.</span>

* `t-lighter` (and alias `t-thin`)

    <span class="t-lighter">Lighter text (default 200)</span>

## Italic text

* `t-italic` (and aliases `t-italics`, `t-em`)

    <span class="t-italic">Italic text</span> (same as `<i>` and `<em>`)

## Text underlines

In addition to the `<u>` underline HTML tag, there's also the `t-underline` utility class.

**Note:** These do not have the same style or functionality of the [link](#links) tag, that traditionally has an underline (when used within content prose).

## Text sizes

* `t-sm` (alias: the `<small>` HTML tag)

    Small text for <span class="t-sm">when you need small print</span>

    `t-sm` shrinks text to 0.875em (87.5%) of its inherited size. (So, it is 14px when the default text size is 16px.)

* `t-lg`

    Big text for making <span class="t-lg">something</span> stand out. `t-lg` enlarges text to 1.325em of its inherited size.

    **Note:** `t-lg` will not do what you want as an _inline class_ on headings or [heading utilities]({{ '/docs/5-typographic-utilities/headings' | url }}). If you want a heading to be bigger, then use `t-lg` on a block _wrapper_ around the heading (see [making text bigger]({{ '/docs/5-typographic-utilities/making-text-bigger' | url }}).

* `t-para` (alias: `t-default`)

    Overrides text size, resetting it to the default 1rem (which will be dependant on the font size set by a parent element).

## Links

Links (also called _hyperlinks_) in Codebase are blue with an underscore by default, following the old tradition.

### Links with and without underlines

Links get an underline by default. But there are situations where you may not want that, such as in menus.

For single links:

* `t-underline-none` &mdash; <a class="t-underline-none" href="">a link with no underline</a>
* `t-underline-hover-only` &mdash; <a class="t-underline-hover-only" href="">a link with underline only on hover</a>

Similar to the above, but for groups of links (use one of these on a `<nav>` or `<menu>` wrapper):

* `links-underline-none`
* `links-underline-hover-only`

Example using `links-underline-none`:

<menu class="mb-2 p-cell flex gap-3 bg-gray-100 links-underline-none">
  <menuitem><a href="">Menu item 1</a></menuitem>
  <menuitem><a href="">Menu item 2</a></menuitem>
  <menuitem><a href="">Menu item 3</a></menuitem>
  <menuitem><a href="">Menu item 4</a></menuitem>
</menu>

```html
<menu class="mb-2 p-cell flex gap-3 bg-gray-100 links-underline-none">
  <menuitem><a href="">Menu item 1</a></menuitem>
  <menuitem><a href="">Menu item 2</a></menuitem>
  <menuitem><a href="">Menu item 3</a></menuitem>
  <menuitem><a href="">Menu item 4</a></menuitem>
</menu>
```

(You will also want to add a gap between each menu item, so that people can click indivicual links on touch screens &mdash; as I have done here using Codebase flexbox utility classes.)

Example using `links-underline-hover-only`:

<nav class="mb-2 flex flex-column gap-2 links-underline-hover-only">
  <li><a href="">Nav item 1</a></li>
  <li><a href="">Nav item 2</a></li>
  <li><a href="">Nav item 3</a></li>
  <li><a href="">Nav item 4</a></li>
</nav>

```html
<nav class="mb-2 flex flex-column gap-2 links-underline-hover-only">
  <li><a href="">Nav item 1</a></li>
  <li><a href="">Nav item 2</a></li>
  <li><a href="">Nav item 3</a></li>
  <li><a href="">Nav item 4</a></li>
</nav>
```

But then, if it is not obvious, you may still need to indicate to users who hover over the link that the link is “working”. This can be done in various ways: adding back the underline, or adding a background colour on hover. See Codebase simple [menu components]({{ '/docs/6-simple-components/menus-and-menubars' | url }}).

What if you have a whole panel that needs to be a

## Other text utilities

* `t-nowrap`

    For when you _don’t_ want a portion of text to wrap on to a newline (not demonstrated here).
* `t-strike`

    <span class="t-strike">Strikethrough text</span>

* `t-muted`

    <span class="t-muted">Muted text (opacity set to 0.4)</span>

* `t-uppercase`

    <span class="t-uppercase">Text in uppercase</span> (all capitals)

* `t-loose`

    <span class="t-loose">For when you need some text to have extra letter-spacing</span>

* `t-tight`

    <span class="t-tight">For when you need some text to have less letter-spacing</span>

You may want looser text on buttons (especially CTAs):

<a class="btn btn-success btn-lg" href="#">Buy now</a>

<a class="btn btn-success btn-lg t-loose" href="#">Buy now</a> with `t-loose`

You may want tighter text in headings:

<div class="overflow-x mb-2">
<table class="table">
<thead>
<tr>
<th>with <code>t-tight</code></th>
<th>Default spacing</th>
<th>with <code>t-loose</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p class="h1 t-tight">Heading 1</p>
<p class="h2 t-tight">Heading 2</p>
<p class="h3 t-tight">Heading 3</p>
<p class="h4 t-tight">Heading 4</p>
<p class="h5 t-tight">Heading 5</p>
<p class="h6 t-tight">Heading 6</p>
<p class="t-tight">Lorem ipsum dolor sit amet...</p>
</td>
<td>
<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>
<p>Lorem ipsum dolor sit amet...</p>
</td>
<td>
<p class="h1 t-loose">Heading 1</p>
<p class="h2 t-loose">Heading 2</p>
<p class="h3 t-loose">Heading 3</p>
<p class="h4 t-loose">Heading 4</p>
<p class="h5 t-loose">Heading 5</p>
<p class="h6 t-loose">Heading 6</p>
<p class="t-loose">Lorem ipsum dolor sit amet...</p>
</td>
</tr>
</tbody>
</table>
</div>

Letter-spacing is controlled by variables `--t-loose` and `--t-tight`.
