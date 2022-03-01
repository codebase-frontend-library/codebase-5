---
title: "Modals"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/dropdowns"
nextPage: "/docs/7-alpinejs-components/offcanvas"
prevLink: "Dropdowns"
nextLink: "Offcanvas"
---

Codebase modals follow some aspects of the [AlpineJS modal](https://alpinejs.dev/pattern/modal) component design pattern. The accessibility features are the same but there are a few differences in the way modals are built here.

## The simplest modal

**Modal example 1a** – without “click outside to dismiss”:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-xs m-3 b-thin rounded p-2 bg-white"      
    >
      <div class="h3">Modal title</div>
      <p>Modal content. Click the “Close” button to dismiss.</p>
      <button
        type="button"
        class="float-right"
        @click="open = false">Close</button>
    </div>
  </div>
</div>

```html
<div
  x-data="{ open: false }"
  x-id="['modal']"
>

  <!-- Modal open button -->
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>

  <!-- Modal (cover/backdrop with panel inside) -->
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >

    <!-- Modal panel -->
    <div
      class="w-xs m-3 b-thin rounded p-2 bg-white"      
    >
      <div class="h3">Modal title</div>
      <p>Modal content. Click the “Close” button to dismiss.</p>

      <!-- Modal clode button -->
      <button
        type="button"
        class="float-right"
        @click="open = false">Close</button>
    </div>
  </div>
</div>
```

## Notes on modals

1. There are four basic elements to a Codebase modal component:
    1. The **modal open button** – control to open the modal
    2. The **modal** consisting of the full-viewport cover (a.k.a. backdrop), and the modal panel is inside it. The modal cover can be transparant (clear), or tinted (these Codebase examples use a semi-transparent black with blur-filter), or totally black if the modal is an image lightbox
    3. The **modal panel** containing your modal content
    4. The **modal close button** (a.k.a. dismiss button), usually placed within the modal panel but sometimes (e.g. for a lightbox) placed in a top corner of the cover
2. `x-cloak` is used to hide the modal before AlpineJS has hidden it programatically. Codebase already contains the style `[x-cloak] {display: none;}.`
3. The modal open and close `<button>`’s are not being used as part of a form. Therefore they must have the attribute `type="button"`
4. The modal cover (wrapper) covers the entire screen once the modal is opened. It is required for centering and middling the modal panel in the viewport window using flexbox. The modal cover  is transparent by default, but you can give it a dark blurry tint using `bg-black-glass-3`. Alternatively, you can use `bg-black` if you are using the modal as a lightbox.
5. The modal panel will become as wide as its content requires. But you can constrain the width using one of Codebase’s [max-width wrappers]({{ '/docs/4-layout-utilities/dimensions/#max-width-wrappers' | url}}). `w-xs` is commonly used for narrow modals.
6. The modal can be opened open/close by the modal open button (mouse click, touch screen tap, etc.) and by _tabbing_ onto the modal open button and hitting the _enter key_ or the _space bar_. The modal open button operates as a _toggle_ so that keyboard and assistive tech users can immediately close it again if they want to. However, mouse and touch screen users can’t toggle it closed because the modal will have opened and covered the viewport. Therefore a modal closed button needs to be supplied. (And an optional “click outside to dismiss” function.)
6. Modals require the [AlpineJS Focus plugin](https://alpinejs.dev/plugins/focus) for keeping the focus on the modal once it has been tabbed into, because you don’t want to allow tabbers to move the focus out of the modal until it has been dismissed. ALpine’s `x-trap` puts the focus on the _first_ focusable element inside the modal. Usually you will want this to be the modal close button.
7. Keyboard users can click the modal close button by tabbing onto it, then using the hitting the _enter key_ or the _space bar_ to dismiss the modal. The focus will then be returned to the dropdown button.
8. The modal can be closed by hitting the _escape key_, whether the focus is on the modal open button or somewhere in the modal. And the focus will be returned to the modal open button.
7. Modals require some [accessibility features](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) such as `role="dialog"` and `aria-modal="true"`. The example Codebase/ AlplineJS powered modals on this page should have all the accessibility features that you need, following the [MDN Accessibility (ARIA) guidelines for `role="dialog"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role). (If something is wrong or missing here, please open a pull request and provide an explanation and example.)
8. All CSS transitions are handled by [AlpineJS x-transition](https://alpinejs.dev/directives/transition).
9. If you want “click outside to dismiss”, you can easily add using AlpineJS `@click.outside="open = false"` to the `modal-panel`.
10. The ID of the modal (used by `aria-controls=""` on its respective modal open button) has been assigned using the Alpine [x-id](https://alpinejs.dev/directives/id) directive, which automatically adds an incremented number to your specified ID (prefix). That way, you can include several modal components to a webpage without having to think up an ID for each one. (However, this won’t work if you have your [modal open button in a separate Alpine component](#modal-open-button-in-a-separate-alpine-component).)

## Adding “click outside to dismiss”

Simply add `@click.outside` to the modal panel.

**Modal example 1b** – with “click outside to dismiss”:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-xs m-3 b-thin rounded p-2 bg-white"
      @click.outside="open = false"      
    >
      <div class="h3">Modal title</div>
      <p>Modal content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <button
        type="button"
        class="float-right"
        @click="open = false">Close</button>
    </div>
  </div>
</div>

```html
<!-- Modal panel -->
<div
  class="w-xs m-3 b-thin rounded p-2 bg-white"
  @click.outside="open = false"
>
  ...
</div>
```

## Adding a panel reveal animation

You can add some animations to the modal panel using Codebase [animations]({{ '/docs/7-alpinejs-components/animations' | url }}) and Alpine 3’s [x-transition](https://alpinejs.dev/directives/transition) directive.

**Note:** since these `x-transition` animations are being applied to the modal panel, therefore you will also need to put `x-show="open"` on the panel as well as on the modal cover. 

**Modal example 1c** – with CSS transform scale 75%-100%:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-xs m-3 b-thin rounded p-2 bg-white"
      @click.outside="open = false"
      x-show="open"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="scale-75%"
      x-transition:enter-end="scale-100%"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="scale-100%"
      x-transition:leave-end="scale-75%"
    >
      <div class="h3">Modal title</div>
      <p>Modal content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <button
        type="button"
        class="float-right"
        @click="open = false">Close</button>
    </div>
  </div>
</div>

```html
<!-- Modal panel -->
<div
  class="w-xs m-3 b-thin rounded p-2 bg-white"
  @click.outside="open = false"
  x-show="open"
  x-transition:enter="transition-all-300ms"
  x-transition:enter-start="scale-75%"
  x-transition:enter-end="scale-100%"
  x-transition:leave="transition-all-300ms"
  x-transition:leave-start="scale-100%"
  x-transition:leave-end="scale-75%"
>
  ...
</div>
```

## Open button in a separate Alpine component

Until Alpine v.3, having a toggler or button as a separate component was possible using the Alpine `$dispatch` magic property and the window as an event bus (see Hugo Di Francesco, [https://codewithhugo.com/alpinejs-component-communication-event-bus/](https://codewithhugo.com/alpinejs-component-communication-event-bus/)).

But Alpine 3 has built-in global state storage, using `Alpine.store()` (see [https://alpinejs.dev/globals/alpine-store](https://alpinejs.dev/globals/alpine-store)). So, we can use that instead.

**Modal example 1d** – with a control button in a separate Alpine component:

<!-- The expandedState store -->
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('modalEx1d', {
      expandedState: false,
    })
  })
</script>

<!-- The (separate) button component -->
<div
  x-data
  @keydown.escape.prevent.stop="$store.modalEx1d.expandedState = false"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="$store.modalEx1d.expandedState = true"
    aria-controls="modal-ex-separate"
    :aria-expanded="$store.modalEx1d.expandedState"
  >Open modal</button>
</div>

<!-- The modal component (without button) -->
<div x-data>
  <div
    x-cloak
    x-show="$store.modalEx1d.expandedState"
    x-transition.opacity.duration.600ms
    x-trap.noscroll.inert="$store.modalEx1d.expandedState"
    @keydown.escape.prevent.stop="$store.modalEx1d.expandedState = false"
    role="dialog"
    id="modal-ex-separate"
    aria-modal="true"
    :aria-label="modal-ex-separate"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-xs m-3 b-thin rounded p-3 bg-white"
      @click.outside="$store.modalEx1d.expandedState = false"
    >
      <p id="modal-1d-title" class="h3">Modal title</p>
      <p>Modal content.</p>
      <button
        type="button"
        class="float-right"
        @click="$store.modalEx1d.expandedState = false"
      >Close</button>
    </div>
  </div>
</div>

This is conceptually simpler than the window bus:

```html
<!-- The expandedState store -->
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('modalEx1d', {
      expandedState: false,
    })
  })
</script>

<!-- The (separate) button component -->
<div
  x-data
  @keydown.escape.prevent.stop="$store.modalEx1d.expandedState = false"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="$store.modalEx1d.expandedState = true"
    aria-controls="modal-ex-separate"
    :aria-expanded="$store.modalEx1d.expandedState"
  >Open modal</button>
</div>

<!-- Modal component without button
(cover/backdrop with panel inside) -->
<div x-data>
  <div
    x-cloak
    x-show="$store.modalEx1d.expandedState"
    x-transition.opacity.duration.600ms
    x-trap.noscroll.inert="$store.modalEx1d.expandedState"
    @keydown.escape.prevent.stop="$store.modalEx1d.expandedState = false"
    role="dialog"
    id="modal-ex-separate"
    aria-modal="true"
    :aria-label="modal-ex-separate"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <!-- Modal panel -->
    <div
      class="w-xs p-3 b-thin rounded bg-white"
      @click.outside="$store.modalEx1d.expandedState = false"
    >
      <p id="modal-1d-title" class="h3">Modal title</p>
      <p>Modal content.</p>
      <!-- Modal close button -->
      <button
        type="button"
        class="float-right"
        @click="$store.modalEx1d.expandedState = false"
      >Close</button>
    </div>
  </div>
</div>
```

Notes:

1. There needs to be `@keydown.escape.prevent.stop=""` on both components – the separate button and the modal itself.
2. Since the open button and the modal are in two separate components, they can’t share an `x-id`. So you will need to set up the modal `id`, `aria-controls` and `aria-label` another way (manually or programatically).
3. Having a button in a separate Alpine component enables you to have the button and the modal in different parts of a webage. And, if required in your design, it enables you to have more than one button per modal.

## Styling modal panels

Here are a few examples of what you can do with Codebase CSS styling.

### A fancy card panel

Above, you’ve seen simple modal panels that have a thin border, rounded corners, and a white background. Following is an alternative panel design example.

**Modal example 2a** – panel is dressed as a card, with the close button over the top right corner, and “click outside to dismiss”:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="relative w-xs m-3 b-thin rounded bg-white"
      @click.outside="open = false"
    >
      <button
        type="button"
        class="btn-icon bg-white rounded-full badge-top-right t-lg"
        aria-label="Close modal"
        @click="open = false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
      </button>
      <div class="p-block rounded-sm unrounded-bottom bg-orange-200">
        <p class="h4 m-0" id="modal-2a-title">Modal header</p>
      </div>
      <div class="p-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
</div>

### Panel with grid layout

**Modal example 2b** – panel with a grid layout, and “click outside to dismiss”:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-lg h-max-100% flex flex-column m-3 b-thin rounded bg-white"
      @click.outside="open = false"      
    >
      <div class="bb-thin p-block">
        <button class="btn-icon btn-sm float-right my-1 scroll-unlock" aria-label="Close modal" @click="open = false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg></button>
        <p class="my-1 h4" id="modal-2b-title">Modal Header</p>
      </div>
      <div class="grow overflow-y p-2 grid sm:gap sm:equal-2-cols">
        <div>
          <div class="aspect-ratio-4x3 mb-2 relative">
            <img class="box img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="A placeholder image">
          </div>
        </div>
        <div>
          <p class="h2">European Robin (<em>Erithacus rubecula</em>)</p>
          <p><em>Photo by <a href="https://www.pexels.com/photo/animal-avian-beak-bird-416179/">Pixabay</a> from <a href="https://www.pexels.com/">Pexels</a>.</em></p>
          <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim.</p>
          <p>
            <button class="btn-primary">Download</button>
            <button class="btn-secondary">Save</button>
          </p>
        </div>
      </div>
      <div class="bt-thin p-2">
        <div class="t-right">
          <button
            type="button"
            class="btn-small"
            @click="open = false"
          >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

Notes:

1. The `h-max-100%` is necessary for small viewports (phones) where the panel body will be displayed as a single column. `h-max-100%` works for the _max available_ height, which also works well with iPhone Safari’s retractable browser bars.
2. The `flex flex-column` on the panel and `grow` on the panel body enables the `overflow-y` on the panel body to scroll vertically if required for very small viewports.

```html
<!-- Modal panel -->
<div
  class="w-lg h-max-100% overflow-y flex flex-column m-3 b-thin rounded bg-white"
  @click.outside="open = false"      
>
  <!-- Panel header -->
  <div class="bb-thin p-block">
    <button class="btn-icon btn-sm float-right my-1 scroll-unlock" aria-label="Close modal" @click="open = false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg></button>
    <p class="my-1 h4" id="modal-2b-title">Modal Header</p>
  </div>

  <!-- Panel body -->
  <div class="grow overflow-y p-2 grid sm:gap sm:equal-2-cols">
    <div>
      ...
    </div>
    <div>
      ...
    </div>
  </div>

  <!-- Panel footer -->
  <div class="bt-thin p-2">
    <div class="t-right">
      <button
        type="button"
        class="btn-small"
        @click="open = false"
      >Cancel</button>
    </div>
  </div>
</div>
```

### Panel with scrolling body

Modal panels that contain (or may contain) a lot of content can break on small screen devices (phones) where their content becomes too tall for the viewport.

**Modal example 2c** – tall panel without “click outside to dismiss”:

<div
  x-data="{ open: false, rows: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box flex flex-center flex-middle bg-black-glass-3 z-index-999"
  >
    <div
      class="w-xs h-max-100% flex flex-column m-3 b-thin rounded bg-white"
      @click.outside="open = false"      
    >
      <div class="bb-thin p-block">
        <button type="button" class="float-right my-1 btn-sm" @click="open = false">Dismiss</button>
        <p class="my-1 h4">Header</p>
      </div>
      <div class="grow overflow-y">
        <p class="m-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
        <p class="m-2">Number of items: <span x-text="rows.length"></span>
        <table class="table table-borderless bt-thin tracks">
          <tbody>
          <template x-for="row in rows" :key="row">
            <tr class="bb-thin" x-show="row">
              <td x-text="row"></td>
              <td>
                <div class="flex">
                  <div>
                    <img class="square-sm" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="A placeholder image">
                  </div>
                  <div class="grow ml-2">
                    <b>Lorem ipsum dolor sit amet</b>
                  </div>
                </div>
              </td>
              <td>
                <button type="button" class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="118.1 174.1 152 208 185.9 174.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><line x1="152" y1="128" x2="152" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><path d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path><path d="M80,128a80,80,0,1,1,144,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
                </button>
              </td>
              <td>
                <button type="button" class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
                </button>
              </td>
              <td>
                <button type="button" class="btn-icon btn-sm rounded-full t-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path></svg>
                </button>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
        <p class="px-2"><em>Photo by <a href="https://www.pexels.com/photo/animal-avian-beak-bird-416179/">Pixabay</a> from <a href="https://www.pexels.com/">Pexels</a>.</em></p>
      </div>
      <div class="bt-thin p-2">
        <form class="flex" action="">
          <input type="text" class="unrounded-right" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search...">
          <button type="button" aria-label="Search" class="btn-icon unrounded-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg></button>
        </form>
      </div>
    </div>
  </div>
</div>

Notes:

1. The panel `h-max-100%` works for the _max available_ height, which also works well with iPhone Safari’s retractable browser bars.
2. The `flex flex-column` on the panel and `grow` on the panel body enables the `overflow-y` on the panel body to scroll vertically.

## Embedded popout modals

Most modals are invisible (and inaccessible) until triggered, but some are embedded in a page. Popout modals can be used for displaying a larger product image on an exommerce site (“zooming in”), detail-dense infographics, maps, etc.

**Modal example 3** – modal panel as an embedded popout:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="relative mb-3 b-thin rounded py-2"
>
  <div class="absolute right inline-block mr-2">
    <button
      type="button"
      @click="open = true"
      :aria-controls="$id('modal')"
      :aria-expanded="open"
      aria-expanded="false"
      aria-label="Enlarge infographic"
      class="btn-primary btn-icon btn-sm"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </div>
  <div
    :id="$id('modal')"
    :aria-label="$id('modal')"
    x-trap.noscroll.inert="open"
    class="px-2"
    :class="open ? 'fixed box z-index-999' : ''"
    @keydown.escape.prevent.stop="open = false"
  >
    <div
      :class="open ? 'box py-6 px-2 bg-white overflow-y scale-in' : 'mb-3'"
    >
      <button
        type="button"
        x-show="open"
        class="fixed top right z-index-1 m-2 btn-sm btn-primary btn-icon"
        @click="open = false"
        :aria-expanded="open"
        aria-label="close popout"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 160 96 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="48 160 96 160 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="160 208 160 160 208 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><polyline points="96 48 96 96 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
      </button>
      <div class="container-xl">
        <p class="t-center t-semibold" :class="open ? 'h1 mb-6' : 'h4'">Codebase popout modal demo</p>
        <p>Notes:</p>
        <ol>
          <li>You will need to add <a href="{{ '/docs/3-layout-utilities/overflows' | url }}">overflow</a> scrolling on the popout panel if you have a lot of content, especially if it will be too much for smaller viewports.</li>
          <li>If you don’t want the popout to operate on smaller viewports, you can simply hide your “expand popout” button, e.g. using <code class="b-thin">md:hidden-below</code>.</li>
        </ol>
      </div>
    </div>
  </div>
</div>

```html
<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="relative mb-3 b-thin rounded py-2"
>
  <div class="absolute right inline-block mr-2">
    <button
      type="button"
      @click="open = true"
      :aria-controls="$id('modal')"
      :aria-expanded="open"
      aria-expanded="false"
      aria-label="Enlarge infographic"
      class="btn-primary btn-icon btn-sm"
    >
      <!-- Icon maximize -->
    </button>
  </div>
  <div
    :id="$id('modal')"
    :aria-label="$id('modal')"
    x-trap.noscroll.inert="open"
    :class="open ? 'fixed box z-index-999' : ''"
    @keydown.escape.prevent.stop="open = false"
  >
    <div
      :class="open ? 'box py-6 bg-white overflow-y scale-in' : 'mb-3'"
    >
      <button
        type="button"
        x-show="open"
        class="fixed top right z-index-1 m-2 btn-sm btn-primary btn-icon"
        @click="open = false"
        :aria-expanded="open"
        aria-label="close popout"
      >
        <!-- Icon minimize -->
      </button>
      <div class="container-xl">
        <p class="t-center t-semibold" :class="open ? 'h1 mb-6' : 'h4'">Codebase popout modal demo</p>
        ...
      </div>
    </div>
  </div>
</div>
```

**Note:** The default popout Alpine state (un-popped) still initiates as `false` even though you can see its panel content as an integral part of the page.

## Modal as a lightbox

**Modal example 4a** – lightbox with a tall image:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box z-index-999 flex flex-center flex-middle bg-black"
  >
    <button type="button" class="fixed top right m-2 btn-icon rounded-full btn-tertiary" @click="open = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    </button>
    <img class="img-contain" src="{{ '/img/pexels-daniyal-ghanavati-110320.jpg' | url }}" width="640" height="978" loading="lazy" alt="A placeholder image">
    <div class="absolute right bottom left bg-black-glass-3 p-3 t-white t-center" id="modal-4a-title">
      <em>Photo by <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com/@daniyal-ghanavati-10741?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Daniyal Ghanavati</a> from <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com">Pexels</a>.</em>
    </div>
  </div>
</div>

**Modal example 4b** – lightbox with a wide image:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box z-index-999 flex flex-center flex-middle bg-black"
  >
    <button type="button" class="fixed top right m-2 btn-icon rounded-full btn-tertiary" @click="open = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    </button>
    <img class="img-contain" src="{{ '/img/pexels-trudie-roden-2419158.jpg' | url }}" width="1280" height="640" loading="lazy" alt="A placeholder image">
    <div class="absolute right bottom left bg-black-glass-3 p-3 t-white t-center" id="modal-4b-title">
      <em>Photo by <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com/@trudie-roden-1054578?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Trudie Roden</a> from <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com">Pexels</a>.</em>
    </div>
  </div>
</div>

**Modal example 4c** – lightbox with a tall and wide image:

<div
  x-data="{ open: false }"
  x-id="['modal']"
  class="mb-3"
>
  <button
    type="button"
    class="btn-primary"
    @click="open = true"
    :aria-controls="$id('modal')"
    :aria-expanded="open"
  >Open modal</button>
  <div
    x-cloak
    x-show="open"
    x-trap.noscroll.inert="open"
    x-transition.opacity.duration.600ms
    @keydown.escape.prevent.stop="open = false"
    role="dialog"
    :id="$id('modal')"
    aria-modal="true"
    :aria-label="$id('modal')"
    class="fixed box z-index-999 flex flex-center flex-middle bg-black"
  >
    <button type="button" class="fixed top right m-2 btn-icon rounded-full btn-tertiary" @click="open = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    </button>
    <img class="img-contain" src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="1280" height="834" loading="lazy" alt="A placeholder image">
    <div class="absolute right bottom left bg-black-glass-3 p-3 t-white t-center" id="modal-4c-title">
      <em>Photo by <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com/@erik-karits-2093459?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Eric Karits</a> from <a class="t-gray-400 hover:t-gray-500" href="https://www.pexels.com">Pexels</a>.</em>
    </div>
  </div>
</div>

Notes:

1. Use `bg-black` on the modal (cover/backdrop) instead of `bg-black-glass-3`, so that the page content doesn’t distract from the image in the lightbox.
2. Place the modal close button in the modal (cover/backdrop) instead of in the modal panel.
3. Place the image and title (caption) directly in the modal – you don’t need a modal panel element.
4. You don’t need or a “click-away” function.
5. The `img-contain` utility class on the `<img>` makes it max-out at the height and/or width of the viewport (or rather, the modal), depending on how tall or wide it is. 
6. You will need to optimize your image file-size, or use a [lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) technique if your image is heavy and therefore slows down the page load time, especially on slow internet connections (think of phones).