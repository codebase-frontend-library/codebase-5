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
  <img class="img-cover" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
</div>

_Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com)._

```html
<img class="img-cover" src="" width="" height="" loading="lazy" alt="">
```

### Make your images big enough, but not too heavy

Follow these two rules when using `img-cover`:

1. If your image is approximately a square, with the focal point toward the center, you can use `img-cover` as-is. Alternatively, if the focal point of the image is off to one side or corner, you may need to add a [cover image position](#cover-image-positions) utility class.

2. Be sure to optimize the filesize of your image. You don’t want to make your visitor wait a long time  (several seconds, or more) for your image to load if they have a slow connection.

Many web platforms have _image processors_ built in, or added via a plugin. For example: 

* The [Eleventy](https://www.11ty.dev) ststic site generator has an [Eleventy-image plugin](https://www.11ty.dev/docs/plugins/image/)
* [WordPress](https://wordpress.org) has a [built-in image processor](https://www.wpbeginner.com/beginners-guide/wordpress-image-sizes-beginners-guide/) for automatic image resizing and loading for different sized devices (and lazy loading). Plus, there are several image-optimizer plugins.
* [HubSpot](https://www.hubspot.com) has a [built-in image processor](https://knowledge.hubspot.com/files/automatic-image-resizing-on-hubspot-content)  for automatic image resizing and loading for different sized devices (and lazy loading).

<div>
</div>

### Infographic: using `img-cover`

<div class="mb-6">
  <img src="{{ '/img/cover-images.svg' | url }}" width="1539" height="890">
</div>

Some website content management systems handle “image crunching” for you. If you know your CMS does this, you can upload large images and it will generate several smaller images — and it will serve the appropriate sized image to the visitor depending on what sized device they are using (phones get serves a smaller, lighter image). 

Some CMS’s also have “lazy loading” built in — they only serve larger images when the visitor has scrolled down to where they would see the image. That way, the image is not loaded up-front, and the page will seem to load quicker.

### Cover image positions

`img-cover` defaults to positining the image from its centre-middle, so that all four edges (top, right, bottom, left) could be invisible outside of the constrained rectangle.

So, you would want the most important part of the image to be in the centre-middle, or else your visitors could lose part of it. Or, you may intend to shoft the visitor’s eye to different parts of the image, depending on what you are fixating on.

Since v.5.0.9 Codebase has `img-cover-*` positioning utility classes, using [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).

* `img-cover img-top-right`
* `img-cover img-right`
* `img-cover img-bottom-right`
* `img-cover` – image is centred and middled (default)
* `img-cover img-bottom`
* `img-cover img-bottom-left`
* `img-cover img-left`
* `img-cover img-top-left`

The same tall image, positioned vertically three ways:

<div class="grid gap xs:equal-2-cols mb-3">
  <div>
    <img src="{{ '/img/pexels-andrew-hawkes-5063027-tall.jpg' | url}}">
  </div>
  <div>
    <div>
      <p class="mb-1"><code>img-cover img-cover-top</code></p>
      <div class="mb-1 aspect-ratio-2x1 relative">
        <img class="box img-cover img-cover-top" src="{{ '/img/pexels-andrew-hawkes-5063027-tall.jpg' | url}}">
      </div>
    </div>
    <div>
      <p class="mb-1"><code>img-cover</code></p>
      <div class="mb-1 aspect-ratio-2x1 relative">
        <img class="box img-cover" src="{{ '/img/pexels-andrew-hawkes-5063027-tall.jpg' | url}}">
      </div>
    </div>
    <div>
      <p class="mb-1"><code>img-cover img-cover-bottom</code></p>
      <div class="aspect-ratio-2x1 relative">
        <img class="box img-cover img-cover-bottom" src="{{ '/img/pexels-andrew-hawkes-5063027-tall.jpg' | url}}">
      </div>
    </div>
  </div>
</div>

_Photo by [Andrew Hawkes](https://www.pexels.com/photo/farmhouse-on-green-grass-field-under-the-blue-sky-5063027/) from [Pexels](https://www.pexels.com)._

The same wide image, positioned horizontally three ways:

<p class="mb-1"><img src="{{ '/img/pexels-pixabay-206762-short.jpg' | url}}"></p>

<div class="grid gap xs:equal-3-cols mb-3">
  <div>
    <p class="mb-1"><code>img-cover img-cover-left</code></p>
    <div class="aspect-ratio-1x1 relative">
      <img class="box img-cover img-cover-left" src="{{ '/img/pexels-pixabay-206762-short.jpg' | url}}">
    </div>
  </div>
  <div>
    <p class="mb-1"><code>img-cover</code></p>
    <div class="aspect-ratio-1x1 relative">
      <img class="box img-cover" src="{{ '/img/pexels-pixabay-206762-short.jpg' | url}}">
    </div>
  </div>
  <div>
    <p class="mb-1"><code>img-cover img-cover-right</code></p>
    <div class="aspect-ratio-1x1 relative">
      <img class="box img-cover img-cover-right" src="{{ '/img/pexels-pixabay-206762-short.jpg' | url}}">
    </div>
  </div>
</div>

_Photo by [Pixabay](https://www.pexels.com/photo/ancient-architecture-attraction-blue-sky-206762/) from [Pexels](https://www.pexels.com)._

_Not exemplified here: corner positioning._

## Contained images

* `img-contain`

This class sets the image to expand or contract to the full width _or_ height of its wrapping block.

The proportions of the image are retained. If the actual image rectangle is different from the specified rectangle dimensions in your HTML, this will result in some parts of the specified rectangle _not being occupied_ by the image (whatever is behind the image in your HTML will still be seen).

The image below is a square, therefore on wider viewports, there will be empty space to its right and left.

<div class="b-dashed b-gray-900" style="height: 460px;">
  <img class="img-contain" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
</div>

<br/>

```html
<img class="img-contain" src="" width="" height="" loading="lazy" alt="">
```

**Note:** The CSS classes `img-cover` and `img-contain` are designed to work on the `<img>` tag. They may not work very well on an embedded `<svg>` (i.e. if you copy-pasted the SVG code into the HTML). But they work fine if an SVG image is inserted into a page the normal way for images: via the `<img>` tag.

## Image CSS filters

### Grayscale filter

<div style="height: 460px;">
  <img class="img-cover img-grayscale" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
</div>

```html
<img class="img-grayscale" src="" width="" height="" loading="lazy" alt="">
```

### Blur filter

<div style="height: 460px;">
  <img class="img-cover img-blur" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
</div>

```html
<img class="img-blur" src="" width="" height="" loading="lazy" alt="">
```

What if you don’t want the blurry edges spreading outside of the image rectangle? Then you can wrap the image in a block that has the `overflow-hidden` utility class.

<div class="overflow-hidden" style="height: 460px;">
  <img class="img-cover img-blur" src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="600" height="600" loading="lazy" alt="Photo by Pixabay from Pexels">
</div>

```html
<div class="overflow-hidden">
  <img class="img-blur" src="" width="" height="" loading="lazy" alt="">
</div>
```