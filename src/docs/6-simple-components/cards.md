---
title: "Cards"
layout: layout.njk
prevPage: "/docs/6-simple-components/media-objects"
nextPage: "/docs/7-alpinejs-components/collapse"
prevLink: "Media objects"
nextLink: "Collapse"
---

Codebase cards are built entirely of utility classes – they have no unique card CSS.

Control the width of a card any way that makes sense in your design. “Raise” cards with a [box-shadow]({{ '/docs/5-decoration-utilities/box-shadows' | url }}) – or not. Give them [rounded corners]({{ '/docs/5-decoration-utilities/rounded-corners' | url }}) – or not. Add an image if you need to. Or a header and footer. You’ll probably want a call-to-action button or link. But it’s all up to you.

## A simple card

<div class="flex flex-column w-xxs mx-auto rounded overflow-hidden bs-1 mb-2">
  <a href="#/" class="aspect-ratio-16x9 relative">
    <img class="box img-cover" src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
  </a>
  <div class="grow p-2">
    <div class="h4 mb-2">Card Title</div>
    <p class="mb-2">
      Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
    </p>
    <a href="#/" class="btn btn-primary">Button</a>
  </div>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni) from [Pexels](https://www.pexels.com)._

```html
<div class="flex flex-column w-xxs mx-auto rounded overflow-hidden bs-1 mb-2">
  <a href="" class="aspect-ratio-16x9 relative">
    <img class="box img-cover" src="" width="" height="" loading="lazy" alt="">
  </a>
  <div class="grow p-2">
    <div class="h4 mb-2">Card Title</div>
    <p class="mb-2">
      Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
    </p>
    <a href="#/" class="btn btn-primary">Button</a>
  </div>
</div>
```

## Header and footer

Another example, with a header and a footer — and a thin border instead of a box shadow:

<div class="mx-auto b-thin rounded w-xxs mx-auto mb-2">
  <div class="bb-thin p-cell">Header</div>
  <div class="flex flex-column">
    <a href="#/" class="aspect-ratio-16x9 relative">
      <img class="box img-cover" src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" width="1280" height="853" loading="lazy" alt="Photo by Oleg Magni from Pexels">
    </a>
    <div class="p-2">
    <div class="h4 mb-2">Card Title</div>
    <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
    </div>
  </div>
  <div class="bt-thin p-cell">Footer</div>
</div>

```html
<div class="mx-auto b-thin rounded">
  <div class="bb-thin p-cell">Header</div>
  <div class="flex flex-column">
    ...
  </div>
  <div class="bt-thin p-cell">Footer</div>
</div>
```

## Segments

Another example, with multiple mid-sections:

<div class="w-xxs mx-auto mb-2 b-thin rounded">
  <div class="bb-thin p-cell">
    Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
  </div>
  <div class="bb-thin p-cell">
    Imperdiet evertitur no usu, his te suavitate salutatus.
  </div>
  <div class="bb-thin p-cell">
    Nullam ridens deterruisset an duo.
  </div>
  <div class="p-cell">
    Cum harum insolens ei, cum probo placerat praesent et.
  </div>
</div>

```html
<div class="b-thin rounded">
  <div class="bb-thin p-cell">
    Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
  </div>
  <div class="bb-thin p-cell">
    Imperdiet evertitur no usu, his te suavitate salutatus.
  </div>
  <div class="bb-thin p-cell">
    Nullam ridens deterruisset an duo.
  </div>
  <div class="p-cell">
    Cum harum insolens ei, cum probo placerat praesent et.
  </div>
</div>
```

## Scrollable body

Example with a scrollable main content – and a specified height that’s less than the main content height, so that there's something to scroll for:

<div class="flex flex-column w-xxs mx-auto mb-2 b-thin rounded" style="height: 355px;">
  <div class="bb-thin p-cell">Header</div>
  <div class="grow overflow-y p-2">
    <div class="h4 mb-2">This card has a scrollable body</div>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim.</p>
    <p>Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <p>Movet voluptaria voluptatum has at, qui cu timeam ancillae democritum. Ad veniam detraxit his. In est bonorum fabulas deleniti, eam ex soluta verear albucius. Sale aperiri repudiandae eu cum, at cum sint dicunt. Prima tibique constituto cum ne, quidam dolorem detraxit pro no, sea an aeque zril.</p>
    <p>Et ponderum tacimates vim. Laudem ornatus intellegam no cum. Porro omittantur pro te. Iisque mandamus ei eum. Pri idque iudico appetere ex. Has no altera veritus civibus.</p>
    <p>At civibus aliquando usu. Vide libris has ut, eum illum luptatum ad. Quando scripta nusquam est te. Eleifend principes pertinacia sed cu, vix ut meis diceret salutandi, ea inermis ocurreret voluptatibus eam. Ei vidisse conclusionemque eam, vix eros mediocrem at. Graeco laboramus te mea, ius fabellas consequat voluptatum et.</p>
  </div>
  <div class="bt-thin p-cell">Footer</div>
</div>

```html
<div class="flex flex-column w-xxs mx-auto mb-2 b-thin rounded" style="height: 400px;">
  <div class="bb-thin p-cell">Header</div>
  <div class="grow overflow-y p-2">
    <div class="h4 mb-2">Card Title</div>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="bt-thin p-cell">Footer</div>
</div>
```

## Complex example with AlpineJS components

You’ve probably seen this kind of thing before, somewhere.

In the example below, the “Like” button triggers a [dropdown]({{ '/docs/7-alpinejs-components/dropdowns/' | url }}) (repositioned as a drop-up). And the “Comment” button triggers a [modal]({{ '/docs/7-alpinejs-components/modals/' | url }}). Both are powered by [AlpineJS](https://alpinejs.dev/).

<div class="w-xs mx-auto my-6 rounded bs-1">
  <div class="flex">
    <div class="grow flex p-2">
      <a class="square-sm rounded-full overflow-hidden" href="#/">
        <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}">
      </a>
      <div class="grow pl-2">
      <div class="h4 mb-0">Thomas Wingman</div>
        <div class="flex flex-middle">
          2 days ago &bull;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M71.6,144,32,176V48a8,8,0,0,1,8-8H168a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,144v40a8,8,0,0,0,8,8h96.4L224,224V96a8,8,0,0,0-8-8H176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
        </div>
      </div>
    </div>
    <div class="t-nowrap">
      <button class="btn-icon btn-sm b-0 hover:bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="16"></circle><circle cx="64" cy="128" r="16"></circle><circle cx="192" cy="128" r="16"></circle></svg></button>
      <button class="btn-icon btn-sm b-0 hover:bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>
    </div>
  </div>
  <div class="px-2">
    <p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.</p>
  </div>
  <div class="grid equal-2-cols">
    <div class="cols-1-2 b-thin b-white aspect-ratio-2x1 relative">
      <a href="#/" class="box relative">
        <img class="box img-cover" src="{{ '/img/pexels-trudie-roden-2419158.jpg' | url }}" width="1280" height="640" loading="lazy" alt="Placeholder image">
      </a>
    </div>
    <div class="b-thin b-white aspect-ratio-1x1 relative">
      <a href="#/" class="box relative">
        <img class="box img-cover" src="{{ '/img/pexels-daniyal-ghanavati-110320.jpg' | url }}" width="640" height="978" loading="lazy" alt="Placeholder image">
      </a>
    </div>
    <div class="b-thin b-white aspect-ratio-1x1 relative">
      <a href="#/" class="box relative">
        <img class="box img-cover" src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="1280" height="834" loading="lazy" alt="Placeholder image">
      </a>
    </div>
  </div>
  <div class="p-2">
    <span class="badge t-white bg-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
    </span>
    <span class="badge t-white bg-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
    </span> Freda Blogworthy and 52 others
    <hr class="my-2">
    <div class="flex">
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
        <!-- Dropup panel -->
        <div
          x-cloak
          x-ref="panel"
          x-show="open"
          @click.outside="close($refs.button)"
          :id="$id('dropdown-panel')"
          class="absolute z-index-1 translate-up-100% b-thin rounded-sm bs-2 p-1 inline-flex bg-gray-800 t-white"
          style="width: 8em;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M165.3,169.8a48,48,0,0,0-74.6,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,152l40,80a32,32,0,0,0,32-32V176h61.9a15.9,15.9,0,0,0,15.8-18l-12-96a16,16,0,0,0-15.8-14H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
        </div>
        <!-- Button -->
        <button
          x-ref="button"
          @click="toggle()"
          :aria-expanded="open"
          :aria-controls="$id('dropdown-panel')"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          Like
        </button>&nbsp;
      </div>
      <div
        x-data="{ open: false }"
        x-id="['modal']"
      >
        <button
          type="button"
          @click="open = true"
          :aria-controls="$id('modal')"
          :aria-expanded="open"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
          Comment
        </button>
        <div
          x-cloak
          x-show="open"
          x-trap.noscroll.inert="open"
          x-transition.opacity.duration.600ms
          @keyup.escape.prevent.stop="open = false"
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
            <div class="bb-thin p-cell">
              <button type="button" class="float-right my-1 btn-sm" @click="open = false">Done</button>
              <p class="my-1 h4" id="modal-2c-title">Comments</p>
            </div>
            <div class="grow overflow-y p-2">
            <p>
              <span class="badge t-white bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
              </span>
              <span class="badge t-white bg-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
              </span> Freda Blogworthy and 52 others
            </p>
            <div class="flex">
              <a class="mr-2 square-sm b-thin rounded-full overflow-hidden" href="#/">
                <img class="img-cover" src="/codebase-5/img/pexels-pixabay-416179.jpg">
              </a>
              <div>
                <div class="h4 mb-1">Freda Blogworthy</div>
                <div class="mb-2 bg-blue-100 rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
                <div class="flex">
                  <a class="mr-2 square-sm b-thin rounded-full overflow-hidden" href="#/">
                    <img class="img-cover" src="/codebase-5/img/pexels-pixabay-416179.jpg">
                  </a>
                  <div>
                    <div class="h4 mb-1">Tomas Wingman <span class="t-sm t-uppercase">[Author]</span></div>
                    <div class="mb-2 bg-amber-100 rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
                  </div>
                </div>
                <div class="flex">
                  <a class="mr-2 square-sm b-thin rounded-full overflow-hidden" href="#/">
                    <img class="img-cover" src="/codebase-5/img/pexels-pixabay-416179.jpg">
                  </a>
                  <div>
                    <div class="h4 mb-1">Duck Billington</div>
                    <div class="mb-2 bg-blue-100 rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="bt-thin p-2">
              <form class="flex" action="">
                <input type="text" class="unrounded rounded-bl rounded-tl rounded-pill" id="comment-form" name="comment-form" autocomplete="off" aria-label="" placeholder="Write a comment...">
                <button aria-label="Submit" class="unrounded rounded-tr rounded-br rounded-pill">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

_Images attribution:_ robin: [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/); swans: [Trudie Roden](https://www.pexels.com/@trudie-roden-1054578); gulls: [Daniyal Ghanavati](https://www.pexels.com/@daniyal-ghanavati-10741); owl: [Eric Karits](https://www.pexels.com/@erik-karits-2093459) (from [Pexels](https://www.pexels.com)).