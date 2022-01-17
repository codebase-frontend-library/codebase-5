---
title: "Image utilities"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/box-shadows"
nextPage: "/docs/5-typographic-utilities/font-stacks"
prevLink: "Box shadows"
nextLink: "Font stacks"
---

A few image manipulation classes.

**Notes:**

1. You will need to narrow and widen your browser window to see the effect of these utility class examples below.
2. For demonstration purposes, the placeholder image has been deliberately made square, with the subject (a European robin) positioned towards the center-middle.

## Cover images

* `img-cover`

This class sets the image to expand or contract to the full width _and_ height of its wrapping block. 

The proportions of the image are retained. If the actual image rectangle is different from the specified rectangle dimensions in your HTML, this will result in _some parts of the image_ overflowing but hidden. Therefore the image will seem to be “cropped”.

The image below is a square, but you will only see a middle rectangle of it.

<div class="b-dashed b-gray-900" style="height: 460px;">
  <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="Photo by Pixabay from Pexels">
</div>

_Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com)._

```html
<img class="img-cover" src="" alt="">
```

### Make your images big enough, but not too heavy

Follow these two rules when using `img-cover`:

1. Your image will need to be approximately a square. Also, ensure that no important part of the image is towards the top or bottom edge – otherwise it may get “cropped” when viewed on wider viewports.

2. Be sure to optimize the filesize of your image. You don’t want to make your visitor wait a long time  (several seconds, or more) for your image to load if they have a slow connection.

### Infographic: using `img-cover`

<div class="mb-6">
  <img src="{{ '/img/cover-images.svg' | url }}">
</div>

Some website content management systems handle “image crunching” for you. If you know your CMS does this, you can upload large images and it will generate several smaller images — and it will serve the appropriate sized image to the visitor depending on what sized device they are using (phones get serves a smaller, lighter image). 

Some CMS’s also have “lazy loading” built in — they only serve larger images when the visitor has scrolled down to where they would see the image. That way, the image is not loaded up-front, and the page will seem to load quicker.

## Contained images

* `img-contain`

This class sets the image to expand or contract to the full width _or_ height of its wrapping block.

The proportions of the image are retained. If the actual image rectangle is different from the specified rectangle dimensions in your HTML, this will result in some parts of the specified rectangle _not being occupied_ by the image (whatever is behind the image in your HTML will still be seen).

The image below is a square, therefore on wider viewports, there will be empty space to its right and left.

<div class="b-dashed b-gray-900" style="height: 460px;">
  <img class="img-contain" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="Photo by Pixabay from Pexels">
</div>

<br/>

```html
<img class="img-contain" src="" alt="">
```

**Note:** The CSS classes `img-cover` and `img-contain` are designed to work on the `<img>` tag. They may not work very well on an embedded `<svg>` (i.e. if you copy-pasted the SVG code into the HTML). But they work fine if an SVG image is inserted into a page the normal way for images: via the `<img>` tag.

## Image CSS filters

### Grayscale filter

<div style="height: 460px;">
  <img class="img-cover img-grayscale" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="Photo by Pixabay from Pexels">
</div>

```html
<img class="img-grayscale" src="" alt="">
```

### Blur filter

<div style="height: 460px;">
  <img class="img-cover img-blur" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="Photo by Pixabay from Pexels">
</div>

```html
<img class="img-blur" src="" alt="">
```

What if you don’t want the blurry edges spreading outside of the image rectangle? Then you can wrap the image in a block that has the `overflow-hidden` utility class.

<div class="overflow-hidden" style="height: 460px;">
  <img class="img-cover img-blur" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" alt="Photo by Pixabay from Pexels">
</div>

```html
<div class="overflow-hidden">
  <img class="img-blur" src="" alt="">
</div>
```