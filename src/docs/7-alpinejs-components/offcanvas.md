---
title: "Offcanvas"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/modals"
nextPage: "/docs/7-alpinejs-components/tabs"
prevLink: "Modals"
nextLink: "Tabs"
---

Codebase’s offcanvas panels can slide in from any side of the viewport (top, right, bottom, or left). They can be dismissed by a close button and/or by clicking outside. Their control button can be within the Alpine component, or in a separate component. Also, offcanvas panels can be overridden, so that they become like a normal (on-canvas) panel within the document flow above a breakpoint of your choice.

## Offcanvas from four sides

**Example 1:** offcanvas panel slides in from the top:

<div class="mb-6">
<div x-data="{ isOpen: false }">
  <button
    class="btn-primary"
    @click="isOpen = true"
    aria-label="Offcanvas example 1"
    aria-controls="offcanvas-ex-1"
    :aria-expanded="isOpen"
  >Open offcanvas (top)</button>

  <div
    class="fixed box z-index-999"
    x-show="isOpen"
    @click="isOpen = false"
  >
    <div
      id="offcanvas-ex-1"
      aria-labelledby="offcanvas-ex-1-title"
      x-cloak
      x-show="isOpen"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="translate-up-100%"
      x-transition:enter-end="translate-0"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="translate-0"
      x-transition:leave-end="translate-up-100%"
      x-trap.noscroll.inert="isOpen"
      class="offcanvas offcanvas-top w-100% overflow-y bs-1 p-2 bg-green-100"
      @click.stop
      @keyup.escape="isOpen = false"
    >
      <div class="mb-3 t-right">
        <button
        class="btn-icon btn-sm rounded-full"
        aria-label="Close offcanvas panel"
        @click="isOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
        </button>
      </div>
      <div class="h3" id="offcanvas-ex-1-title">Offcanvas 1 Panel Title</div>
      <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <nav>
        <ul class="menu">
          <li><a class="py-1" href="#/">Example link 1</a></li>
          <li><a class="py-1" href="#/">Example link 2</a></li>
          <li><a class="py-1" href="#/">Example link 3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</div>

**Example 2:** offcanvas panel slides in from the right:

<div class="mb-6">
<div x-data="{ isOpen: false }">
  <button
    class="btn-primary"
    @click="isOpen = true"
    aria-label="Offcanvas example 2"
    aria-controls="offcanvas-ex-2"
    :aria-expanded="isOpen"
  >Open offcanvas (right)</button>
  <div
    class="fixed box z-index-999"
    x-show="isOpen"
    @click="isOpen = false"
  >
    <div
      id="offcanvas-ex-2"
      aria-labelledby="offcanvas-ex-2-title"
      x-cloak
      x-show="isOpen"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="translate-right-100%"
      x-transition:enter-end="translate-0"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="translate-0"
      x-transition:leave-end="translate-right-100%"
      x-trap.noscroll.inert="isOpen"
      class="offcanvas offcanvas-right w-xxs h-100% overflow-y bs-1 p-2 bg-green-100"
      @click.stop
      @keyup.escape="isOpen = false"
    >
      <div class="mb-3">
        <button
        class="btn-icon btn-sm rounded-full"
        aria-label="Close offcanvas panel"
        @click="isOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
        </button>
      </div>
      <div class="h3" id="offcanvas-ex-2-title">Offcanvas 2 Panel Title</div>
      <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <nav>
        <ul class="menu">
          <li><a class="py-1" href="#/">Example link 1</a></li>
          <li><a class="py-1" href="#/">Example link 2</a></li>
          <li><a class="py-1" href="#/">Example link 3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</div>

**Example 3:** offcanvas panel slides in from the bottom:

<div class="mb-6">
<div x-data="{ isOpen: false }">
  <button
    class="btn-primary"
    @click="isOpen = true"
    aria-label="Offcanvas example 3"
    aria-controls="offcanvas-ex-3"
    :aria-expanded="isOpen"
  >Open offcanvas (bottom)</button>
  <div
    class="fixed box z-index-999"
    x-show="isOpen"
    @click="isOpen = false"
  >
    <div
      id="offcanvas-ex-3"
      aria-labelledby="offcanvas-ex-3-title"
      x-cloak
      x-show="isOpen"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="translate-bottom-100%"
      x-transition:enter-end="translate-0"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="translate-0"
      x-transition:leave-end="translate-bottom-100%"
      x-trap.noscroll.inert="isOpen"
      class="offcanvas offcanvas-bottom w-100% overflow-y bs-1 p-2 bg-green-100"
      @click.stop
      @keyup.escape="isOpen = false"
    >
      <div class="mb-3 t-right">
        <button
        class="btn-icon btn-sm rounded-full"
        aria-label="Close offcanvas panel"
        @click="isOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
        </button>
      </div>
      <div class="h3" id="offcanvas-ex-3-title">Offcanvas 3 Panel Title</div>
      <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <nav>
        <ul class="menu">
          <li><a class="py-1" href="#/">Example link 1</a></li>
          <li><a class="py-1" href="#/">Example link 2</a></li>
          <li><a class="py-1" href="#/">Example link 3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</div>

