---
title: "Animations"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/slideshows"
prevLink: "Slideshows"
---

Together, Codebase and AlpineJS can handle many basic animations – several examples are below.

Codebase animation components are about adding and removing Codebase CSS utility classes in response to a trigger event (click, hover, or scroll). Utilities such as `translate-*` (i.e. move), `rotate-*`, `scale-*`, and `opacity-*` (for fading) are often used for CSS based animations. However, numeric utilities such as for dimensions, margins, paddings, and colors can also be animated.

_Codebase is not a full animation library, and neither is Alpine._ If you want to develop a richly animated interactive website, there are several frameworks and platforms out there that you can use. Some require payment, while some are free. Here are a few examples:

* [GreenSock Animation Platform (GSAP)](https://greensock.com/) – a JavaScript toolset for SVG, WebGL, and Canvas animations
* [Anime.js](https://animejs.com/) – a JavaScript animation engine
* [Animate on Scroll (AOS)](https://michalsnik.github.io/aos/) – a JavaScript/CSS library for triggering animations when you scroll down to them

Also, “no code” website builders (such as [Webflow](https://webflow.com/) and [Wix](https://www.wix.com/)) have some element animation effects built in.

Codebase animations can be used in components such as [collapse]({{ '/docs/7-alpinejs-components/collapse' | url }}), [dropdowns]({{ '/docs/7-alpinejs-components/dropdowns' | url }}), [modals]({{ '/docs/7-alpinejs-components/modals' | url }}), and [offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }}) panels. They can also be used for adding visual interest to block elements on a homepage or landing page.

## Animation trigger events

Here are two options:

1. **On click** (or on tap, for touch-screen devices). “On click” triggered animations can be tapped repeatedly and they will be triggered every time.
2. **On scroll into view** (using the [Alpine Intersect plugin](https://alpinejs.dev/plugins/intersect)). “On scroll” animations can be set to trigger once, when the visitor scrolls down to them the first time, or they can be set to trigger repeatedly whenever the visitor scrolls down or up through them. I.e. When the visitor scrolls beyond this animation, it can be reset so that it is ready to be triggered again.

### On click (on tap)

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-1"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-1"
    class="w-50% p-2 bg-green-200 transition-transform-600ms"
    :class="activated && 'translate-right-100%'"
  >
    <strong>Click me, and I will move.</strong> Click me again, and I will return to my original position.
  </div>
</div>
</div>

```html
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-1"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-1"
    class="w-50% p-2 bg-green-200 transition-transform-600ms"
    :class="activated && 'translate-right-100%'"
  >
    <strong>Click me, and I will move.</strong> Click me again, and I will return to my original position.
  </div>
</div>
```

### On hover (a.k.a. mouseover) is not recommended for animations

While it is also possible to animate **on hover** (a.k.a. on mouseover), it is not recommended in most situations because you also have to support touch screens. “On hover” behaves as a _tap plus focus_ for touch screen devices, and tapping outside the “on hover” element will leave the focus on that element. This means that you would have to tap away a second time (or double tap) in order to remove the focus. But that will confuse your visitors. 

Instead, use “on click” because it is more intuitive. It behaves as your visitor would expect it to – and provides essentially the same experience whether using a touch screen or a pointing device (mouse or other).

(Hovever, “on hover” can sometimes be used in situations where there is little or no animations, and where leaving the focus behind may not matter so much – e.g. on dropdown menus and tooltips.)

### On scroll into view

<div class="mb-3">
<div
  x-data="{ activated: false }"
  x-intersect.enter="activated = true"
>
  <div
    id="panel-3"
    class="w-50% p-2 bg-green-200 transition-transform-600ms"
    x-show="activated"
    x-transition:enter="translate-right-100%"
  >
    When you scroll down to me, I move.
  </div>
</div>
</div>

_The scroll animation above occurs once._ To see it happen again, refresh your browser.

```html
<div
  x-data="{ activated: false }"
  x-intersect:enter="activated = true"
>
  <div
    id="panel-3"
    class="w-50% p-2 bg-green-200 transition-transform-600ms"
    x-show="activated"
    x-transition:enter="translate-right-100%"
  >
    When you scroll down to me, I move.
  </div>
</div>
```

## Animation timing

Besides the three trigger events documented above, Cosebase also has seversl CSS built-in `transition` timings, that you can use to control faster or slower animations. Animation speeds are controlled in _milliseconds_ (ms).

* Transition all:<br>`transition-all-150ms` / `transition-all-300ms` / `transition-all-600ms` / `transition-all-900ms` / `transition-all-1200ms` / `transition-all-1500ms` / `transition-all-1800ms` / `transition-all-2400ms`
* Transition CSS transforms only:<br>`transition-transform-150ms` / `transition-transform-300ms` / `transition-transform-600ms` / `transition-transform-900ms` / `transition-transform-1200ms` / `transition-transform-1500ms` / `transition-transform-1800ms` / `transition-transform-2400ms`

You’ve seen `transition-transform-600ms` being used in the demo examples above.

## Animation utilities

### Translate (move)

* `translate-up-100%` / `translate-right-100%` / `translate-down-100%` / `translate-left-100%` / `translate-0`

Example: `translate-right-100%` (with timing `transition-transform-600ms`)

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-3"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-3"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
    :class="activated && 'translate-right-100%'"
  >
    Click me
  </div>
</div>
</div>

A translation animation is also used in the [offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }}) component. The `offcanvas-panel` classes merely position the panel in is expanded (revealed) location. Use one of the directional translation classes to start it hidden off canvas, and then use `translate-0` to reveal it (`translate-0` works for both the x and y axis) .

### Grow and shrink

Scales both in the X and Y axis, retaining the elements proportions.

* `scale-0` / `scale-25%` / `scale-50%` / `scale-75%` / `scale-100%` / `scale-125%` / `scale-150%` / `scale-175%` / `scale-200%` 

`scale-*` utilities scale from the center-middle of an element. If you want to grow from or shrink to an edge or corner, add in a `transform-origin-*` utility.

Example: `scale-150%`

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-4"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-4"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
    :class="activated && 'scale-150%'"
  >
    Click me
  </div>
</div>
</div>

A scale animation has also been added to a [dropdown]({{ '/docs/7-alpinejs-components/dropdowns/#adding-a-panel-reveal-animation' | url }}) demo and a [modal]({{ '/docs/7-alpinejs-components/modals/#adding-a-panel-reveal-animation' | url }}) demo.

### Rotate

* `rotate-90` / `rotate-minus90` / `rotate-180` / `rotate-minus180` / `rotate-270`

`rotate-*` utilities pivot aroung the center-middle of an element. If you want to pivot around a corner or center/middle of an edge, add in a `transform-origin-*` utility.

Example: `rotate-180`

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-4"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-4"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
    :class="activated && 'rotate-180'"
  >
    Click me
  </div>
</div>
</div>

A rotation is also used in a [collapse]({{ '/docs/7-alpinejs-components/collapse/#adding-an-indicator-rotation-animation' | url }}) demo example for rotating a caret icon. A similar example us used in the sidebar menu of these docs.

### Transform origin

The transform origin of elements defalts to its center-middle. You can change that by adding one of the following `transform-origin-*` utilities:

* (Center or middle of) edges:<br>`transform-origin-top` / `transform-origin-right` / `transform-origin-bottom`/ `transform-origin-left`/ 
* Corners:<br>`transform-origin-top-right`/ `transform-origin-bottom-right` / `transform-origin-bottom-left` . `transform-origin-top-left`

Example: `transform-origin-top` has been used on the [dropdown]({{ '/docs/7-alpinejs-components/dropdowns/#adding-a-panel-reveal-animation' | url }}) animation demo.

### Opacity

* `opacity-0` / `opacity-25%` / `opacity-50%` / `opacity-75%` / `opacity-100%`

Example fading to `opacity-50%`:

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-4"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-4"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-all-600ms"
    :class="activated && 'opacity-50%'"
  >
    Click me
  </div>
</div>
</div>

#### Notes on animating opacity

1. Unlike the other examples above, in CSS `opacity` is not a CSS transform. Therefore you need to use `transition-all-*` (not `transition-transform-*`).
2. There is also another way to animate opacity: you can pair the opacity utilities with `fade-in` or `fade-out` (see [fade-in/out](#fade-in%2Fout) below).
3. AlpineJS has its own (JavaScript powered) directive modifier,[opacity on x-transition](https://alpinejs.dev/directives/transition#customizing-opacity), that you can use on an `x-show`.

### Flip

`flip-*` utilities can be used to “turn over” cards or other block element, to show their back face:

* `flip-x` – flips the element vertically (the pivot is on the x-axis)
* `flip-y` - flips the element horizontally (the pivot is on the y-axis)

Ordinarily, the back side of an element is a “mirror image” of the front face. If that’s not what you want a visitor to see, add the CSS utility `backface-hidden`. Then the back face will simply be transparent (so, the wrapping element background or page background will be seen instead).

In some circumatances, you may also need to add the CSS utility `preserve-3d` to the wrapper of the flipped element.

Example: `flip-y`

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-4"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-4"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
    :class="activated && 'flip-y'"
  >
    Click me
  </div>
</div>
</div>

Example: `flip-y backface-hidden`

<div class="mb-3">
<div x-data="{ activated: false }">
  <div
    @click="activated = !activated"
    aria-controls="panel-4"
    :aria-expanded="activated"
    @keyup.escape="activated = false"
    id="panel-4"
    class="w-50% p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
    :class="activated && 'flip-y backface-hidden'"
  >
    Click me
  </div>
</div>
</div>

You can’t click a flipped `backface-hidden` element. So, to make the example above reappear, you will need to refresh your browser.

### Fade-in/out and scale-in/out

In addition to the above, a few simple [keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) animations have been provied. These are not for use in AlpineJS `x-transition` but they can be used in `x-bind:class` that is triggered by a change of state. These all have built-in `animation` timings of 300ms.

* `fade-in` – goes from 0 to 1 (100%) opacity (transparent to fully visible)
* `fade-out` – goes from 1 to 0 opacity (fully viible to transparent).
* `scale-in` – goes from 75% to 100% transform scale
* `scale-out` – goes from 100% to 75% transform scale 

These can be useful for revealing and hiding panels.


#### Fade-in/out

Example fading. Here a ternary class toggler is required in the Alpine component:

```html
:class="activated ? 'fade-out opacity-0' : 'fade-in opacity-100%'"
```

<div class="mb-3">
<div x-data="{ activated: false }">
  <div class="w-50% b-dashed b-black">
    <div
      @click="activated = !activated"
      aria-controls="panel-4"
      :aria-expanded="activated"
      @keyup.escape="activated = false"
      id="panel-4"
      class="p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
      :class="activated ? 'fade-out opacity-0' : 'fade-in opacity-100%'"
    >
      Click me
    </div>
  </div>
</div>
</div>

The The faded out (invisible) element is still present, therefore it can be clicked. So, click inside the dashed area above and the invisible element will fade in again.

#### Scale-in/out

Example fading. Here a ternary class toggler is required in the Alpine component:

```html
:class="activated ? 'scale-out scale-75%' : 'scale-in scale-100%'"
```

<div class="mb-3">
<div x-data="{ activated: false }">
  <div class="w-50% b-dashed b-black">
    <div
      @click="activated = !activated"
      aria-controls="panel-4"
      :aria-expanded="activated"
      @keyup.escape="activated = false"
      id="panel-4"
      class="p-2 t-bold t-white bg-blue-600 transition-transform-600ms"
      :class="activated ? 'scale-out scale-75%' : 'scale-in scale-100%'"
    >
      Click me
    </div>
  </div>
</div>
</div>

`scale-in` has also been used on the example [embedded popout modal]({{ '/docs/7-alpinejs-components/modals/#embedded-popout-modals' | url }}).

### Other CSS utilities that can be animated

You can animate any style that has a numeric setting. So, you can animate using Codebase  utility classes for dimensions, spacing (margins, paddings), border (thickness), and colors.

**Note:** These other syles are CSS transforms. Therefore you need to use `transition-all-*` (not `transition-transform-*`).

Example color animation:

```html
:class="activated ? 't-black bg-white' : 't-white bg-black'"
```

<div class="mb-3">
<div x-data="{ activated: false }">
  <div class="w-50% b-dashed b-black">
    <div
      @click="activated = !activated"
      aria-controls="panel-4"
      :aria-expanded="activated"
      @keyup.escape="activated = false"
      id="panel-4"
      class="p-2 t-bold t-white transition-all-600ms"
      :class="activated ? 't-black bg-white' : 't-white bg-black'"
    >
      Click me
    </div>
  </div>
</div>
</div>

Example width animation:

```html
:class="activated ? 'w-100%' : 'w-25%'"
```

<div class="mb-3">
<div x-data="{ activated: false }">
  <div class="b-dashed b-black">
    <div
      @click="activated = !activated"
      aria-controls="panel-4"
      :aria-expanded="activated"
      @keyup.escape="activated = false"
      id="panel-4"
      class="p-2 t-bold t-white bg-blue-600 transition-all-600ms"
      :class="activated ? 'w-100%' : 'w-25%'"
    >
      Click me
    </div>
  </div>
</div>
</div>

## Examples

### Featured image and text card

With two components (one in each grid cell) that are triggered to `true` when they enter the viewport on scroll, using `x-intersect`. Refresh your browser to see it happen again.

<div class="my-6 rounded p-2 bg-green-100">
  <div
    class="grid gap md:equal-2-cols"
  >
    <div
      class="xs:col-1 xs:row-1"
      x-data="{ inViewport: false }"
      x-intersect:enter="inViewport = true"
    >
      <div
        class="h2 t-bold transition-all-300ms"
        x-show="inViewport"
        x-transition:enter-start="translate-bottom-100%"
        x-transition:enter-end="translate-0"
        x-transition:leave-start="translate-0"
        x-transition:leave-end="translate-bottom-100%"
      >
        Featured Title
      </div>
      <p
        class="transition-all-600ms"
        x-show="inViewport"
        x-transition:enter-start="translate-bottom-100%"
        x-transition:enter-end="translate-0"
        x-transition:leave-start="translate-0"
        x-transition:leave-end="translate-bottom-100%"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo facere velit tempora fugiat nulla blanditiis.
      </p>
      <p
        class="transition-all-900ms"
          x-show="inViewport"
          x-transition:enter-start="translate-bottom-100%"
          x-transition:enter-end="translate-0"
          x-transition:leave-start="translate-0"
          x-transition:leave-end="translate-bottom-100%"
      >
        <a
          class="btn b-black t-black hover:t-white hover:bg-black"
          href="/#"
        >
          Find out more &rarr;
        </a>
      </p>
    </div>
        <div
      class="xs:col-2 xs:row-1"
      x-data="{ inViewport: false }"
      x-intersect:enter="inViewport = true"
    >
      <div
        class="flip"
      >
        <div
          class="relative transition-all-1500ms preserve-3d"
          :class="inViewport && 'flip-y'"
        >
          <div class="flip-y backface-hidden">
            <img src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="1280" height="834" loading="lazy" alt="Photo by Erik Karits from Pexels">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Team reveal

Click/tap to activate. (This could just as easily have been set to activate on scroll, using `x-intersect`.)

<div class="mb-2 b-thin rounded p-2" x-data="{ activated: false }">
  <p>
    <button
      class="btn-primary"
      @click="activated = true"
      aria-controls="panel-5"
      :aria-expanded="activated"
    >Activate</button>
    <button
      class="btn-secondary"
      @click="activated = false"
      aria-controls="panel-5"
      :aria-expanded="activated"
      @keyup.escape="activated = true"
    >Reset</button>
  </p>
  <div id="panel-5">
    <div
      class="h2 t-center t-heavy transition-transform-600ms"
      x-show="activated"
      x-transition:enter-start="opacity-0 translate-bottom-100%"
      x-transition:enter-end="opacity-100% translate-0"
    >Meet the team</div>
    <div class="grid gap equal-2-cols sm:equal-4-cols">
      <div>
        <div
          class="transition-all-300ms"
          x-show="activated"
          x-transition:enter-start="opacity-0 pt-4"
          x-transition:enter-end="opacity-100% pt-0"
        >
          <div class="square mx-auto mb-2 rounded-full bg-orange-300">&nbsp;</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi.</div>
        </div>
      </div>
      <div>
        <div
          class="transition-all-600ms"
          x-show="activated"
          x-transition:enter-start="opacity-0 pt-4"
          x-transition:enter-end="opacity-100% pt-0"
        >
          <div class="square mx-auto mb-2 rounded-full bg-orange-300">&nbsp;</div>
          <div>In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque.</div>
        </div>
      </div>
      <div>
        <div
          class="transition-all-900ms"
          x-show="activated"
          x-transition:enter-start="opacity-0 pt-4"
          x-transition:enter-end="opacity-100% pt-0"
        >
          <div class="square mx-auto mb-2 rounded-full bg-orange-300">&nbsp;</div>
          <div>Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque.</div>
        </div>
      </div>
      <div>
        <div
          class="transition-all-1200ms"
          x-show="activated"
          x-transition:enter-start="opacity-0 pt-4"
          x-transition:enter-end="opacity-100% pt-0"
        >
          <div class="square mx-auto mb-2 rounded-full bg-orange-300">&nbsp;</div>
          <div>In ornare lectus dui, tempor ultricies felis commodo nec. Praesent placerat venenatis nibh vel consequat.</div>
        </div>
      </div>
    </div>
  </div>
</div>

### Sliding panels

Two panels that fade in and slide together from right and left, on scroll. 

For this example, these will be triggered every time the panels are scrolled into the viewport, whether you scroll down or up.

<div class="my-3">
  <div class="grid gap xs:equal-2-cols">
    <div
      x-data="{ inViewport: false }"
      x-intersect:enter="inViewport = true"
      x-intersect:leave="inViewport = false"
    >
      <div
        class="transition-all-900ms"
        x-show="inViewport"
        x-transition:enter-start="opacity-0 translate-left-100%"
        x-transition:enter-end="opacity-100% translate-0"
      >
        <div class="aspect-ratio-4x3 bg-orange-500"></div>
      </div>
    </div>
    <div
      x-data="{ inViewport: false }"
      x-intersect:enter="inViewport = true"
      x-intersect:leave="inViewport = false"
    >
      <div
        class="transition-all-900ms"
        x-show="inViewport"
        x-transition:enter-start="opacity-0 translate-right-100%"
        x-transition:enter-end="opacity-100% translate-0"
      >
        <div class="aspect-ratio-4x3 bg-orange-500"></div>
      </div>
    </div>
  </div>
</div>