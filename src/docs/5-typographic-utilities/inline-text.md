---
title: "Inline text"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/text-alignment"
nextPage: "/docs/5-typographic-utilities/lists"
prevLink: "Text alignment"
nextLink: "Lists"
---

Codebase has several simple text utility classes.

See also [font-stacks]({{ '/docs/5-typographic-utilities/font-stacks' | url }}).

<span class="t-bolder">Bolder • <span class="t-italic">Italic</span></span><br>
<span class="t-bold">Bold • <span class="t-italic">Italic</span></span><br>
<span class="t-semibold">Semibold • <span class="t-italic">Italic</span></span><br>
<span class="t-normal">Normal • <span class="t-italic">Italic</span></span><br>
<span class="t-lighter">Lighter • <span class="t-italic">Italic</span></span>

**Note:** Your visitor needs to have lighter (thin), semi-bold and bolder (heavy) fonts in your website’s typeface installed on their device, or else they may not see these weights.

## Text weights

* `t-bolder` (and alias `t-heavy`)

    <span class="t-bolder">Bolder text (default 900)</span>

* `t-bold` (and alias `t-strong`)

    <span class="t-bold">Bold text (default 700)</span> (same as `<b>` and `<strong>`)

* `t-semibold`

    <span class="t-semibold">Semibold text (default 600)</span>

* `t-normal`

    <span class="t-bold t-italic">Returns text to normal weight (default 400) and removes italicization. <span class="t-normal">Perhaps you may find this useful</span> in some circumstances.</span>

* `t-lighter`

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

    **Note:** `t-lg` doesn’t work as an _inline class_ on [headings]({{ '/docs/2-classless-basics/headings' | url }}) or [heading utilities]({{ '/docs/6-typographic-utilities/headings' | url }}). If you want a heading to be bigger, then use `t-lg` on a block _wrapper_ around the heading. See [large display text]({{ '/docs/6-typographic-utilities/large-display-text' | url }}).

## Links

Links (also called _hyperlinks_) in Codebase are blue with an underscore by default, following the old tradition.

**What if you wanted a whole panel, [card]({{ '/codebase-5/docs/6-simple-components/cards' | url }}), or [hero]({{ '/codebase-5/docs/6-simple-components/heros' | url }}) block to operate as a link?** You can simply use the link instead of the outer `<div>`, and give it a Codebase `block` class to make it a block instead of an inline element: `<a class="block" href="">...</a>`.

**Then, what if you only wanted some of the text in the panel to be styled as the link, but not some accompanying text?** Codebase has you covered. Since v.5.0.8, you can put class `t-typerlink-inside` on the wrapper `<a>` tag and pair this with `t-link` on the text that you want to be the inner link (this would be the panel title).

`t-link-inside` simply removes the traditional link underscore. And `t-link` reinstates the underscore, on the element to which is applied. Everything else is handled either by the wrapper `<a>` tag, and by Codebase decoration classes.

**Note:** `t-link` doesn’t actually make an element operate like an `<a>` tag.

<a class="block container-xs mb-3 b-thin p-2 t-link-inside" href="#/">
    <p class="h4 t-link">Card title</p>
    <p class="t-gray-900 mb-0">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="block container-xs mb-3 b-thin p-2 t-link-inside" href="#/">
    <p class="h4 t-link">Card title</p>
    <p class="t-gray-900 mb-0">Lorem ipsim dolor sit amet ...</p>
</a>
```

Above, that color change on hover isn’t very obvious. But you can add some extras, to suit your own design. For example:

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
    <p class="t-gray-900 mb-0">Lorem ipsim dolor sit amet ...</p>
</a>

The box shadow on hover above is supplied by a Codebase [box shadow]({{ '/codebase-5/docs/4-decoration-utilities/box-shadows' | url }}).

```html
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
    <p class="t-gray-900 mb-0">Lorem ipsim dolor sit amet ...</p>
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

* `hover:t-underscore` (alias `hover:t-underline`)

    Adds underscore (underline) on hover

* `t-uppercase`

    <span class="t-uppercase">Text in uppercase</span> (all capitals)


* `t-loose`

    For when you need some text to have <span class="t-loose">a little extra letter-spacing</span>

* `t-tight`

    For when you need some text to have <span class="t-tight">a little less letter-spacing</span>

* `t-nowrap`

    For when you don’t want a portion of text to wrap on to a newline (not demonstrated here).