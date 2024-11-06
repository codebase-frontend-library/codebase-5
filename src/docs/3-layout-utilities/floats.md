---
title: "Floats"
headerTitle: "Floats"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/grid"
nextPage: "/docs/3-layout-utilities/overflows"
prevLink: "Grid"
nextLink: "Overflows"
---

Codebase has a set of responsive float utilities.

**Note:** Remember that `flex` and `grid` control the behavior of their _immediate child elements_. So, if you are trying to use `float-left` or `float-right` on an immediate child of flexbox or CSS grid system, it won’t work.

## Float right

<div class="mb-2">
  <div class="float-right">
    <div class="b-dashed p-2">This is an example of<br> <code>float-right</code></div>
  </div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>

## Float left

<div class="mb-2">
  <div class="float-left">
    <div class="b-dashed p-2">This is an example of<br> <code>float-left</code></div>
  </div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>


```html
<div>
  <div class="float-right">
    This is an example of float-right
  </div>
  Lorem, ipsum dolor sit amet...
<div>
```

## Responsive floating

* `float-right` / `xs:float-right` / `sm:float-right` / `md:float-right` / `lg:float-right`
* `float-left` / `xs:float-left` / `sm:float-left` / `md:float-left` / `lg:float-left`

## Clearfix

There’s also a `clearfix` utility if you need it. This [This w3schools article](https://www.w3schools.com/howto/howto_css_clearfix.asp) explains why you may need the “clearfix hack” sometimes.