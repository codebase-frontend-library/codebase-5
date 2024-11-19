---
title: "Overflows"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/Floats"
nextPage: "/docs/3-layout-utilities/invisibility"
prevLink: "Floats"
nextLink: "Invisibility"
---

Sometimes you have more content than can fit in a particular region of your layout.

## X and/or Y overflows

* `overflow-x`
    
Use `overflow-x` when you may need a sideways scroll. (`overflow-x` shows horizontal scroll but not vertical scroll.) E.g. when you have an [oversized table]({{ '/docs/6-simple-components/tables#oversized-tables' | url }}). Or, you may have a simply sideways-scrolling gallery.

* `overflow-y`

Use `overflow-y` when you have content that is too tall for its wrapper. (`overflow-y` shows vertical scroll but not horizontal scroll.) E.g. see [AlpineJS modal with scrollable content]({{ '/docs/7-alpinejs-components/modals/#styling-modal-panels' | url }}).

* `overflow-xy`

Use `overflow-xy` when you have both width and height constraints but you want to show both horizontal and vertical scroll. This utility may be useful if you want to show a large map or [oversized table]({{ '/docs/6-simple-components/tables#oversized-tables' | url }}).

## Overflow clip

* `overflow-clip` (alias `overflow-hidden`)

Since Codebase v.5.3.1, these have the style rule `overflow: clip`, so that they do not create a scrolling context (see [Scroll-Driven Animations: You want overflow: clip, not overflow: hidden](https://www.bram.us/2024/02/14/scroll-driven-animations-you-want-overflow-clip-not-overflow-hidden/) by Bramus Van Damme).

Use `overflow-clip` when you have too much content for displaying in a block element that has a constrained width and/or height, but you don’t want to show either horizontal or vertical scroll.

(the Utility class named `overflow-hidden` is is still present for backwards compatability, but it now uses `overflow: clip` with `overflow: hidden` as a fallback.)