**Example 4:** offcanvas panel slides in from the left:

<div class="mb-6">
<div x-data="{ isOpen: false }">
  <button
    class="btn-primary"
    @click="isOpen = true"
    aria-label="Offcanvas example 4"
    aria-controls="offcanvas-ex-4"
    :aria-expanded="isOpen"
  >Open offcanvas (left)</button>
  <div
    class="fixed box z-index-999"
    x-show="isOpen"
    @click="isOpen = false"
  >
    <div
      id="offcanvas-ex-4"
      aria-labelledby="offcanvas-ex-4-title"
      x-cloak
      x-show="isOpen"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="translate-left-100%"
      x-transition:enter-end="translate-0"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="translate-0"
      x-transition:leave-end="translate-left-100%"
      x-trap.noscroll.inert="isOpen"
      class="offcanvas offcanvas-left w-xxs overflow-y bs-1 p-2 bg-green-100"
      @click.stop
      @keyup.escape="isOpen = false"
    >
      <div class="mb-3 t-right">
        <button
        class="btn-icon btn-sm rounded-full"
        aria-label="Close offcanvas panel"
        @click="isOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
        </button>
      </div>
      <div class="h3" id="offcanvas-ex-4-title">Offcanvas 4 Panel Title</div>
      <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <nav>
        <ul class="menu">
          <li><a class="py-1" href="#/">Example link 1</a></li>
          <li><a class="py-1" href="#/">Example link 2</a></li>
          <li><a class="py-1" href="#/">Example link 3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</div>

```html
<div x-data="{ isOpen: false }">
  <button
    class="btn-primary"
    @click="isOpen = true"
    aria-label="Offcanvas example 4"
    aria-controls="offcanvas-ex-4"
    :aria-expanded="isOpen"
  >Open offcanvas</button>
  <div
    class="fixed box z-index-999"
    x-show="isOpen"
    @click="isOpen = false"
  >
    <div
      id="offcanvas-ex-4"
      aria-labelledby="offcanvas-ex-4-title"
      x-cloak
      x-show="isOpen"
      x-transition:enter="transition-all-300ms"
      x-transition:enter-start="translate-left-100%"
      x-transition:enter-end="translate-0"
      x-transition:leave="transition-all-300ms"
      x-transition:leave-start="translate-0"
      x-transition:leave-end="translate-left-100%"
      x-trap.noscroll.inert="isOpen"
      class="offcanvas offcanvas-left w-xxs overflow-y bs-1 p-2 bg-white"
      @click.stop
      @keyup.escape="isOpen = false"
    >
      <div class="mb-3 t-right">
        <button
        class="btn-icon btn-sm rounded-full"
        aria-label="Close offcanvas panel"
        @click="isOpen = false">
          <!-- Icon close x -->
        </button>
      </div>
      <div class="h3" id="offcanvas-ex-4-title">Offcanvas 4 Panel Title</div>
      <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
      <nav>
        <ul class="menu">
          <li><a class="py-1" href="#/">Example link 1</a></li>
          <li><a class="py-1" href="#/">Example link 2</a></li>
          <li><a class="py-1" href="#/">Example link 3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
```

## Notes on offcanvas

