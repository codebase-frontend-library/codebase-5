---
title: "Media"
layout: layout.njk
prevPage: "/docs/2-classless-basics/form-elements"
nextPage: "/docs/3-layout-utilities/containers"
prevLink: "Form elements"
nextLink: "Containers"
---

Various kinds of media can be embedded into web pages, such as images, audio, and video.

## Images

In Codebase, the various embedded image tags (`img`, `svg`, `picture`, `canvas`, and `video`) are set as [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements), with a max-width of 100%.

<img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="250" height="250" alt="Photo by Pixabay from Pexels">

_Photo by [Pixabay](https://www.pexels.com/photo/animal-avian-beak-bird-416179/) from [Pexels](https://www.pexels.com)._

```html
<img src="" width="" height="" alt="">
```

The `max-width: 100%` makes images “responsive”, so that oversized images shrink to fit within containers (or viewports) narrower than the actual image width. This is done so that they don’t break your webpage layout.</p>

The image below is wider than this column of text, but it is constrained to downsize proportionately to the width of the wrapper.

<img src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="736" height="480" loading="lazy" alt="Photo by Erik Karits from Pexels">

_Photo by [Eric Karits](https://www.pexels.com/@erik-karits-2093459) from [Pexels](https://www.pexels.com)._

```html
<img src="" width="" height="" loading="lazy" alt="">
```

### Linked images

<a href="#/" class="inline-block"><img src="{{ '/img/pexels-pixabay-416179.jpg' | url }}" width="250" height="250" alt="Photo by Pixabay from Pexels"></a>

If an `<img src="">` is a child of an `<a href="">`, then the image will become slightly transparent (using the opacity filter) when the `<a href="">` has `:focus-visible`, allowing its amber background color to show through. See [accessibility focus styling]({{ "/docs/1-getting-started/accessibility/#focus-state-styling" | url }}).

### Lazy loading

As in the example above, you can add the attribute `loading="lazy"` to images, especially if they are big and lower down the webpage (below the “fold”). Then the visitor’s browser can defer loading the image until the visitor has scrolled down to see it. This will improve your page’s performance, making it seem to load quicker.

You must also set the image width and the height attributes, because the visitor’s browser needs these so that it can lay out the page correctly before the image is called and loaded.

### Figure images

An image with a `<figcaption>`, all enclosed in `<figure>`:

<figure>
  <img src="{{ '/img/pexels-erik-karits-3738673.jpg' | url }}" width="736" height="480" loading="lazy" alt="Photo by Erik Karits from Pexels">
  <figcaption>Photo by <a href="https://www.pexels.com/@erik-karits-2093459">Eric Karits</a> from <a href="https://www.pexels.com">Pexels</a>.</figcaption>
</figure>

```html
<figure>
  <img src="" width="" height="" loading="lazy" alt=""> 
  <figcaption>Here is the caption for the image above.</figcaption>
</figure>
```

## Audio

Audio tags obtain their special controls from the web browser. What they look like, and what control they contain, depends on the browser and the operating system.

Codebase sets the width of audio controls to 100%. Other than that, what you will see below is your browser’s default styling for these web components.

<audio controls="">audio</audio>

```html
<audio controls="">audio</audio>
```

## Video

Video tags obtain their special controls from the web browser. What they look like, and what control they contain, depends on the browser and the operating system.

Codebase sets the width of video controls to 100%. Other than that, what you will see below is your browser’s default styling for these web components.

<video controls="">video</video>

```html
<video controls="">video</video>
```