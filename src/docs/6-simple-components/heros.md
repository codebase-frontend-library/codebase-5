---
title: "Heros"
layout: layout.njk
prevPage: "/docs/6-simple-components/menus"
nextPage: "/docs/6-simple-components/buttons"
prevLink: "Menus"
nextLink: "Buttons"
---

Creating a hero image with a text overlay is simple using Codebase utilities.

## Hero example

<div class="mb-3 aspect-ratio-16x9 relative">
  <img class="box img-cover" src="{{ '/img/pexels-oleg-magni-1837592.jpg' | url }}" alt="Photo by Oleg Magni from Pexels">
  <div class="z-index-2 flex flex-column flex-center flex-middle">
    <div class="m-4 p-2 xs:p-6 bg-white-glass-3 t-center t-lg">
      <h1 class="t-semibold t-black">Overlay title</h1>
      <p class="mb-0 t-black">Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>

_Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [Pexels](https://www.pexels.com)._

```html
<div class="aspect-ratio-16x9 relative">
  <img class="box img-cover" src="" alt="">
  <div class="z-index-2 flex flex-column flex-center flex-middle">
    <div class="m-4 p-2 xs:p-6 bg-white-glass-3 t-center t-lg">
      <h1 class="t-semibold t-black">Overlay title</h1>
      <p class="mb-0 t-black">Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</div>
```

## Notes on heros

1. You can set the dimensions of your hero component to suit your needs. But an easy way to do it is to use a Codebase [aspect ratio wrapper]({{ '/docs/4-layout-utilities/dimensions/*aspect-ratio-wrappers' | url }}) utility class, as you can see in the example above. Alternatively you could set a `min-height` on the wrapper.
2. When necessary on small viewports, `aspect-ratio-*` wrappers will _vertically deform_ to accommodate the content of their immediate child element – so, if you (or a subsequent content creator) puts in a title or other stuff that is longer or more than you expected, it doesn’t get messed up pn small devices. 
3. The hero image needs CSS classes `box img-cover`.
4. The overlay also needs `box`. Then you can use [flexbox]({{ '/docs/3-layout-utilities/flexbox' | url }}) to position your overlay panel anywhere you want – either centered and middled as in this example, or to and edge or corner.
5. You will need a big enough image, of course, with its most important content in its center and middle, so that it is not “cropped off”. Any the image will need to be square or approximately square. For the reason why – see [cover images]({{ '/docs/4-decoration-utilities/images/#cover-images' | url }}).
6. Also, you will need to figure out what colour is best for the text over your choice of image, for the obtaining the best legibility. Usually I use the `t-black` utility over light images and `t-white` over dark images. And, if you are struggling to read your hero title and/or other text over your image, there are a few options that you can explore:
    * Darken your image behind white text, or lighen your image behind black text.
    * Make your image grayscale (or other color scale), or blurred. Codebase contains grayscale and blur [CSS filters]({{ '/docs/4-decoration-utilities/images/#css-filters' | url }}).
    * Give your text a text shadow. (The text shadow needs to be dark over a dark image and light over a light image.)
    * Try a Codebase [glass]({{ '/docs/4-decoration-utilities/glass' | url }}) overlay behind your text.