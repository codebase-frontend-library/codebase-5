---
title: "Block elements"
layout: layout.njk
prevPage: "/docs/1-getting-started/improvements-since-codebase-4"
nextPage: "/docs/2-classless-basics/inline-elements"
prevLink: "Improvements since Codebase 4"
nextLink: "Inline elements"
---

In HTML, [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) such as paragraphs, headers, and DIVs, occupy 100% of the width of their parent element. Their height depends on how much content they have inside.

Paragraphs inherit the default font size of 100% (usually defaults to 16px), that bump up to 112.5% (18px) for `sm` viewports up.

## Paragraphs

A simple paragraph:

Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.

```html
<p>Lorem ipsum dolor sit amet...</p>
```

Paragraphs have zero top margin while the bottom margin is set as equal to 1rem (=2 element grid units), thereby leaving a little whitespace between paragraphs (and other typographic block elements).

## Headings

Heading font weights have been set to `semibold` (default). You can override this for all headings in the SCSS default variables, or set a different weight yourself on a per-heading or per-word basis, for emphasis.

Heading tags have 2rem top margin while the bottom margin is set as equal to 1rem (**exception:** if the heading is the `:first-child` of any wrapper, then its top margin is removed). Heading variables are set using a Sass map in the default variables file.

(The demo headings below are simulated using `h1` to `h6` [text utility classes]({{ '/docs/5-typographic-utilities/inline-text' | url }}) – so that they are not included in the generated “Contents” list on this page.)

<p class="h1 t-semibold"><code>h1</code> heading</p>
<p class="h2 t-semibold"><code>h2</code> heading</p>
<p class="h3 t-semibold"><code>h3</code> heading</p>
<p class="h4 t-semibold"><code>h4</code> heading</p>
<p class="h5 t-semibold"><code>h5</code> heading</p>
<p class="h6 t-semibold"><code>h6</code> heading</p>

```html
<h2>h2 heading</h2>
<h1>h1 heading</h1>
<h3>h3 heading</h3>
<h4>h4 heading</h4>
<h5>h5 heading</h5>
<h6>h6 heading</h6>
```

Since v.5.3.5 heading sizes have been set as follows:

```scss
:root {
  --h1: 2.25em; // 36px
  --h2: 1.875em; // 30px
  --h3: 1.5em; // 24px
  --h4: 1.25em; // 20px
  --h5: 1.125em; // 18px
  --h6: 1em; // 16px
}
```

## Lists

### Ordered lists (numbered)

<ol>
<li>List item</li>
<li>List item
<ol>
<li>List item</li>
<li>List item
<ol>
<li>List item</li>
</ol>
</li>
</ol>
</li>
<li>List item</li>
</ol>

```html
<ol>
  <li>List item</li>
  <li>List item
    <ol>
      <li>List item</li>
      <li>List item
        <ol>
          <li>List item</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>List item</li>
</ol>
```

