---
title: "Forms"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/images"
nextPage: "/docs/5-typographic-utilities/font-stacks"
prevLink: "Images"
nextLink: "Font Stacks"
---

## Form element utility classes

There are only two _form_ utility classes, and these are:

* `form-element-sm` (can be paired with `btn-sm`)
* `form-element-lg` (can be paired with `btn-lg`)

**Note:** since Codebase 5.2.3, smaller form elements have smaller text, and larger form elements have larger text.

Examples:

<div class="grid xs:equal-3-cols col-gap-3">
  <p class="mb-1"><code>form-element-sm</code></p>
  <p class="mb-1">Default</p>
  <p class="mb-1"><code>form-element-sm</code></p>
  <p><input class="form-element-sm" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>
  <p><input id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>
  <p><input class="form-element-lg" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>
</div>

```html
<input class="form-element-sm" id="text-example" name="examplename" placeholder="Example text input field" type="text">
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">
<input class="form-element-lg" id="text-example" name="examplename" placeholder="Example text input field" type="text">
```

## Other things you can do with forms

Besides the form-element classes above, you can change [border]({{ '/docs/4-decoration-utilities/borders' | url }}) thickness, background and border [colors]({{ '/docs/4-decoration-utilities/colors' | url }}), and [rounded corners]({{ '/docs/4-decoration-utilities/rounded-corners' | url }}).

Go large – to grab people’s attention: 

<div class="w-xs mx-auto mb-2">
  <form class="flex">
    <input id="email-example" class="form-element-lg b-thick b-success rounded-pill unrounded-right p-3 t-lg bg-green-200" name="examplename" placeholder="Your email" type="email">
    <button aria-label="Submit" type="submit" class="btn btn-success btn-lg b-thick b-success rounded-pill unrounded-left p-3 t-lg">Subscribe</button>
  </form>
</div>

```html
<input 
  id="email-example" 
  class="form-element-lg b-thick b-success rounded-pill unrounded-right p-3 t-lg bg-green-200" 
  name="examplename" 
  placeholder="Your email" 
  type="email"
>
<button 
  aria-label="Submit" 
  type="submit" 
  class="btn btn-success btn-lg b-thick b-success rounded-pill unrounded-left p-3 t-lg"
>Subscribe</button>
```

Go small – to fit a form into a menubar, or into a table cell:

<div class="w-xxs mx-auto mb-2">
  <form class="flex" action="">
    <input type="search" class="form-element-sm b-primary unrounded-right bg-purple-100" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search">
    <button aria-label="Search" class="btn btn-primary btn-icon btn-sm unrounded-left"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>
  </form>
</div>

```html
<input 
  type="search" 
  class="form-element-sm b-primary unrounded-right bg-purple-100" 
  id="site-search" 
  name="site-search" 
  autocomplete="off" 
  aria-label="" 
  placeholder="Search"
>
<button 
  aria-label="Search"
  class="btn btn-primary btn-icon btn-sm unrounded-left"
>
  <!-- Search icon -->
</button>
```

See [buttons]({{ '/docs/6-simple-components/buttons' | url }}).