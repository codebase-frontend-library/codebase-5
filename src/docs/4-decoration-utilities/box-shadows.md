---
title: "Box shadows"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/rounded-corners"
nextPage: "/docs/4-decoration-utilities/images"
prevLink: "Rounded corners"
nextLink: "Images"
---

Box shadows can take your design to a new level. 😂

## Box shadow levels

* `bs-1` / `bs-2` / `bs-3` / `bs-4` / `bs-5`

<div class="my-6">
  <div class="flex flex-wrap flex-gap">
    <div class="sm:w-20%">
      <div class="bs-1 mb-3 p-2">bs-1</div>
    </div>
    <div class="sm:w-20%">
      <div class="bs-2 mb-3 p-2">bs-2</div>
    </div>
    <div class="sm:w-20%">
      <div class="bs-3 mb-3 p-2">bs-3</div>
    </div>
    <div class="sm:w-20%">
      <div class="bs-4 mb-3 p-2">bs-4</div>
    </div>
    <div class="sm:w-20%">
      <div class="bs-5 mb-3 p-2">bs-5</div>
    </div>
  </div>
</div>

```html
<div class="bs-1">...</div>

<div class="bs-2">...</div>

<div class="bs-3">...</div>

<div class="bs-4">...</div>

<div class="bs-5">...</div>
```

## Notes on box shadows

1. The `bs` suffix units `-1` through `-5` are meant to represent layer “lifts” along the z-axis.
2. The higher a layer is lifted from the page, the less sharpness and more spread the box shadow has. This also means that the higher the suffix, the fainter the shadow becomes as it is spread over a wider area.
3. Lighting is from the front top center, so more of the shadow is cast at the bottom the element (not pointing toward bottom-right or bottom-left).

## Box shadows on hover

Since v.5.0.6 Codebase has hover states for each of the 5 levels of box shadows. Hover the panels below to see them in action

<div class="my-6">
  <div class="flex flex-wrap flex-gap">
    <div class="sm:w-20%">
      <div class="hover:bs-1 b-thin p-2">hover:bs-1</div>
    </div>
    <div class="sm:w-20%">
      <div class="hover:bs-2 b-thin p-2">hover:bs-2</div>
    </div>
    <div class="sm:w-20%">
      <div class="hover:bs-3 b-thin p-2">hover:bs-3</div>
    </div>
    <div class="sm:w-20%">
      <div class="hover:bs-4 b-thin p-2">hover:bs-4</div>
    </div>
    <div class="sm:w-20%">
      <div class="hover:bs-5 b-thin p-2">hover:bs-5</div>
    </div>
  </div>
</div>