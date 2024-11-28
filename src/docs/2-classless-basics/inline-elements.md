---
title: "Inline elements"
layout: layout.njk
prevPage: "/docs/2-classless-basics/block-elements"
nextPage: "/docs/2-classless-basics/form-elements"
prevLink: "Block elements"
nextLink: "Form elements"
---

In HTML, [inline-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) such as tags for bold text, italics, and hyperlinks, span only the width of their content, and they can wrap on to new lines.

## List of inline elements

<div class="xs:flex gap-3 flex-grow-auto mb-2">
  <div>
    <i>italics</i><br><em>emphasis</em><br>
    <b>bold</b><br><strong>strong</strong><br>
    <u>underlined</u><br>
    <cite>citation</cite><br>
    <del>deleted text (strikethough)</del><br>
    <dfn title="title">definition</dfn><br>
    <abbr title="This stands for something">abbreviation</abbr><br>
    <ins>inserted text (underlined)</ins><br>
    <kbd>user input</kbd><br>
    <samp>sample output</samp><br>
  </div>
  <div>
    <mark>marked (highlighted) text</mark><br>
    <small>small</small><br>
    Superscript: e.g. E = mc<sup>2</sup><br>
    Subscript: e.g. H<sub>2</sub>O<br>
    <var>variable or placeholder text</var><br>
    ndash &ndash;<br>
    mdash &mdash;<br>
    <a href="#/">hyperlink</a><br>
    <address>Address</address><br>
    <code>inline code</code><br>
  </div>
</div>

```html
<i>italics</i>
<em>emphasis</em>
<b>bold</b>
<strong>strong</strong>
<cite>citation</cite>
<del>deleted text (strikethough)</del>
<dfn title="title">definition</dfn>
<abbr title="This stands for something">abbreviation</abbr>
<ins>inserted text</ins>
<kbd>user input</kbd>
<samp>sample output</samp>
<mark>marked (highlighted) text</mark>
<small>small</small>
Superscript: e.g. E = mc<sup>2</sup>
Subscript: e.g. H<sub>2</sub>O
<var>variable or placeholder text</var>
ndash &ndash;
mdash &mdash;
<a href="#/">hyperlink</a>
<address>Address</address>
<code>inline code</code>
```

## Buttons are inline elements

Buttons are inline elements. But as buttons are also [form elements]({{ '/docs/2-classless-basics/form-elements/#buttons' | url }}), we will cover them there.
