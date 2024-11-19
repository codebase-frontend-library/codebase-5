---
title: "Dropdowns"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/collapse"
nextPage: "/docs/7-alpinejs-components/modals"
prevLink: "Collapse"
nextLink: "Modals"
---

Codebase dropdowns follow the design pattern of the [AlpineJS dropdown](https://alpinejs.dev/pattern/dropdown) component.

## A basic dropdown

<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>

```html
<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <!-- Icon caret down-->
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>
```

## Notes on dropdowns

1. Dropdowns are based on an `isOpen` true/false toggle, with extra behaviors to cover various scenarios (close by clicking outside, pressing the escape key, tabbing beyond the last item in the dropdown panel, etc.)
2. `x-cloak` is used to hide the dropdown panel before AlpineJS has hidden it programatically. Codebase already contains the style `[x-cloak] {display: none;}`
3. The `absolute z-index-1` utility classes on the dropdown panel are essential so that the panel appears as a layer that “covers” subsequent content on the page.
4. The dropdown `<button>` is not being used as part of a form. Therefore it must have the attribute `type="button"`
5. The dropdown can be toggled open/close by the dropdown button (mouse click, touch screen tap, etc.) and by _tabbing_ onto the button and hitting the _enter key_ or the _space bar_.
6. The dropdown can be closed by hitting the _escape key_ whether the focus is on the dropdown button or on the dropdown panel. The focus will then be returned to the dropdown button.
7. The dropdown panel can be closed by _tabbing_ beyond the last item in the dropdown panel (i.e. on “focus after”). The focus will then go to the next interactive element down down the page (in the tab index).
8. Clicking outside the dropdown panel will close the panel. The focus will be returned to the dropdown button – unless you happened to click on some other interactive element on the page (in which case, that element will recieve focus).
9. ARIA attributes have been assigned to the dropdown button, to make it accessible for screen readers.
10. The ID of the dropdown panel (used by `aria-controls=""` on its respective dropdown button) has been assigned using the Alpine [x-id](https://alpinejs.dev/directives/id) directive, which automatically adds an incremented number to your specified ID (prefix). That way, you can include several dropdown components to a webpage without having to think up an ID for each one.

## Dropdown pushed to the right

1. Wrap the whole component in an element with e.g. `flex flex-end` or `flex flex-space-between` that pushes the component to the right
2. Add `relative` to the Alpine component wrapper itself
3. Add `right` to the dropdown content element
4. Right aligned dropdown content panels also require a _min-width_, or they will be constrained to the width of their component (and the component’s width is being constrained by the flexbox wrapper, so it will be the width of the dropdown button).

<div class="flex flex-end">
<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute right z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
    style="min-width: 12rem"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>
</div>

```html
<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <!-- Icon caret down -->
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute right z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
    style="min-width: 12rem"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>
```

## Adding a panel reveal animation

You can add animations to the dropdown panel using Alpine 3’s [x-transition](https://alpinejs.dev/directives/transition) directive.

In the following example An Alpine built-in animation has been added: `x-transition.origin.top.left` has been added to the dropdown panel:

<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative mb-2"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg>
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    x-transition.origin.top.left
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>

```html
<div
  x-data="{
    open: false,
    toggle() {
      if (this.open) {
        return this.close()
      }
      this.open = true
    },
    close(focusAfter) {
      this.open = false
      focusAfter && focusAfter.focus()
    }
  }"
  @keydown.escape.prevent.stop="close($refs.button)"
  @focusin.window="! $refs.panel.contains($event.target) && close()"
  x-id="['dropdown-panel']"
  class="relative mb-2"
>
  <!-- Button -->
  <button
    x-ref="button"
    @click="toggle()"
    :aria-expanded="open"
    :aria-controls="$id('dropdown-panel')"
    type="button"
    class="btn-primary"
  >
    <span>Click me</span>
    <!-- Icon chevron down -->
  </button>
  <!-- Panel -->
  <div
    x-cloak
    x-ref="panel"
    x-show="open"
    x-transition.origin.top.left
    @click.outside="close($refs.button)"
    :id="$id('dropdown-panel')"
    class="absolute z-index-1 b-thin rounded rounded-sm bs-2 bg-white"
  >
    <ul class="list-style-type-none mb-0 px-0 py-1">
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">First menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Second menu item</a></li>
      <li><a class="block p-cell py-1 t-decoration-none" href="#/">Third menu item</a></li>
    </ul>
  </div>
</div>
```
