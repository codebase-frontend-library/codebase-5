---
title: "Inline text"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/text-alignment"
nextPage: "/docs/5-typographic-utilities/lists"
prevLink: "Text alignment"
nextLink: "Lists"
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

    `t-sm` shrinks text to 0.75em (75%) of its base size. (So, it is 12px when the default text size is 16px.)

* `t-md` (alias: `t-1em`)

    Overrides text size, resetting it to 1em (which will be dependant on the font size set by a parent element).

* `t-lg`

    Big text for making <span class="t-lg">something</span> stand out.

    `t-lg` enlarges text by 1.25em (125%) on small to medium screens and then 1.5em (150%) on medium screens up, to make the enlargement more obvious when viewed at a distance.

    **Note:** `t-lg` doesn’t work as an _inline class_ on headings or [heading utilities]({{ '/docs/5-typographic-utilities/headings' | url }}). If you want a heading to be bigger, then use `t-lg` on a block _wrapper_ around the heading. See [large display text]({{ '/docs/5-typographic-utilities/large-display-text' | url }}).

## Links

Links (also called _hyperlinks_) in Codebase are blue with an underscore by default, following the old tradition.

**What if you wanted a whole panel, [card]({{ '/docs/6-simple-components/cards' | url }}), or [hero]({{ '/docs/6-simple-components/heros' | url }}) to operate as a link?** You can simply use the `<a>` link tag instead of the outer `<div>`, and give it a Codebase `block` class to make it a block instead of an inline element:

```html
<a class="block" href="">
    ...
</a>
```

**Then, what if you only wanted _some_ of the text in the panel to be styled as the link, but not other accompanying text?** Codebase has you covered. Since v.5.0.8, you can put class `t-link-inside` on the wrapper `<a>` tag, and `t-link` on the inner text that you want to be the pseudo link (e.g. on the panel title text).

* The `t-link-inside` class (must be applied to the `<a>` wrapper) simply removes the traditional link underscore, and resets its link text color to inherit the color of the surrounding/ “parent” panel text. (The surrounding text usually has the default text color, almost black.)

* And the `t-link` class _makes its element only look like a link_ by adding back the underscore, link color, and link hover color. 

The link functionality is still handled by the wrapper `<a>` tag. `t-link` doesn’t actually make an element _operate_ like a link.

Example:

<a class="block mb-3 b-thin p-2 t-link-inside" href="#/">
    <h4 class="t-link">Card title</h4>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="block t-link-inside" href="">
    <h4 class="t-link">Card title</h4>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>
```

Above, that `<h4 class="t-link">` pseudo link’s color change on hover is not very obvious. But you can add some extras, to suit your own design.

Another example:

<style>
    .example .t-link {
        text-decoration: none;
    }
    .example:hover .t-link {
        text-decoration: underline;
    }
</style>

<a class="example block container-xs mb-3 b-thin p-2 hover:bs-3 t-link-inside" href="#/">
    <p class="h4 t-link">Card title</p>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>

The box shadow on hover above is supplied by a Codebase [box shadow]({{ '/docs/4-decoration-utilities/box-shadows' | url }}).

```html
<style>
    .example .t-link {
        text-decoration: none;
    }
    .example:hover .t-link {
        text-decoration: underline;
    }
</style>

<a class="example block b-thin p-2 hover:bs-3 t-link-inside" href="#/">
    <p class="h4 t-link">Card title</p>
    <p class="mb-0">Lorem ipsim dolor sit amet ...</p>
</a>
```

## Other text utilities

* `t-strike`

    <span class="t-strike">Strikethrough text</span>

* `t-muted`

    <span class="t-muted">Muted text (opacity set to 0.4)</span>

* `t-decoration-none`

    Removes underscore (underline)

* `hover:t-decoration-none`

    Removes underscore (underline) on hover

* `hover:t-decoration-underscore` (alias `hover:t-decoration-underline`)

    Adds underscore (underline) on hover

* `t-uppercase`

    <span class="t-uppercase">Text in uppercase</span> (all capitals)


* `t-loose`

    For when you need some text to have <span class="t-loose">extra letter-spacing</span>

* `t-tight`

    For when you need some text to have <span class="t-tight">less letter-spacing</span>

* `t-nowrap`

    For when you _don’t_ want a portion of text to wrap on to a newline (not demonstrated here).