1. The width of offcanvas right, or offcanvas left, can be whatever you need, up to 100vw. You can set it by utility classes. Also, add `overflow-y` if required.
2. The height of offcanvas top, or offcanvas bottom, can be whatever you need, up to 100vh. You can set it by utility classes. Also, add `overflow-y` if required.
3. Offcanvas panels require the [AlpineJS Focus plugin](https://alpinejs.dev/plugins/focus) for keeping the focus on the `offcanvas-panel` when it is expanded. `x-trap` puts the focus on the _first focusable element_ inside the offcanvas panel. Keyboard users can click the “Close” button (keyboard `enter` or `space`) to exit the modal, or they can use the `escape` key. When the offcanvas panel is expanded, `x-trap` puts the focus on the first actionable item in the panel – it is good practive to make this the _close_ button, as per these examples.
4. Offcanvas panels have a full-cover backdrop that is the parent element of the offcanvas panel. This backdrop prevents anything else on the page being clicked by accident while the offvanvas is open.

```html
<div
  class="fixed box z-index-999"
  x-show="isOpen"
  @click="isOpen = false"
>
  <!-- The offcanvas panel goes in here -->
</div>
```

In all these examples, no background color (and no glass effect) has been set for the backdrop, therefore it is invisible. For handling “click outside to dismiss”, `@click="isOpen = false"` is placed on the backdrop. All offcanvas examples in these docs have this, but it is optional – you can do without it if your design requires it to be so. (**Note:** if you use `@click="isOpen = false"` on the backdrop, then you need to have `@click.stop` on the offcanvas panel to stop clicks on the panel bubbling up and clicking the `@click="isOpen = false"` too.)

5. Offcanvas panels must have a title. I have styled offcanvas titles using the `h3` utility class in a `<div>` (instead of using the `<h3>` HTML tag), making the titles are obvious for sighted people but not upsetting the [heading hierarchy](https://www.w3.org/WAI/tutorials/page-structure/headings/) (which could mislead people who are reliant on screen readers, and it is bad for SEO).
6. Codebase offcanvas panels have `style="display: none;"` applied to them in their retracted state, by Alpine the `x-show` directive. This means that thet are not included in the accessibility tree (tab index) while retracted. And it means that if you have a box shadow on the offcanvas panel, it will not be seen protruding from the edge of the viewport.
7. `offcanvas-top`, `offcanvas-right` etc. set the initial retracted position styles for the offcanvas panel. They don’t handle its animation. [You can override these styles](#offcanvas-override-(for-wide-viewports)) above particular breakpoints, using e.g. `sm:offcanvas-override`. This will allow your panel to behave as a normal panel above that breakpoint.
8. The `transition-all-300ms` and `translate-*` classes are all applied using Alpine 3’s [x-transition](https://alpinejs.dev/directives/transition) directive.

## Offcanvas classes

There are only four HTML elements required for the basic offcanvas skeleton (including the AlpineJS component wrapping `<div>`)"

```html
<div x-data="{ isOpen: false }">
  <button>Click to reveal</button>

  <!-- The offcanvas panel -->
  <div class="offcanvas">
    <button>Click to close</button>
    Offcanvas panel content.
  </div>

</div><!-- End of Alpine component -->
```

As descibed previously, the control button can be in its own separate Alpine component if your design requires it to be so. Then, use the offcanvas panel’s side classes to set what side the panel slides in from, and its z-index layer above the webpage. Then you have the option to add another class that overrides the offcanvas panel at a particular breakpoint – so that it reverts to being

The Codebase offcanvas CSS classes are as follows:

<div class="overflow-x mb-3">
<table class="table">
  <thead>
    <tr>
      <th>CSS class</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>offcanvas</code></td>
      <td>Fixes the position of the offcanvas panel in its <em>unretracted</em> state, and its z-index layer above the webpage.</td>
    </tr>
    <tr>
      <td><code>offcanvas-top</code><br> <code>offcanvas-right</code>,<br> <code>offcanvas-bottom</code> or<br> <code>offcanvas-left</code></td>
      <td>Sets the side of the viewport that your offcanvas panel will slide in from.</td>
    </tr>
    <tr>
      <td><code>sm:offcanvas-override</code><br> <code>md:offcanvas-override</code> or<br> <code>lg:offcanvas-override</code></td>
      <td>Overrides the offvanvas panel’s styling, so that it is displayed as a normal panel within the document flow.</td>
    </tr>
    <tr>
      <td colspan="2"><em>Use utility classes to set the panel’s width, box shadow, padding, and background color.</em></td>
    </tr>
    <tr>
      <td><code>transition-all-300ms</code></td>
      <td>Used by the AlpineJS <code>x-transition</code> directive, this sets the CSS transition for the offcanvas panel.</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">translate-up-100%</code><br> <code class="t-nowrap">translate-right-100%</code><br> <code class="t-nowrap">translate-bottom-100%</code> or <code class="t-nowrap">translate-right-100%</code></td>
      <td>Used by AlpineJS <code>x-transition</code> directive, these set the <em>retracted</em> position of the panel by CSS transform.</td>
    </tr>
    <tr>
      <td><code>translate-0</code></td>
      <td>Used by the AlpineJS <code>x-transition</code> directive, this sets the <em>expanded</em> position of the panel by CSS transition, necessary to undo the <em>retracted</em> position. (The same <code>translate-0</code> class works for top, right, bottom or left.)</td>
    </tr>
  </tbody>
</table>
</div>

## Button as a separate component

Until Alpine v.3, having a toggler or button as a separate component was possible using the Alpine `$dispatch` magic property and the [window as an event bus](https://codewithhugo.com/alpinejs-component-communication-event-bus/).

But Alpine 3 has built-in global state storage, using [Alpine.store()](https://alpinejs.dev/globals/alpine-store). So, we can use that instead.

**Example 5:** with a control button in a separate Alpine component:

<div class="mb-6">
<!-- The isOpen (state) store -->
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('offcanvasEx5', {
      isOpen: false
    })
  })
</script>

<!-- The (separate) button component -->
<div x-data>
  <button
    class="btn-primary"
    @click="$store.offcanvasEx5.isOpen = true"
    aria-label="Offcanvas example 5"
    aria-controls="offcanvas-ex-5"
    :aria-expanded="$store.offcanvasEx5"
    @keydown.escape="$store.offcanvasEx5.isOpen = false">Open offcanvas</button>
</div>

<!-- The offcanvas component (without button) -->
<div
  x-data
  class="fixed box z-index-999"
  x-show="$store.offcanvasEx5.isOpen"
  @click="$store.offcanvasEx5.isOpen = false"
>
  <div
    x-data
    id="offcanvas-ex-5"
    aria-labelledby="offcanvas-ex-5-title"
    x-cloak
    x-show="$store.offcanvasEx5.isOpen"
    x-transition:enter="transition-all-300ms"
    x-transition:enter-start="translate-up-100%"
    x-transition:enter-end="translate-0"
    x-transition:leave="transition-all-300ms"
    x-transition:leave-start="translate-0"
    x-transition:leave-end="translate-up-100%"
    x-trap.noscroll.inert="$store.offcanvasEx5.isOpen"
    class="offcanvas offcanvas-top w-100% overflow-y bs-1 p-2 bg-white"
    @click.stop
    @keyup.escape="$store.offcanvasEx5.isOpen = false"
  >
    <div class="mb-3 t-right">
      <button
      class="btn-icon btn-sm rounded-full"
      aria-label="Close offcanvas panel"
      @click="$store.offcanvasEx5.isOpen = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
      </button>
    </div>
    <div class="h3" id="offcanvas-ex-5-title">Offcanvas 5 Panel Title</div>
    <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
    <nav>
      <ul class="menu">
        <li><a class="py-1" href="#/">Example link 1</a></li>
        <li><a class="py-1" href="#/">Example link 2</a></li>
        <li><a class="py-1" href="#/">Example link 3</a></li>
      </ul>
    </nav>
  </div>
</div>
</div>

```html
<!-- The isOpen (state) store -->
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.store('offcanvasEx5', {
      isOpen: false
    })
  })
</script>

<!-- The (separate) button component -->
<div x-data>
  <button
    class="btn-primary"
    @click="$store.offcanvasEx5.isOpen = true"
    aria-label="Offcanvas example 5"
    aria-controls="offcanvas-ex-5"
    :aria-expanded="$store.offcanvasEx5"
    @keydown.escape="$store.offcanvasEx5.isOpen = false">Open offcanvas</button>
</div>

<!-- The offcanvas component (without button) -->
<div
  x-data
  class="fixed box z-index-999"
  x-show="$store.offcanvasEx5.isOpen"
  @click="$store.offcanvasEx5.isOpen = false"
>
  <div
    id="offcanvas-ex-5"
    aria-labelledby="offcanvas-ex-5-title"
    x-cloak
    x-show="$store.offcanvasEx5.isOpen"
    x-transition:enter="transition-all-300ms"
    x-transition:enter-start="translate-up-100%"
    x-transition:enter-end="translate-0"
    x-transition:leave="transition-all-300ms"
    x-transition:leave-start="translate-0"
    x-transition:leave-end="translate-up-100%"
    x-trap.noscroll.inert="$store.offcanvasEx5.isOpen"
    class="offcanvas offcanvas-top w-100% overflow-y bs-1 p-2 bg-white"
    @click.stop
    @keyup.escape="$store.offcanvasEx5.isOpen = false"
  >
    <div class="mb-3 t-right">
      <button
      class="btn-icon btn-sm rounded-full"
      aria-label="Close offcanvas panel"
      @click="$store.offcanvasEx5.isOpen = false">
        <!-- Icon close x -->
      </button>
    </div>
    <div class="h3" id="offcanvas-ex-5-title">Offcanvas 5 Panel Title</div>
    <p>Offcanvas content. Click the “Close” button to dismiss – or click outside to dismiss.</p>
    <nav>
      <ul class="menu">
        <li><a class="py-1" href="#/">Example link 1</a></li>
        <li><a class="py-1" href="#/">Example link 2</a></li>
        <li><a class="py-1" href="#/">Example link 3</a></li>
      </ul>
    </nav>
  </div>
</div>
```

## Offcanvas override (for wide viewports)

To override Codebase offcanvas above any of the media query breakpoints, we need the following:

1. **Codebase CSS overrides** (`md:offcanvas-override` etc.):
    1. Stop the offcanvas panel’s `position: fixed` etc. happening above that breakpoint.
    2. Remove the box shadow (if you have one).
    3. If your offcanvas panel slides in from the right or left, then you need to put `md:w-auto` (or other) on the panel to override its width at the `offvanvas-override` breakpoint.
2. **AlpineJS overrides**:
    1. Set `isOpen` to `true` above that breakpoint (use the same breakpoint as you’re using in the stylesheet; in this example `md` = 1024px default).
    2. Stop the `@click.outside` and `@keyup.escape` dismissers happening at and above that breakpoint (because you don’t want the panel to disappear while it is behaving as a normal on-canvas panel).
    3. Stop the `x-trap.noscroll.inert` happening at and above that breakpoint.

So, in the `Alpine.store()` data you want the `isOpen` state to initialize as `false` below the breadpoint (the offcanvas panel is retracted) but as `true` at and above the breakpoint (so that it can behaves as a normal visible panel).

**Example 6:** with control button as a separate Alpine component, and with offcanvas override. Below the `md` breakpoint (1024px default), the offcanvas panel slides in from the top. At or above `md` it behaves as a normal (on canvas) panel. And the control button and the close button are both hidden a  or above `md`:

<div class="mb-6">
<!-- The state store -->
<script>
  document.addEventListener('alpine:init', () => {
    let windowWidth = window.innerWidth;
    Alpine.store('offcanvasEx6', {
      isOpen: window.innerWidth >= 1024,
      isBelowBP: window.innerWidth < 1024,
      reset() {
        let currentWidth = window.innerWidth;
        if (currentWidth != windowWidth) {          
          windowWidth = currentWidth;
          if (windowWidth >= 1024) {
            this.isOpen = true,
            this.isBelowBP = false
          } else {
            this.isOpen = false,
            this.isBelowBP = true
          }
        }
      }
    })
  })
</script>

<!-- The (separate) button component -->
<div
  x-data
  @resize.window.debounce="$store.offcanvasEx6.reset()"
>
  <button
    class="btn-primary"
    @click="$store.offcanvasEx6.isOpen = true"
    aria-label="Offcanvas example 6"
    aria-controls="offcanvas-ex-6"
    :aria-expanded="$store.offcanvasEx6"
    x-show="$store.offcanvasEx6.isBelowBP"
  >Open offcanvas</button>
</div>

<!-- The offcanvas component (without button) -->
<div
  x-data
  class="fixed box z-index-999 md:offcanvas-override"
  x-show="$store.offcanvasEx6.isOpen"
  @click="$store.offcanvasEx6.isOpen = false"
>
  <div
    id="offcanvas-ex-6"
    aria-labelledby="offcanvas-ex-7-title"
    x-cloak
    x-show="$store.offcanvasEx6.isOpen"
    x-transition:enter="transition-all-300ms"
    x-transition:enter-start="translate-up-100%"
    x-transition:enter-end="translate-0"
    x-transition:leave="transition-all-300ms"
    x-transition:leave-start="translate-0"
    x-transition:leave-end="translate-up-100%"
    x-trap.noscroll.inert="$store.offcanvasEx6.isOpen && $store.offcanvasEx6.isBelowBP"
    class="offcanvas offcanvas-top md:offcanvas-override w-100% overflow-y bs-1 md:b-thick p-2 bg-white"
    @click.stop
    @keyup.escape="$store.offcanvasEx6.isOpen = !$store.offcanvasEx6.isBelowBP || false"
  >
    <div
      class="mb-3 t-right"
      x-show="$store.offcanvasEx6.isBelowBP"
    >
      <button
      class="btn-icon btn-sm rounded-full"
      aria-label="Close offcanvas panel"
      @click="$store.offcanvasEx6.isOpen = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
      </button>
    </div>
    <div class="h3" id="offcanvas-ex-6-title">Offcanvas 6 Panel Title</div>
    <p>This panel will behave as a normal panel at and above the 
        <code class="b-thin">md</code> breakpoint (1024px default). 
        And it will behave as an offcanvas panel below 
        <code class="b-thin">md</code>.</p>
    <nav>
      <ul class="menu">
        <li><a class="py-1" href="#/">Example link 1</a></li>
        <li><a class="py-1" href="#/">Example link 2</a></li>
        <li><a class="py-1" href="#/">Example link 3</a></li>
      </ul>
    </nav>
  </div>
</div>
</div>

**Note:** the `offcanvas-override` class is required on both the outer (component) `<div>` and the moving part (offcanvas panel) `<div>`.

```html
<!-- The state store -->
<script>
  document.addEventListener('alpine:init', () => {
    let windowWidth = window.innerWidth;
    Alpine.store('offcanvasEx6', {
      isOpen: window.innerWidth >= 1024,
      isBelowBP: window.innerWidth < 1024,
      reset() {
        let currentWidth = window.innerWidth;
        if (currentWidth != windowWidth) {          
          windowWidth = currentWidth;
          if (windowWidth >= 1024) {
            this.isOpen = true,
            this.isBelowBP = false
          } else {
            this.isOpen = false,
            this.isBelowBP = true
          }
        }
      }
    })
  })
</script>

<!-- The (separate) button component -->
<div
  x-data
  @resize.window.debounce="$store.offcanvasEx6.reset()"
>
  <button
    class="btn-primary"
    @click="$store.offcanvasEx6.isOpen = true"
    aria-label="Offcanvas example 6"
    aria-controls="offcanvas-ex-6"
    :aria-expanded="$store.offcanvasEx6"
    x-show="$store.offcanvasEx6.isBelowBP"
  >Open offcanvas</button>
</div>

<!-- The offcanvas component (without button) -->
<div
  x-data
  class="fixed box z-index-999 md:offcanvas-override"
  x-show="$store.offcanvasEx6.isOpen"
  @click="$store.offcanvasEx6.isOpen = false"
>
  <div
    id="offcanvas-ex-6"
    aria-labelledby="offcanvas-ex-7-title"
    x-cloak
    x-show="$store.offcanvasEx6.isOpen"
    x-transition:enter="transition-all-300ms"
    x-transition:enter-start="translate-up-100%"
    x-transition:enter-end="translate-0"
    x-transition:leave="transition-all-300ms"
    x-transition:leave-start="translate-0"
    x-transition:leave-end="translate-up-100%"
    x-trap.noscroll.inert="$store.offcanvasEx6.isOpen && $store.offcanvasEx6.isBelowBP"
    class="offcanvas offcanvas-top md:offcanvas-override w-100% overflow-y bs-1 md:b-thick p-2 bg-white"
    @click.stop
    @keyup.escape="$store.offcanvasEx6.isOpen = !$store.offcanvasEx6.isBelowBP || false"
  >
    <div
      class="mb-3 t-right"
      x-show="$store.offcanvasEx6.isBelowBP"
    >
      <button
      class="btn-icon btn-sm rounded-full"
      aria-label="Close offcanvas panel"
      @click="$store.offcanvasEx6.isOpen = false">
        <!--icon close x -->
      </button>
    </div>
    <div class="h3" id="offcanvas-ex-6-title">Offcanvas 6 Panel Title</div>
    <p>This panel will behave as a normal panel at and above the 
        <code class="b-thin">md</code> breakpoint (1024px default). 
        And it will behave as an offcanvas panel below 
        <code class="b-thin">md</code>.</p>
    <nav>
      <ul class="menu">
        <li><a class="py-1" href="#/">Example link 1</a></li>
        <li><a class="py-1" href="#/">Example link 2</a></li>
        <li><a class="py-1" href="#/">Example link 3</a></li>
      </ul>
    </nav>
  </div>
</div>
```