---
title: "Menus"
headerTitle: "Menus and menubars"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/text-columns"
nextPage: "/docs/6-simple-components/heros"
prevLink: "Text columns"
nextLink: "Heros"
---

An HTML menu is usually an unordered list or ordered list of links, but it can be used on other elements too.

## A simple menu

There are numerous utility classes in Codebase that can be used to lake a menu look distinctive.

If you are using an `ol` or `ul` then the following example is a good place to start:

1. On the `ol` or `ul` use `list-style-type-none` to remove the numbers or bullet points.
2. Remove the `ol` or `ul` side padding, so that the list items do not appear indented.
3. You may also need to remove the bottom margin of the `ol` or `ul`.
4. Make each link in the menu to be styled as a block-level element, and add some padding – this increases the link area for large fingers on touch screen devices.
5. You may want menu links not to be styled the same as traditional colored links within your main content (prose text).

<div class="mb-3 xs:flex flex-gap flex-grow-equal">
<div>
<p>An unordered list of links:</p>
<ul>
  <li><a href="#/">Here’s a thing</a></li>
  <li><a href="#/">Something else</a></li>
  <li><a href="#/">Thingmabob</a></li>
  <li><a href="#/">And another thing</a></li>
  <li><a href="#/">One last thing</a></li>
</ul>
</div>
<div>
<p>The same unordered list, styled as a menu:</p>
<ul class="list-style-type-none mb-0 p-0">
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="#/">Here’s a thing</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="#/">Something else</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="#/">Thingmabob</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="#/">And another thing</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="#/">One last thing</a></li>
</ul>
</div>
</div>

```html
<ul class="list-style-type-none mb-0 p-0">
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="">...</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="">...</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="">...</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="">...</a></li>
  <li><a class="block py-1 t-decoration-none t-gray-600 hover:t-black" href="">...</a></li>
</ul>
```

## More menu examples

Following the code example below are three examples of menus with sub menus – all styled with Codebase utilities applied to the same example base:

```html
<ul>
  <li><a href="">Link 1</a></li>
  <li><a href="">Link 2</a></li>
  <li><a href="">Link 3</a>
    <ul>
      <li><a href="">Link 3.1</a></li>
      <li><a href="">Link 3.2</a></li>
      <li><a href="">Link 3.3</a></li>
    </ul>
  </li>
  <li><a href="">Link 4</a></li>
  <li><a href="">Link 5</a></li>
</ul>
```

You can look at the source code to see how the following examples have been decorated with utility classes.

<div class="my-6">
<div class="xs:flex flex-gap flex-grow-equal">
<ul class="list-style-type-none pl-0">
  <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 1</a></li>
  <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 2</a></li>
  <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 3</a>
    <ul class="list-style-type-none pl-2">
      <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 3.1</a></li>
      <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 3.2</a></li>
      <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 3.3</a></li>
    </ul>
  </li>
  <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 4</a></li>
  <li><a class="block py-1 t-decoration-none hover:t-underscore" href="#/">Link 5</a></li>
</ul>
<ul class="list-style-type-none pl-0">
  <li><a class="bb-thin b-white block p-block t-decoration-none bg-blue-100 hover:bg-blue-200 t-gray-900 hover:t-black" href="#/">Link 1</a></li>
  <li><a class="bb-thin b-white block p-block t-decoration-none bg-blue-100 hover:bg-blue-200 t-gray-900 hover:t-black"  href="#/">Link 2</a></li>
  <li><a class="bb-thin b-white block p-block t-bold t-decoration-none bg-blue-200 hover:bg-blue-300 t-gray-900 hover:t-black"  href="#/">Link 3</a>
    <ul class="list-style-type-none pl-0">
      <li><a class="bb-thin b-white block p-block pl-4 t-decoration-none bg-blue-200 hover:bg-blue-300 t-gray-900 hover:t-black" href="#/">Link 3.1</a></li>
      <li><a class="bb-thin b-white block p-block pl-4 t-decoration-none bg-blue-200 hover:bg-blue-300 t-gray-900 hover:t-black" href="#/">Link 3.2</a></li>
      <li><a class="bb-thin b-white block p-block pl-4 t-decoration-none bg-blue-200 hover:bg-blue-300 t-gray-900 hover:t-black" href="#/">Link 3.3</a></li>
    </ul>
  </li>
  <li><a class="bb-thin b-white block p-block t-decoration-none bg-blue-100 hover:bg-blue-200 t-gray-900 hover:t-black"  href="#/">Link 4</a></li>
  <li><a class="bb-thin b-white block p-block t-decoration-none bg-blue-100 hover:bg-blue-200 t-gray-900 hover:t-black"  href="#/">Link 5</a></li>
</ul>
<ul class="list-style-type-none pl-0">
  <li><a class="block p-block t-decoration-none hover:bg-teal-100" href="#/">Link 1</a></li>
  <li><a class="block p-block t-decoration-none hover:bg-teal-100" href="#/">Link 2</a></li>
  <li class="bt-thin bb-thin bl-heavy b-teal-400 hover:bg-teal-100"><a class="block p-block t-bold t-decoration-none hover:bg-teal-200" href="#/">Link 3</a>
    <ul class="list-style-type-none pl-0">
      <li><a class="block p-block t-decoration-none hover:bg-teal-200" href="#/">Link 3.1</a></li>
      <li><a class="block p-block t-decoration-none hover:bg-teal-200" href="#/">Link 3.2</a></li>
      <li><a class="block p-block t-decoration-none hover:bg-teal-200" href="#/">Link 3.3</a></li>
    </ul>
  </li>
  <li><a class="block p-block t-decoration-none hover:bg-teal-100" href="#/">Link 4</a></li>
  <li><a class="block p-block t-decoration-none hover:bg-teal-100" href="#/">Link 5</a></li>
