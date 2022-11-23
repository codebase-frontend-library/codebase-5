---
title: "Collapse"
layout: layout.njk
prevPage: "/docs/6-simple-components/cards"
nextPage: "/docs/7-alpinejs-components/dropdowns"
prevLink: "Cards"
nextLink: "Dropdowns"
---

Collapsable components (sometimes called slide-reveals, or show-hides) are used for showing and/or hiding panel content.

Collapses are often found in navbars, tall sidebars, FAQs, and dismissable “top ribbon” notifications.

Codebase collapse components make use of the [AlpineJS Collapse Plugin](https://alpinejs.dev/plugins/collapse).

## Basic collapse example

<div 
  x-data="{ open: false }"
  x-id="['collapse']"
  class="mb-3 b-thin rounded"
>
  <button
    type="button"
    class="w-100% flex-space-between b-0 unrounded hover:bg-transparent hide-focus-ring"
    @click="open = !open;"
    :aria-controls="$id('collapse')"
    :aria-expanded="open"
    @keydown.escape.prevent.stop="open = false"
  >
    <span class="t-semibold">Collapse toggle</span>
    <svg x-cloak x-show="!open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    <svg x-cloak x-show="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
  </button>
  <div
    x-cloak
    x-show="open"
    x-collapse
    :id="$id('collapse')"
    @keydown.escape.prevent.stop="open = false"
  >
    <div class="p-2">
      <em>Collapsable panel content with an <a href="#/">example link</a>.</em> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</div>

**Note:** `hide-focus-ring` his been used on the button in this component. See [Accessibility]({{ '/docs/1-getting-started/accessibility' | url }}).

```html
<div 
  x-data="{ open: false }"
  x-id="['collapse']"
  class="b-thin rounded"
>
  <button
    type="button"
    class="w-100% flex-space-between b-0 unrounded hover:bg-transparent hide-focus-ring"
    @click="open = !open;"
    :aria-controls="$id('collapse')"
    :aria-expanded="open"
    @keydown.escape.prevent.stop="open = false"
  >
    <span class="t-semibold">Collapse toggle</span>
    <!-- Icon caret down -->
    <svg x-cloak x-show="!open">...</svg>
    <!-- Icon caret up -->
    <svg x-cloak x-show="open">...</svg>
  </button>
  <div
    x-cloak
    x-show="open"
    x-collapse
    :id="$id('collapse')"
    @keydown.escape.prevent.stop="open = false"
  >
    <div class="p-2">
      <em>Collapsable panel content with an <a href="#/">example link</a>.</em> Lorem ipsum dolor sit amet...
    </div>
  </div>
</div>
```

## Notes on collapse

1. Codebase collapse components make use of the [AlpineJS Collapse Plugin](https://alpinejs.dev/plugins/collapse).
2. There are two basic elements to a Codebase collapse component:
    1. The **collapse toggle button** – control to open/close the collapse panel
    2. The **collapse panel** itself
3. `x-cloak` is used to hide the collapsed panel before AlpineJS has hidden it programatically. Codebase already contains the style `[x-cloak] {display: none;}`. If you’re starting with the panel in the _open_ state, then don’t put `x-cloak` on it. For example, seen the [Dismissable message box](#dismissable-message-box) below.
4. The collapse toggle `<button>` is not being used as part of a form. Therefore it must have the attribute `type="button"`
5. The collapse panel can be toggled open/close by the collapse toggle button (mouse click, touch screen tap, etc.) and by _tabbing_ onto the button and hitting the _enter key_ or the _space bar_.
6. The collapse can be closed by hitting the _escape key_ whether the focus is on the dropdown button or on the dropdown panel. The focus will then be returned to the dropdown button.
7. The `x-collapse` directive must be paired with the `x-show` directive on the collapse panel. During the collapsing animation,`x-collapse` temporarily removes `x-show`s inline style `display: none` and then puts it back on when the animation is completed. So, the contents of fully collapsed panels are removed from the accessibility tree (tabindex). This means that _tabbing_ can’t go inside collapsed panels and become lost to view.
8. It is easy to make a switchable open/close indicator on the collapse toggle button, based on the true/false state of the the collapse component. The [basic collapse example](#basic-collapse-example) above has two embedded SVG caret icons (from [Phosphor Icons](https://phosphoricons.com/)), one pointint down and one pointing up, that are hidden or revealed depending on the state of this component’s `open` variable.
    ```html
    <!-- Icon caret down -->
    <svg x-cloak x-show="!open">...</svg>

    <!-- Icon caret up -->
    <svg x-cloak x-show="open">...</svg>
    ```
9. ARIA attributes have been assigned to the collapse toggle button, to make it accessible for screen readers.
10. The ID of the collapse panel (used by `aria-controls=""` on its respective toggle button) has been assigned using the Alpine [x-id](https://alpinejs.dev/directives/id) directive, which automatically adds an incremented number to your specified ID (prefix). That way, you can include several collapse components to a webpage without having to think up an ID for each one.

## Adding an indicator rotation animation

Instead of switching between two icons (caret down and caret up), you can have only one icon and rotate it using Codebase [animation]({{ '/docs/7-alpinejs-components/animations' | url }}) utility classes:

<div 
  x-data="{ open: false }"
  x-id="['collapse']"
  class="mb-3 bt-thin bb-thin"
>
  <button
    type="button"
    class="w-100% flex-space-between b-0 unrounded hover:bg-transparent hide-focus-ring"
    @click="open = !open;"
    :aria-controls="$id('collapse')"
    :aria-expanded="open"
    @keydown.escape.prevent.stop="open = false"
  >
    <span class="t-semibold">Collapse toggle</span>
    <svg 
      class="transition-all-300ms"
      :class="open && 'rotate-180'"  
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
  </button>
  <div
    x-cloak
    x-show="open"
    x-collapse
    :id="$id('collapse')"
    @keydown.escape.prevent.stop="open = false"
  >
    <div class="p-2">
      <em>Collapsable panel content with an <a href="#/">example link</a>.</em> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</div>

```html
<!-- Icon caret down -->
<svg
  class="transition-all-300ms"
  :class="open && 'rotate-180'"
  ...
/>...</svg> 
```

## Dismissable message box

For a dismissable message box:

1. Initiate the Alpine component in the `open = true` state:
    ```html
    <div 
      x-data="{ open: true }"
      ...
    >
      ...
    </div>
    ```
2. Place the button _inside_ the panel, and make it only change the `open` state to false (i.e. closed) instead of being a toggle.
3. Label the button with “Close”, whether visibly and/or in the `aria-label`, and give it an “&times;” icon (dismiss; exit).
4. Do not put `x-cloak` on the collapse panel, because you’re initiating it in the open (displayed) state.

<div
  x-data="{ open: true }"
  x-id="['collapse']"
  class="mb-3"
>
  <div
    x-show="open"
    x-collapse
    :id="$id('collapse')"
    @keydown.escape.prevent.stop="open = false"
  >
    <div class="bg-success">
      <button
        class="btn-success btn-icon unrounded float-right t-lg hide-focus-ring"
        :aria-expanded="open"
        aria-controls="$id('collapse')"
        aria-label="Close panel"
        @click="open = false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
      </button>
      <div class="p-2 t-white">
        <p class="mb-1 t-lg">Success</p>
        <p class="mb-0">This message is just to tell you that you’ve had some success.</p>
      </div>
    </div>
  </div>
</div>

<p>(To make this collapse panel reappear, refresh your browser.)</p>

```html
<div
  x-data="{ open: true }"
  x-id="['collapse']"
>
  <div
    x-show="open"
    x-collapse
    :id="$id('collapse')"
    @keydown.escape.prevent.stop="open = false"
  >
    <div class="bg-success">
      <button
        class="btn-success btn-icon unrounded float-right t-lg"
        :aria-expanded="open"
        aria-controls="$id('collapse')"
        aria-label="Close panel"
        @click="open = false"
      >×</button>
      <div class="p-2 t-white">
        <p class="mb-1 t-lg">Success</p>
        <p class="mb-0">This message is just to tell you that you’ve had some success.</p>
      </div>
    </div>
  </div>
</div>
```