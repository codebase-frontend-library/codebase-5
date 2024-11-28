---
title: "Media objects"
layout: layout.njk
prevPage: "/docs/6-simple-components/tables"
nextPage: "/docs/6-simple-components/cards"
prevLink: "Tables"
nextLink: "Cards"
---

Traditional “media objects” (à la <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">Nicole Sullivan</a>) can be built entirely using Codebase utility classes.

## Simple example

<div class="flex">
  <a class="square mr-2" href="#/">
    <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Placeholder">
  </a>
  <div>
    <div class="h4 mb-1">Name or Title</div>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <p><a class="btn" href="">Read more</a></p>
  </div>  
</div>

_Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com)._

```html
<div class="flex">
  <a class="square mr-2" href="">
    <img src="" width="" height="" loading="lazy" alt="">
  </a>
  <div>
    <div class="h4 mb-1">Name or Title</div>
    <p>A message or some descriptive text...</p>
    <p><a class="btn" href="">Read more</a></p>
  </div>  
</div>
```

## Fancy example

Example with image on the right, and some other decoration:

<div class="my-6">
<div class="flex flex-row-reverse b-thin rounded rounded-lg p-2">
  <a class="square rounded overflow-clip" href="#/">
    <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="placeholder">
  </a>
  <div class="mr-2">
    <div class="h4 mb-1">Name or Title</div>
    <p class="mb-0">Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
  </div>
</div>
</div>

## Nesting media objects

Media objects can easily be modified as required, and nested. For example:

<div class="flex">
  <a class="mr-2 square-sm b-thin rounded rounded-pill overflow-clip" href="#/">
    <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Placeholder">
  </a>
  <div>
    <div class="h4 mb-1"><a class="t-underline-hover-only t-gray-900 hover:t-black" href="">Freda Blogworthy</a></div>
    <div class="mb-2 bg-blue-100 rounded-tr rounded-br rounded-bl rounded-lg unrounded-top-left p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
    <div class="flex">
      <a class="mr-2 square-sm b-thin rounded rounded-pill overflow-clip" href="#/">
        <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Placeholder">
      </a>
      <div>
        <div class="h4 mb-1"><a class="t-underline-hover-only t-gray-900 hover:t-black" href="">Thomas Wingman</a></div>
        <div class="mb-2 bg-blue-100 rounded-tr rounded-br rounded-bl rounded-lg p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
      </div>
    </div>
    <div class="flex">
      <a class="mr-2 square-sm b-thin rounded rounded-pill overflow-clip" href="#/">
        <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Placeholder">
      </a>
      <div>
        <div class="h4 mb-1"><a class="t-underline-hover-only t-gray-900 hover:t-black" href="">Duck Billington</a></div>
        <div class="mb-2 bg-blue-100 rounded-tr rounded-br rounded-bl rounded-lg p-2">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</div>
      </div>
    </div>
  </div>
</div>