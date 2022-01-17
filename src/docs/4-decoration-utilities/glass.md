---
title: "Glass"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/colors"
nextPage: "/docs/4-decoration-utilities/spacing"
prevLink: "Colors"
nextLink: "Spacing"
---

Codebase contains some partially transparent white or black backgrounds that have a blur filter applied. These can be used as [glassmorphic](https://hype4.academy/articles/design/glassmorphism-in-user-interfaces) overlays in your web designs.

* `bg-black-glass-1` / `bg-black-glass-2` / `bg-black-glass-3` / `bg-black-glass-4` / `bg-black-glass-5`
* `bg-white-glass-1` / `bg-white-glass-2` / `bg-white-glass-3` / `bg-white-glass-4` / `bg-white-glass-5`

**Note:** Browsers that do not support background-blur filters (Firefox,  older browsers) will simply get a partially transparent tint instead.

## Glass over a dark background image

Dark glass `glass-black-*` utilities over a dark background image:

<div class="mb-3">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <img class="box img-cover" src="{{ '/img/pexels-pixabay-372470.jpg' | url }}" alt="Photo by Pixabay from Pexels">
    <div class="box p-3 sm:p-6">
      <div class="h-100% grid equal-6-cols">
        <div class="p-1 t-center"><code>(None)</code></div>
        <div class="bg-black-glass-1 p-1 t-center"><code>-1</code></div>
        <div class="bg-black-glass-2 p-1 t-center"><code>-2</code></div>
        <div class="bg-black-glass-3 p-1 t-center"><code>-3</code></div>
        <div class="bg-black-glass-4 p-1 t-center"><code>-4</code></div>
        <div class="bg-black-glass-5 p-1 t-center"><code>-5</code></div>
      </div>
    </div>
  </div>
</div>

Light glass `glass-white-*` utilities over a dark background image:

<div class="mb-3">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <img class="box img-cover" src="{{ '/img/pexels-pixabay-372470.jpg' | url }}" alt="Photo by Pixabay from Pexels">
    <div class="box p-3 sm:p-6">
      <div class="h-100% grid equal-6-cols">
        <div class="p-1 t-center"><code>(None)</code></div>
        <div class="bg-white-glass-1 p-1 t-center"><code>-1</code></div>
        <div class="bg-white-glass-2 p-1 t-center"><code>-2</code></div>
        <div class="bg-white-glass-3 p-1 t-center"><code>-3</code></div>
        <div class="bg-white-glass-4 p-1 t-center"><code>-4</code></div>
        <div class="bg-white-glass-5 p-1 t-center"><code>-5</code></div>
      </div>
    </div>
  </div>
</div>

_Photo by [Pixabay](https://www.pexels.com/photo/architecture-bay-boats-bridge-372470/) from [Pexels](https://www.pexels.com)._

## Glass over a light background image

Dark glass `glass-black-*` utilities over a dark background image:

<div class="mb-3">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <img class="box img-cover opacity-50%" src="{{ '/img/pexels-ollie-craig-6398582.jpg' | url }}" alt="Photo by Ollie Craig from Pexels">
    <div class="box p-3 sm:p-6">
      <div class="h-100% grid equal-6-cols">
        <div class="p-1 t-center"><code>(None)</code></div>
        <div class="bg-black-glass-1 p-1 t-center"><code>-1</code></div>
        <div class="bg-black-glass-2 p-1 t-center"><code>-2</code></div>
        <div class="bg-black-glass-3 p-1 t-center"><code>-3</code></div>
        <div class="bg-black-glass-4 p-1 t-center"><code>-4</code></div>
        <div class="bg-black-glass-5 p-1 t-center"><code>-5</code></div>
      </div>
    </div>
  </div>
</div>

Light glass `glass-white-*` utilities over a dark background image:

<div class="mb-3">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <img class="box img-cover opacity-50%" src="{{ '/img/pexels-ollie-craig-6398582.jpg' | url }}" alt="Photo by Ollie Craig from Pexels">
    <div class="box p-3 sm:p-6">
      <div class="h-100% grid equal-6-cols">
        <div class="p-1 t-center"><code>(None)</code></div>
        <div class="bg-white-glass-1 p-1 t-center"><code>-1</code></div>
        <div class="bg-white-glass-2 p-1 t-center"><code>-2</code></div>
        <div class="bg-white-glass-3 p-1 t-center"><code>-3</code></div>
        <div class="bg-white-glass-4 p-1 t-center"><code>-4</code></div>
        <div class="bg-white-glass-5 p-1 t-center"><code>-5</code></div>
      </div>
    </div>
  </div>
</div>

_Photo by [Ollie Craig](https://www.pexels.com/@olliecraig1?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com)._

## Notes on glass

These glassmorphic overlays can be used in various ways. There are a couple of examples in the Codebase docs:

1. The Codebase documentation uses `bg-white-glass-5` for its topbar and sidebar (but you will only see the sidebar glass when it is an offcanvas panel on narrow viewports).
2. Demos of [modal components]({{ '/docs/7-alpinejs-components/modals' | url }}) have a backdrop that uses `bg-black-glass-3`.
3. Demos of [hero components]({{ '/docs/6-simple-components/heros' | url }}) have an overlay that uses `bg-white-glass-3`.

When you have your own background images, you can lay out panels and cards as an overlay (i.e. on a higher z-axis) and give them a glass background appropriate to your design.

Of course, you can use different colors for greating a tinted glass effect. I don’t know what colors you will choose for your design – therefore Codebase contains only black and white glass background colors, allowing the colors from underlying images to show through.