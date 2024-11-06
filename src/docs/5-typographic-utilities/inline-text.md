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

## Text sizes

* `t-sm` (alias: the `<small>` HTML tag)

    Small text for <span class="t-sm">when you need small print</span>

    `t-sm` shrinks text to 0.875em (87.5%) of its inherited size. (So, it is 14px when the default text size is 16px.)

* `t-lg`

    Big text for making <span class="t-lg">something</span> stand out. `t-lg` enlarges text by 1.25em (125%) of its inherited size.

    **Note:** `t-lg` doesn’t work as an _inline class_ on headings or [heading utilities]({{ '/docs/5-typographic-utilities/headings' | url }}). If you want a heading to be bigger, then use `t-lg` on a block _wrapper_ around the heading. See also [large display text]({{ '/docs/5-typographic-utilities/large-display-text' | url }}).

* `t-para` (alias: `t-default`)

    Overrides text size, resetting it to the default 1rem (which will be dependant on the font size set by a parent element).

## Links

Links (also called _hyperlinks_) in Codebase are blue with an underscore by default, following the old tradition.

### Links with and without underlines

Links automatically get an underline. But there are cases where you may not want that, such as in menus: use `t-decoration-none`.

But then you will still need to indicate to users who hover over the link that the link is “working”. This can be done in various ways: adding back the underline, or adding a background colour on hover. See Codebase simple [menu components]({{ '/docs/6-simple-components/menus-and-menubars' | url }}).

<ul class="flex flex-column gap-2">
<li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 1</a></li>
<li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 2</a></li>
<li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 3</a></li>
<li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 4</a></li>
</ul>

(You will also want to add a gap between each menu item, so that people can click indivicual links on touch screens &mdash; as I have done here using Codebase flexbox utility classes.)

```html
<ul class="flex flex-column gap-2">
  <li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 1</a></li>
  <li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 2</a></li>
  <li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 3</a></li>
  <li><a class="t-decoration-none hover:t-decoration-underline" href="">Menu item 4</a></li>
</ul>
```

### Whole-panel links

**Q: What if you wanted a whole panel, such as a [card]({{ '/docs/6-simple-components/cards' | url }}), or [hero]({{ '/docs/6-simple-components/heros' | url }}) to operate as a link?**<br>
A: You can simply use the `<a>` link tag instead of the outer `<div>`, and give it a Codebase `block` class to make it a block instead of an inline element:

```html
<a class="block" href="">
    ...
</a>
```

**Q: But what if you wanted only _some_ of the text in the panel to be styled as the link, but not other accompanying text?**<br>
A: Codebase has you covered. Since v.5.0.8, you can put class `t-link-inside` on the wrapper `<a>` tag, and `t-link` on the inner text that you want to be the pseudo link (e.g. on the panel title text).

* The `t-link-inside` class (must be applied to the `<a>` wrapper) simply removes the traditional link underscore, and resets its link text color to inherit the color of the surrounding/ “parent” panel text. (The surrounding text usually has the default text color, almost black.)

* And the `t-link` class _makes its element only look like a link_ by adding back the underscore, link color, and link hover color.

The link functionality is still handled by the wrapper `<a>` tag. `t-link` doesn’t actually make an element _operate_ like a link.

Example:

<a class="block mb-2 b-thin p-2 t-link-inside" href="#/">
    <p class="h4 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="block t-link-inside" href="">
    <p class="h4 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>
```

You need to supply a text color for the accompanying text, else it will inherit the link color (default is hyperlink blue).

You can even combine `t-link-inside` with `t-decoration-none`...

<a class="block mb-2 b-thin p-2 hover:bs-3 t-link-inside t-decoration-none" href="#/">
    <p class="h4 mb-1 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

...and with `t-decoration-none hover:t-decoration-underline`:

<a class="block mb-2 b-thin p-2 hover:bs-3 t-link-inside t-decoration-none hover:t-decoration-underline" href="#/">
    <p class="h4 mb-1 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

The box shadow on hover in the examples above is supplied by a Codebase [box shadow]({{ '/docs/4-decoration-utilities/box-shadows' | url }}).

```html
<!-- t-decoration-none -->
<a class="block mb-2 b-thin p-2 hover:bs-3 t-link-inside t-decoration-none" href="#/">
    <p class="h4 mb-1 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

<!-- t-decoration-none AND hover:t-decoration-underline -->
<a class="block mb-2 b-thin p-2 hover:bs-3 t-link-inside t-decoration-none hover:t-decoration-underline" href="#/">
    <p class="h4 mb-1 t-link">Card title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>
```

A third example: adding in different text colors in base and hover states will require you adding your own CSS (example showing how you can utilize Codebase variables):

<style>
    .t-link-inside.t-green-500 {
        color: unset;
    }
    .t-link-inside.t-green-500 .t-link {
        color: var(--green-500);
    }

    .t-link-inside.hover\:t-green-600:hover .t-link {
        color: var(--green-600)
    }
</style>

<a class="block mb-2 b-thin p-2 t-link-inside t-decoration-none hover:t-decoration-underline t-green-500 hover:t-green-600" href="#/">
    <p class="h4 mb-1 t-bold t-link">Card title</p>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<style>
    .t-link-inside.t-green-500 {
        color: unset;
    }
    .t-link-inside.t-green-500 .t-link {
        color: var(--green-500);
    }

    .t-link-inside.hover\:t-green-600:hover .t-link {
        color: var(--green-600)
    }
</style>

<a class="block mb-2 b-thin p-2 t-link-inside t-decoration-none hover:t-decoration-underline t-green-500 hover:t-green-600 " href="#/">
    <p class="h4 mb-1 t-bold t-link">Card title</p>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>
```

## Other text utilities

* `t-strike`

    <span class="t-strike">Strikethrough text</span>

* `t-muted`

    <span class="t-muted">Muted text (opacity set to 0.4)</span>

* `t-uppercase`

    <span class="t-uppercase">Text in uppercase</span> (all capitals)

* `t-loose`

    For when you need some text to have <span class="t-loose">extra letter-spacing</span>

* `t-tight`

    For when you need some text to have <span class="t-tight">less letter-spacing</span>

* `t-nowrap`

    For when you _don’t_ want a portion of text to wrap on to a newline (not demonstrated here).