</ul>
</div>
</div>

## Menubars

You can use [flexbox]({{ '/docs/3-responsive-layouts/flex' | url }}) on menus for making menubars.

### Simple menubar

In the example below, `sm:flex` has been used, so that the menu stays as a columnar menu below the `sm` breakpoint width (i.e. below 768px, default), and then it becomes a menubar from that width up.

With some other simple components inside for proof of concept.

<div class="mb-3 b-dashed">
<ul class="list-style-type-none mb-0 pl-0 sm:flex flex-middle flex-wrap">
  <li><a class="block p-block t-decoration-none t-nowrap" href="#/">Link 1</a></li>
  <li><a class="block p-block t-decoration-none t-nowrap" href="#/">Link 2 with a badge<sup class="badge badge-warning">1</sup></a></li>
  <li><a class="block p-block t-decoration-none t-nowrap" href="#/"><span class="label bg-success t-white t-uppercase">New</span> Link 3 with a label</a></li>
  <li><a class="btn btn-primary btn-sm w-100% flex-start" href="#/">Link 5</a></li>
  <li><a class="block p-block t-decoration-none" href="#/">Link 6</a></li>
</ul>
</div>

```html
<ul class="list-style-type-none mb-0 pl-0 sm:flex flex-middle flex-wrap">
  <li><a class="block p-block t-decoration-none t-nowrap" href="#/">Link 1</a></li>
  ...
  <li><a class="btn btn-primary btn-sm w-100% flex-start" href="#/">Link 5</a></li>
  ...
</ul>
```

If you have items of different heights (e.g. badges, buttons, search form) and you want them to line up at the vertical middle, add `flex-middle` as in this example. If your menubar is overloaded with items, ensure that it behaves OK on smaller screens by adding `flex-wrap` or `overflow-x` – or adjust the breakpoint (e.g. maybe you need to use `md:flex` instead of `sm:flex`).

### Menubar with AlpineJS dropdown

Example menubar with an [AplineJS powered dropdown]({{ '/docs/7-alpinejs-components/dropdowns' | url }}) (sub menu):

<div class="mb-3 xs:flex flex-middle flex-space-between bg-purple-600">
  <div>
    <a class="block p-2 t-lg t-bold t-decoration-none t-white hover:t-white" href="#/">Brand</a>
  </div>
  <ul class="list-style-type-none mb-0 pl-0 xs:flex flex-middle flex-end">
    <li><a class="block p-block t-decoration-none t-white hover:t-white" href="#/">Home</a></li>
    <li>
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
        <button
          x-ref="button"
          @click="toggle()"
          :aria-expanded="open"
          :aria-controls="$id('dropdown-panel')"
          type="button"
          class="b-0 unrounded t-normal t-white hover:t-white hover:bg-transparent"
          :class="open && 'bg-purple-700 hover:bg-purple-700'"
        >
          <span>About</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
        </button>
        <div
          x-cloak
          x-ref="panel"
          x-show="open"
          @click.outside="close($refs.button)"
          :id="$id('dropdown-panel')"
          class="absolute xs:right z-index-1 b-thin rounded-sm bs-2 bg-white"
          style="min-width: 9rem"
        >
          <ul class="list-style-type-none mb-0 px-0 py-1">
            <li><a class="block p-block t-decoration-none" href="#/">Company info</a></li>
            <li><a class="block p-block t-decoration-none" href="#/">Management</a></li>
            <li><a class="block p-block t-decoration-none" href="#/">Careers</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li><a class="block p-block t-decoration-none t-white hover:t-white" href="#/">Contact</a></li>
  </ul>
</div>

```html
<div class="mb-3 xs:flex flex-middle flex-space-between bg-purple-600">
  <div>
    <a class="block p-2 t-lg t-bold t-decoration-none t-white hover:t-white" href="">Brand</a>
  </div>
  <ul class="list-style-type-none mb-0 pl-0 xs:flex flex-middle flex-end">
    <li><a class="block p-block t-decoration-none t-white hover:t-white" href="">Home</a></li>
    <li>
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
        <button
          x-ref="button"
          @click="toggle()"
          :aria-expanded="open"
          :aria-controls="$id('dropdown-panel')"
          type="button"
          class="b-0 unrounded t-normal t-white hover:t-white hover:bg-transparent"
          :class="open && 'bg-purple-700 hover:bg-purple-700'"
        >
          <span>About</span>
          <!-- Icon caret down -->
        </button>
        <div
          x-cloak
          x-ref="panel"
          x-show="open"
          @click.outside="close($refs.button)"
          :id="$id('dropdown-panel')"
          class="absolute xs:right z-index-1 b-thin rounded-sm bs-2 bg-white"
          style="min-width: 9rem"
        >
          <ul class="list-style-type-none mb-0 px-0 py-1">
            <li><a class="block p-block t-decoration-none" href="">Company info</a></li>
            <li><a class="block p-block t-decoration-none" href="">Management</a></li>
            <li><a class="block p-block t-decoration-none" href="">Careers</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li><a class="block p-block t-decoration-none t-white hover:t-white" href="">Contact</a></li>
  </ul>
</div>
```