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

**Note:** Browsers that do not support background-blur filters will simply get a partially transparent tint instead.

## Glass over a dark background image

Dark glass `bg-black-glass-*` utilities over a dark background image:

<div class="mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <img class="box img-cover" src="{{ '/img/pexels-pixabay-372470.jpg' | url }}" width="1280" height="832" loading="lazy" alt="Photo by Pixabay from Pexels">
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

Light glass `bg-white-glass-*` utilities over a dark background image:

<div class="mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <img class="box img-cover" src="{{ '/img/pexels-pixabay-372470.jpg' | url }}" width="1280" height="832" loading="lazy" alt="Photo by Pixabay from Pexels">
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

_Photo by [Pixabay](https://www.pexels.com/photo/architecture-bay-boats-bridge-372470/) from [Pexels](https://www.pexels.com)._

## Glass over a light background image

Dark glass `glass-black-*` utilities over a dark background image:

<div class="mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <img class="box img-cover opacity-50%" src="{{ '/img/pexels-ollie-craig-6398582.jpg' | url }}" width="1280" height="960" loading="lazy" alt="Photo by Ollie Craig from Pexels">
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

Light glass `glass-white-*` utilities over a dark background image:

<div class="mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <img class="box img-cover opacity-50%" src="{{ '/img/pexels-ollie-craig-6398582.jpg' | url }}" width="1280" height="960" loading="lazy" alt="Photo by Ollie Craig from Pexels">
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

_Photo by [Ollie Craig](https://www.pexels.com/@olliecraig1?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com)._

## Notes on glass

These glassmorphic overlays utility classes can be used in various ways. There are a couple of examples in the Codebase docs:

1. The Codebase documentation uses `bg-black-glass-5` for its topbar and `bg-white-glass-5` for its sidebar (but you will only see the sidebar glass when it is an offcanvas panel on narrow viewports).
2. Demos of [modal components]({{ '/docs/7-alpinejs-components/modals' | url }}) have a backdrop that uses `bg-black-glass-3`.
3. Demos of [hero components]({{ '/docs/6-simple-components/heros' | url }}) have an overlay that uses `bg-white-glass-3`.

When you have your own background images, you can lay out panels and cards as an overlay (i.e. on a higher z-axis) and give them a glass background appropriate to your design.

## Glass CSS variables

The glass utility classes are comprised of separate CSS variabled for `rgba()` alpha channel (tint) and background blur filter in the `:root{}`:

```scss
--alpha-1: 0.1;
--alpha-2: 0.23;
--alpha-3: 0.35;
--alpha-4: 0.58;
--alpha-5: 0.8;
--glass-1: saturate(1.8) blur(1px);
--glass-2: saturate(1.8) blur(4px);
--glass-3: saturate(1.8) blur(8px);
--glass-4: saturate(1.8) blur(13px);
--glass-5: saturate(1.8) blur(18px);
```

Of course, you can use different colors for greating a tinted glass effect. I don’t know what colors you will choose for your design – therefore Codebase contains only black and white glass background colors, allowing the colors from underlying images to show through.

* You can use one of the backdrop filters (glass blurs) with your own RGBA (or HSLA) color, adding your own alpha channel or one from Codebase (see above).
* Alternatively, you can use the backdrop filters without an alpha channel color (i.e. a transparent background).

**Note:** at the present time (November 2022) you still need to include a `-webkit-backdrop-filter` for Mac/iOS Safari.

Examples:

<div class="mb-3">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <img class="box img-cover" src="/codebase-5/img/pexels-oleg-magni-1837592.jpg" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
    <div class="box p-3 sm:p-6">
      <div class="h-100% grid equal-2-cols">
        <div class="p-1 t-center" style="backdrop-filter: var(--glass-2); -webkit-backdrop-filter: var(--glass-2)"><code>filter only (no tint)</code></div>
        <div class="p-1 t-center" style="background-color: rgba(0,0,153,0.4); backdrop-filter: var(--glass-2); -webkit-backdrop-filter: var(--glass-2)"><code>filter plus blue tint</code></div>
      </div>
    </div>
  </div>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com)._

```css
/* Filter only */
backdrop-filter: var(--glass-2);
-webkit-backdrop-filter: var(--glass-2);

/* Filter plus blue tint */
background-color: rgba(0, 0, 153, 0.4);
backdrop-filter: var(--glass-2);
-webkit-backdrop-filter: var(--glass-2)
```
