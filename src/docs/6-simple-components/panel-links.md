---
title: "Panel links"
layout: layout.njk
prevPage: "/docs/6-simple-components/cards"
nextPage: "/docs/7-alpinejs-components/collapse"
prevLink: "Cards"
nextLink: "Collapse"
---

Codebase panel links are modified `<a href="">` (links) where you want _only some_ of the text to behave as the “link text” but then you have other text and/or an icon or image. Examples would be a [media object]({{ '/docs/6-simple-components/media-objects' | url }}), [card]({{ '/docs/6-simple-components/cards' | url }}) or [hero]({{ '/docs/6-simple-components/heros' | url }}) component, where you want the whole thing to behave as a “big button”.

## Simple panel link example

You need two utility classes: `panel-link` and `panel-link-title` &mdash; plus, you will need to set your choice of color on your other text:

<a class="mb-2 b-thin p-2 panel-link" href="#/">
    <p class="h4 panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="panel-link" href="#/">
    <p class="panel-link-title">Panel link title</p>
    <p class="t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>
```

## Notes on panel links

1. `panel-link` provides `display: block` (so that the `<a href="">` behaves as a block and not an inline element), puts out of gear the default link styling, and provides a `:focus-visible` focus ring.
2. `panel-link-title` makes the panel link title _look like_ the link by adding back the link color and underline link hover color, and the link hover color and thicker underline. It will also apply the default `:focus-visible` style to the title. So, panel links get a combination of both [focus state styles]({{ "/docs/1-getting-started/accessibility/#focus-state-styling" | url }}).
3. The link functionality is still handled by the wrapper `<a href="">` tag. `panel-link-tite` doesn’t actually make an element _operate like_ a link.
4. You can change the link text color on the `<a class="panel-link" href="">` as normal. This will change the color or all text in the panel link. But For your _other text_ within the panel link (everything that’s not your `panel-link-title`), you need to specify the color you want it to be &mdash; otherwise it will still be the link color.

<p class="bl-heavy b-blue-200 p-2 bg-blue-100"><strong>Note:</strong> Previously in Codebase, panel link styling has been provided by <code>t-link-inside</code> and <code>t-link</code> utility classes. These are still available (for backwards compatibility) but they will be deprevated.</p>

## Panel links and underline indicators

You can combine `panel-link` with `t-no-underline` (on the link wrapper):

<a class="mb-2 b-thin hover:bs-3 p-2 panel-link t-no-underline" href="#/">
    <p class="h4 mb-1 panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="mb-2 b-thin hover:bs-3 p-2 panel-link t-no-underline" href="#/">
    <p class="h4 mb-1 panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>
```

(Also in the example above, a box shadow on hover has ben supplied by a Codebase [box shadow]({{ '/docs/4-decoration-utilities/box-shadows' | url }}), to indicate that the link still works.)

And you can combine `panel-link` with `t-underline-hover-only`:

<a class="mb-2 b-thin p-2 panel-link t-underline-hover-only" href="#/">
    <p class="h4 mb-1 panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="mb-2 b-thin p-2 panel-link t-underline-hover-only" href="#/">
    <p class="h4 mb-1 panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-900">Lorem ipsim dolor sit amet ...</p>
</a>
```

Another example: adding in different text colors:

<a class="mb-2 b-thin p-2 panel-link t-underline-hover-only t-green-500 hover:t-green-600" href="#/">
    <p class="h4 mb-1 t-bold panel-link-title">Panel link title</p>
    <p class="mb-0 t-gray-500">Lorem ipsim dolor sit amet ...</p>
</a>

```html
<a class="panel-link t-underline-hover-only t-green-500 hover:t-green-600" href="#/">
    <p class="panel-link-title">Panel link title</p>
    <p class="t-gray-500">Lorem ipsim dolor sit amet ...</p>
</a>
```

## Example: media object as a panel link

In this example, the entire media object is a link.

<div class="my-6">
  <a class="panel-link b-thin rounded p-2 flex gap-2 t-underline-hover-only t-gray-900 hover:t-black" href="">
    <span class="square rounded overflow-clip" href="#/">
      <img class="img-cover" src="/codebase-5/img/pexels-pixabay-416179.jpg" width="600" height="600" loading="lazy" alt="placeholder">
    </span>
    <div class="mr-2">
      <div class="h4 mb-0 t-bold panel-link-title">Name or Title</div>
      <p class="mb-0 t-gray-700">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
    </div>
  </a>
</div>
