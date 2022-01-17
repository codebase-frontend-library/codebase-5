---
title: "Display text"
headerTitle: "Large display text"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/lists"
nextPage: "/docs/5-typographic-utilities/long-read-text"
prevLink: "Lists"
nextLink: "Long-read text"
---

The `t-lg` text utility class works in two ways: as an inline utility and as a block utility.

This makes using the `t-lg` wrapper good for “hero” display headings and statements, or for making an important quote or message really stand out.

You can also use `t-lg` on the first paragraph in your page or blog post, to make it an enlarged _lead_ paragraph.

## Notes

1. `t-lg` does not make text _grow_ like `t-long-read` does (see the [long read text]({{ '/docs/5-typographic-utilities/long-read-text' | url }}) utility).
3. `t-lg` simply enlarges text _base size_ (default 1rem = 16px) by 1.25em (125%) on small to medium screens and then 1.5em (150%) on medium screens up, to make the enlargement more obvious when viewed at a distance.
3. This means that `t-lg` _resets_ text to the base size if applied as a block-level utility. Therefore:
    1. `t-lg` is good to use as an inline-level utility _within_ a block.
    2. `t-lg` is good to use block-level on paragraphs `<p>` and other elements such as `<div>`’s where the text is the base size.
    3. `t-lg` will reset heading sizes to become the base text size. So, don’t use `t-lg` directly on headings. Instead, you can use `t-lg` to enlarge headings if you put it on a wrapper around the heading.
4. The breakpoint width for `t-lg` is 1024px (default) while the headings’ downsizing breakpoint is 768px (default). So, wrapping `t-lg` around headings will cause them to have _two_ downsize steps. _This is good_ – this is what you want, for making your impressively large display headings and messages play well on phones in portrait orientation.
5. You can’t combine or nest `t-lg` and `t-long-read` (see [long-read text]({{ '/docs/6-typographic-utilities/long-read-text' | url }})), because `t-long-read` overrules `t-lg`.

## Example

<div class="mb-3 grid gap xs:equal-2-cols">
  <div class="b-thin p-1">
    <div class="h1">H1 title</div>
    <p>Lead paragraph / Lorem ipsum dolor sit amet...</p>
    <p>Normal paragraph / Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="b-thin p-1">
    <div class="t-lg">
      <div class="h1">H1 title</div>
    </div>
    <p class="t-lg">Lead paragraph / Lorem ipsum dolor sit amet...</p>
    <p>Normal paragraph / Lorem ipsum dolor sit amet...</p>
  </div>
</div>

```html
<div class="t-lg">
  <h1>H1 title</h1>
</div>

<p class="t-lg">Lead paragraph / Lorem ipsum dolor sit amet...</p>

<p>Normal paragraph / Lorem ipsum dolor sit amet...</p>
```

What power you have now! When your client or boss says “make that text really _pop_” – this is what they are talking about. 😎

## Don’t overdo it

With great power comes great responsibility! You probably don’t want to do this kind of thing very often:

<div class="t-lg">
  <div class="t-lg">
    <div class="t-lg">
      <div class="h1 t-heavy t-center">
        Use wisely! 😬
      </div>
    </div>
  </div>
</div>

```html
<div class="t-lg">
  <div class="t-lg">
    <div class="t-lg">
      <div class="h1 t-heavy t-center">
        Use wisely! 😬
      </div>
    </div>
  </div>
</div>
```