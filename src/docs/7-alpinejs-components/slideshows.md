---
title: "Slideshows"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/tabs"
nextPage: "/docs/7-alpinejs-components/animations"
prevLink: "Tabs"
nextLink: "Animations"
---

Codebase and AlpineJS can be used to create simple slideshows, such as you commonly see on ecommerce product pages.

## Simple example

A Codebase slideshow example with 5 slides:

<div class="my-6">
<div 
  role="region"
  class="flex flex-column flex-column-reverse"
  aria-label="Slideshow example title"
  x-cloak
  x-data="{ currentSlide: 1, slides: [1, 2, 3, 4, 5] }"
>
  <!-- Slide indicator buttons -->
  <ul
    role="region"
    aria-label="Slide indicators"
    class="list-style-type-none mb-0 p-2 flex flex-center"
  >
    <li>
      <button 
        id="slide1"
        x-ref="slide1"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 1 && 'btn-success'"
        aria-label="Slide 1 selector"
        aria-controls="slide1-panel"
        :aria-selected="currentSlide === 1"
        @click="currentSlide = 1; $nextTick(() => $refs.slide1Panel.focus())"
        @keyup.right="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
        :tabindex="currentSlide === 1 ? '0' : '-1'"
      >1</button>
    </li>
    <li>
      <button
        id="slide2"
        x-ref="slide2"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 2 && 'btn-success'"
        aria-label="Slide 2 selector"
        aria-controls="slide2-panel"
        :aria-selected="currentSlide === 2"
        @click="currentSlide = 2; $nextTick(() => $refs.slide2Panel.focus())"
        @keyup.right="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
        @keyup.left="currentSlide = 1; $nextTick(() => $refs.slide1.focus())"
        :tabindex="currentSlide === 2 ? '0' : '-1'"
      >2</button>
    </li>
    <li>
      <button
        id="slide3"
        x-ref="slide3"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 3 && 'btn-success'"
        aria-label="Slide 3 selector"
        aria-controls="slide3-panel"
        :aria-selected="currentSlide === 3"
        @click="currentSlide = 3; $nextTick(() => $refs.slide3Panel.focus())"
        @keyup.right="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
        @keyup.left="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
        :tabindex="currentSlide === 3 ? '0' : '-1'"
      >3</button>
    </li>
    <li>
      <button
        id="slide4"
        x-ref="slide4"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 4 && 'btn-success'"
        aria-label="Slide 3 selector"
        aria-controls="slide4-panel"
        :aria-selected="currentSlide === 4"
        @click="currentSlide = 4; $nextTick(() => $refs.slide4Panel.focus())"
        @keyup.right="currentSlide = 5; $nextTick(() => $refs.slide5.focus())"
        @keyup.left="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
        :tabindex="currentSlide === 4 ? '0' : '-1'"
      >4</button>
    </li>
    <li>
      <button
        role="tab"
        id="slide5"
        x-ref="slide5"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 5 && 'btn-success'"
        aria-controls="slide5-panel"
        :aria-selected="currentSlide === 5"
        @click="currentSlide = 5; $nextTick(() => $refs.slide5Panel.focus())"
        @keyup.left="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
        :tabindex="currentSlide === 5 ? '0' : '-1'"
      >5</button>
  </ul><!-- / Slide indicator buttons -->
  <!-- Slides -->
  <div class="relative"><!-- For positioning the forward/back arrow icons -->
    <div
      role="group"
      id="slide1-panel"
      x-ref="slide1Panel"
      aria-labelledby="slide1"
      x-show="currentSlide === 1"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 1; $nextTick(() => $refs.slide1.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-blue-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-blue-700">Slide 1 of 5</div>
    </div>
    <div
      role="group"
      id="slide2-panel"
      x-ref="slide2Panel"
      aria-labelledby="slide2"
      x-show="currentSlide === 2"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-teal-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-teal-700">Slide 2 of 5</div>
    </div>
    <div
      role="group" 
      id="slide3-panel"
      x-ref="slide3Panel"
      aria-labelledby="slide3"
      x-show="currentSlide === 3"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-green-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-green-700">Slide 3 of 5</div>
    </div>
    <div
      role="group" 
      id="slide4-panel"
      x-ref="slide4Panel"
      aria-labelledby="slide4"
      x-show="currentSlide === 4"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-orange-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-orange-700">Slide 4 of 5</div>
    </div>
    <div
      role="group" 
      id="slide5-panel"
      x-ref="slide5Panel"
      aria-labelledby="slide5"
      x-show="currentSlide === 5"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 5; $nextTick(() => $refs.slide5.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-red-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-red-700">Slide 5 of 5</div>
    </div>
    <!-- Prev/Next arrow buttons (looping) -->
    <div class="box flex flex-space-between flex-middle flex-row-reverse lg:hidden-below">
      <div class="translate-right-100%">
        <button
          class="ml-1 btn-icon rounded-full"
          x-on:click="currentSlide = currentSlide === slides.length ? 1 : currentSlide + 1"
          aria-hidden="true"
        >→</button>
      </div>
      <div class="translate-left-100%">
        <button
          class="mr-1 btn-icon rounded-full"
          x-on:click="currentSlide = currentSlide === 1 ? slides.length : currentSlide - 1"
          aria-hidden="true"
        >←</button>
      </div>
    </div>
  </div>
</div>
</div>

```html
<div 
  role="region"
  class="flex flex-column flex-column-reverse"
  aria-label="Slideshow example title"
  x-cloak
  x-data="{ currentSlide: 1, slides: [1, 2, 3, 4, 5] }"
>
  <!-- Slide indicator buttons -->
  <ul
    role="region"
    aria-label="Slide indicators"
    class="list-style-type-none mb-0 p-2 flex flex-center"
  >
    <li>
      <button 
        id="slide1"
        x-ref="slide1"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 1 && 'btn-success'"
        aria-label="Slide 1 selector"
        aria-controls="slide1-panel"
        :aria-selected="currentSlide === 1"
        @click="currentSlide = 1; $nextTick(() => $refs.slide1Panel.focus())"
        @keyup.right="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
        :tabindex="currentSlide === 1 ? '0' : '-1'"
      >1</button>
    </li>
    <li>
      <button
        id="slide2"
        x-ref="slide2"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 2 && 'btn-success'"
        aria-label="Slide 2 selector"
        aria-controls="slide2-panel"
        :aria-selected="currentSlide === 2"
        @click="currentSlide = 2; $nextTick(() => $refs.slide2Panel.focus())"
        @keyup.right="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
        @keyup.left="currentSlide = 1; $nextTick(() => $refs.slide1.focus())"
        :tabindex="currentSlide === 2 ? '0' : '-1'"
      >2</button>
    </li>
    <li>
      <button
        id="slide3"
        x-ref="slide3"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 3 && 'btn-success'"
        aria-label="Slide 3 selector"
        aria-controls="slide3-panel"
        :aria-selected="currentSlide === 3"
        @click="currentSlide = 3; $nextTick(() => $refs.slide3Panel.focus())"
        @keyup.right="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
        @keyup.left="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
        :tabindex="currentSlide === 3 ? '0' : '-1'"
      >3</button>
    </li>
    <li>
      <button
        id="slide4"
        x-ref="slide4"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 4 && 'btn-success'"
        aria-label="Slide 3 selector"
        aria-controls="slide4-panel"
        :aria-selected="currentSlide === 4"
        @click="currentSlide = 4; $nextTick(() => $refs.slide4Panel.focus())"
        @keyup.right="currentSlide = 5; $nextTick(() => $refs.slide5.focus())"
        @keyup.left="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
        :tabindex="currentSlide === 4 ? '0' : '-1'"
      >4</button>
    </li>
    <li>
      <button
        role="tab"
        id="slide5"
        x-ref="slide5"
        class="mx-1 btn-sm btn-icon rounded-full"
        :class="currentSlide === 5 && 'btn-success'"
        aria-controls="slide5-panel"
        :aria-selected="currentSlide === 5"
        @click="currentSlide = 5; $nextTick(() => $refs.slide5Panel.focus())"
        @keyup.left="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
        :tabindex="currentSlide === 5 ? '0' : '-1'"
      >5</button>
  </ul><!-- / Slide indicator buttons -->
  <!-- Slides -->
  <div class="relative"><!-- For positioning the forward/back arrow icons -->
    <div
      role="group"
      id="slide1-panel"
      x-ref="slide1Panel"
      aria-labelledby="slide1"
      x-show="currentSlide === 1"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 1; $nextTick(() => $refs.slide1.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-blue-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-blue-700">Slide 1 of 5</div>
    </div>
    <div
      role="group"
      id="slide2-panel"
      x-ref="slide2Panel"
      aria-labelledby="slide2"
      x-show="currentSlide === 2"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 2; $nextTick(() => $refs.slide2.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-teal-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-teal-700">Slide 2 of 5</div>
    </div>
    <div
      role="group" 
      id="slide3-panel"
      x-ref="slide3Panel"
      aria-labelledby="slide3"
      x-show="currentSlide === 3"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 3; $nextTick(() => $refs.slide3.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-green-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-green-700">Slide 3 of 5</div>
    </div>
    <div
      role="group" 
      id="slide4-panel"
      x-ref="slide4Panel"
      aria-labelledby="slide4"
      x-show="currentSlide === 4"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 4; $nextTick(() => $refs.slide4.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-orange-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-orange-700">Slide 4 of 5</div>
    </div>
    <div
      role="group" 
      id="slide5-panel"
      x-ref="slide5Panel"
      aria-labelledby="slide5"
      x-show="currentSlide === 5"
      tabindex="0"
      @keyup.shift.tab="currentSlide = 5; $nextTick(() => $refs.slide5.focus())"
    >
      <!-- demo -->
      <div class="flex flex-center flex-middle t-thin bg-red-200 aspect-ratio-21x9"></div>
      <div class="p-block t-center t-white bg-red-700">Slide 5 of 5</div>
    </div>
    <!-- Prev/Next arrow buttons (looping) -->
    <div class="box flex flex-space-between flex-middle flex-row-reverse md:hidden-below">
      <div class="translate-right-100%">
        <button
          class="ml-1 btn-icon rounded-full"
          x-on:click="currentSlide = currentSlide === slides.length ? 1 : currentSlide + 1"
          aria-hidden="true"
        >→</button>
      </div>
      <div class="translate-left-100%">
        <button
          class="mr-1 btn-icon rounded-full"
          x-on:click="currentSlide = currentSlide === 1 ? slides.length : currentSlide - 1"
          aria-hidden="true"
        >←</button>
      </div>
    </div>
  </div>
</div>
```

## Notes on slideshows

1. Codebase slideshows are very similar to [tabs]({{ '/docs/7-alpinejs-components/tabs' | url }}) in operation – and therefore they take inspiration from [W3C](https://www.w3.org/)’s WAI-ARIA design pattern for [tabs with automatic navigation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html). You can click through the tabs, or use arrow keys.
2. There is no special slideshow stying – everything in the example above is styled by Codebase base styles and utility classes.
3. Also included in the example are forward and back arrow buttons for cycling through the slides. (The arrow buttons are displayed and functional for pointing devices only). Thy are visible only on medium viewport widths up (because there is no space for these buttons on smaller screens). These arrow buttons are hidden from screen readers, because irrelevant.
4. The Codebase slideshow this is not an automated, self-advancing “carousel”.

If you require something more powerful than a Codebase carousel, I recommend [Swiper.js](https://swiperjs.com/). Also, [Reveal.js](https://revealjs.com/) is great for creating “PowerPoint”-like (and better) slideshow presentation experiences in the web browser.

## Slideshow operation

By touch, pointing device, mouse, etc.:

* Clicking the indicator buttons (analogous to tab labels) will take the user to its respective slide
* Clicking the forward and back arrow icon buttons will loop forward or back thorugh the slides, in order.

By keyboard, and assistive technology that operates similar to a keyboard:

* The slideshow indicator buttons are the _first_ DOM elements inside the slideshow wrapper, so that keyboard and assisted tech users encounter them first. But they appear to be the last things in the slideshow, below the slides, being positioned there by `flex flex-column flex-column reverse`.
* After `tab`-bing to the first indicator button, the next tab will move the focus on to the first slide. (And, tabbing from any indicator moves the focus on to it’s respective slide.)
* `shift`+`tab` from any focused tab to get back to its indicator button.
* The forward `→` and back `←` buttons are visible for medium viewports up. They clickable by pointing device and keyboard, but they are irrelevant and therefore hidden from screen readers by `aria-hidden="true"`.

## Accessibility

* The slideshow component wrapper has `role="region"`, and it has a title in an `aria-label`.
* The slide indicator buttons are in an unordered list, and the list is labeled with `aria-label="Slide indicators"`. Screen readers note how many list items, therefore the listener will be informed how many slides are in your slide deck.
* Slide indicator buttons are labeled with `aria-label="Slide 1 selector"`, `aria-label="Slide 1 selector"` etc. And each have `aria-controls=""` to assign their respective slides.
* Each slide wrapper has `role="group"` that indicates the beginning end of each slide, that may contain multiple elements such as a title, image(s), and figure legend(s). And each slide has `aria-labelledby=""` associating it with its respective indicator button.
* The forward `→` and back `←` buttons are hidden from screen readers. These buttons are also hidden on smaller screens, where there is no room for them.