See [W3schools](https://www.w3schools.com/html/html_lists_ordered.asp) for more on ordered lists.

### Unordered lists (bullet pointed)

<ul>
<li>List item</li>
<li>List item
<ul>
<li>List item</li>
<li>List item
<ul>
<li>List item</li>
</ul>
</li>
</ul>
</li>
<li>List item</li>
</ul>

```html
<ul>
  <li>List item</li>
  <li>List item
    <ul>
      <li>List item</li>
      <li>List item
        <ul>
          <li>List item</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>List item</li>
</ul>
```

### Definition lists

<dl>
<dt>Title 1</dt>
<dd>Data 1 Lorem ipsum dolor sit amet</dd>
<dt>Title 2</dt>
<dd>Data 2 Lorem ipsum dolor sit amet</dd>
<dt>Title 3</dt>
<dd>Data 3 Lorem ipsum dolor sit amet</dd>
</dl>

```html
<dl>
  <dt>Title 1</dt>
  <dd>Data 1 Lorem ipsum dolor sit amet</dd>
  <dt>Title 2</dt>
  <dd>Data 2 Lorem ipsum dolor sit amet</dd>
  <dt>Title 3</dt>
  <dd>Data 3 Lorem ipsum dolor sit amet</dd>
</dl>
```

## Collapsible details

HTML5 has a simple show/hide component, with functionality provided by the browser (no JavaScript required).

Clicking the (bold) `<summary>` will trigger the functionality of the [HTML details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). When the main content of the `<details>` element is “open” (revealed), the indicator triangle (automatically supplied by the browser) is rotated to point downwards.

<details>
  <summary>Summary/title</summary>
  Here are the details – an extended discussion of what is summarised in the associated <code>&lt;summary&gt;</code> above. Hidden by default, this content becomes visible when the visitor clicks or taps the summary.
</details>

```html
<details>
  <summary>Summary/title</summary>
  Here are the details...
</details>
```

The Codebase basic (classless) styling is only supplying an empty line space (by bottom margin) below the `<details>` tag, bold rendering for the `<summary>` tag, and `cursor: pointer` for when the visitor hovers their mouse (or other pointing device) over the summary.

The HTML5 `<details>` is an interactive element, so it will recieve focus (and a focus ring) when keyboard tabbed onto, and it will open and close in response to `enter` or `space`.

### Starting “details” in the open state

What if you want the a set of `<details>` to start in the “open” state? Simply add the `open` attribute to the (opening) `<details>` tag:

<details open>
  <summary>Summary/title</summary>
  Here are the details (starting in the open state) ...
</details>

```html
<details open>
  <summary>Summary/title</summary>
  Here are the details (starting in the open state) ...
</details>
```

## Horizontal rules

The horizontal rule `<hr>` tag is simply styled with a thin _top border_, so that it looks the same as [border utilities]({{ '/docs/4-decoration-utilities/borders' | url }}) and the [table component]({{ '/docs/6-simple-components/tables' | url }}) cell borders.

Example:

***

(That was it, above.)

```html
<hr>
```

## Block quotes

In Codebase, blockquotes receive some padding right and left – to give the effect of indentation. This side padding is set based upon the viewport width (i.e. it is set in `vw` units in a CSS `clamp()`), so that it is narrower on narrower viewports.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

```html
<blockquote>
  Lorem ipsum dolor sit amet...
</blockquote>
```

## Tables

This is what a classless table looks like in Codebase:

<table>
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
  </tbody>
</table>

```html
<table>
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
  </tbody>
</table>
```

For special table styling, see the Codebase [table component]({{ '/docs/6-simple-components/tables/' | url }}).

## Pre-formatted text

Use `<pre>` tags around any text that you want to remain in the same position in the webpage (as viewed in the browser) as you have put it in the source code. `<pre>` tags prevent browsers doing what they normally do to text – multiple spaces will not be collapsed into one, and long lines will not be wrapped.

<pre>Here is some preformatted text
with some             extra                       spaces
    and line
breaks.</pre>

In other framewords (and in the browser default), `<pre>` is assigned a _monospace_ typeface. Codebase, however, assigned `<pre>` the main text typeface (defaults to a sans-serif font stack.). This is done so that you can easily use `<pre>` for setting up poetry stanzas, song lyrics, etc.

If you want a block of preformatted monospace, combine with the inline `<code>` tag too. Codebase willl render renders `<code>` as a block (with no wrapping, and x-axis overflow, same as `<pre>`), if it is the immediate child of a `<pre>` tag. Example:

<pre><code>10 print "Hello world";
20 goto 10.
Run</code></pre>

In the HTML source code, the example above above looks like this:

```html
<pre><code>10 print "Hello world";
20 goto 10.
Run</code></pre>
```

## DIVs and other HTML5 semantic block emements

All other block elements such as `<div>`,`<section>`, `<article>`, and `<aside>` have no style applied to them by Codebase. They are still just blocks.