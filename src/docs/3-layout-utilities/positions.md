---
title: "Block positions"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/blocks"
nextPage: "/docs/3-layout-utilities/dimensions"
prevLink: "Blocks"
nextLink: "Dimensions"
---

There may be some situations where you want to re-position a block out of the normal document flow.

## Types of block positioning

Codebase has utility classes for several types of block positioning:

* `relative`
* `absolute`
* `fixed`
* `sticky`
* `static` (default, and for a reset)

Each of the above affect blocks at all viewport widths. Plus there are `xs:`, `sm:`, `md:`, and `lg:` responsive tiers of each. 

### Z-index layers

There are several z-index utilities, that can be used for layering (alongside `absolute`, `fixed`, and `sticky`):

* `z-index-1` / `z-index-2` / `z-index-3` 
* `z-index-997` / `z-index-998` / `z-index-999`

The lower `z-index-*` utilities (1, 2, and 3) can be used for dropdown panels, stacking hero text (title, call-to-action, etc.) over a hero image, tabs, etc.

The upper `z-index-*` utilities (997, 998 and 999) can be used for modals, offcanvas sidebars, etc.

## Positioning absolute and fixed elements

In conjunction with the `absolute` and `fixed` positioning utilities above, you can also control where the positioned element will be placed: in the `top`, `right`, `bottom`, or `left` of its parent element.

<div class="my-6 b-dashed">
  <div class="aspect-ratio-4x3 relative">
    <div class="box">
      <div class="absolute top w-100% flex flex-center">
        <label class="label bg-blue-200">absolute top</label>
      </div>
      <div class="absolute right h-100% flex flex-middle">
        <label class="label bg-red-200">absolute right</label>
      </div>
      <div class="absolute bottom w-100% flex flex-center">
      <label class="label bg-teal-200">absolute bottom</label>
        </div>
      <div class="absolute left h-100% flex flex-middle">
        <label class="label bg-green-200">absolute left</label>
      </div>
    </div>
  </div>
</div>

Each of the above affect positioning at all viewport widths. Plus there are `xs:`, `sm:`, `md:`, and `lg:` responsive tiers of each.

```html
<div class="aspect-ratio-4x3 relative">
  <div class="box">
    <div class="absolute top w-100% flex flex-center">
      <label class="label bg-blue-200">absolute top</label>
    </div>
    <div class="absolute right h-100% flex flex-middle">
      <label class="label bg-red-200">absolute right</label>
    </div>
    <div class="absolute bottom w-100% flex flex-center">
    <label class="label bg-teal-200">absolute bottom</label>
      </div>
    <div class="absolute left h-100% flex flex-middle">
      <label class="label bg-green-200">absolute left</label>
    </div>
  </div>
</div>
```

## Position sticky

`sticky` is used for making e.g. sidebar blocks or menu bars “stick” to the top of their containing block.

<div class="my-6">
<div class="grid xs:equal-3-cols b-dashed pl-1">
<div class="xs:cols-1-2">
<p>To see <code>sticky</code> being sticky, you will need to use it inside of a block that’s taller than the sticky element, or else it will not take effect.</p>
<p>There are two ways of setting the breakpoint width of when <code>sticky</code> becomes sticky:</p>
<ol>
<li>Use one of the responsive sticky classes (<code>xs:sticky</code>, <code>sm:sticky</code>, <code>md:sticky</code> or <code>lg:sticky</code>
<li>Alternatively, involve the <code>sticky</code> within a <code>flex</code> or <code>grid</code> layout</li>
</ol>
<p><em>You are looking at <a href="{{ '/docs/3-layout-utilities/grid' | url }}">grid</a> being demonstrated here.</em></p>
<p class="mb-0">There are situations when you will want to prevent <code>sticky</code> doing its thing. E.g. if it is a sticky sidebar element, and the visitor is viewing your webpage on a phone or a screen that’s too narrow for the <code>sticky</code> to behave that way. For example, this demo has a sticky element that’s deliberately immobilized on small viewports – narrower than the grid system’s <code>md</code> breakpoint width (1024px default).</p>
</div>
<div class="xs:col-3">
<div class="sticky bg-amber-300 p-cell" style="top: 40px;">
Look, I’m sticky on <code class="b-thin">xs</code> screens up!
</div>
</div>
</div>
</div>

```html
<div class="grid xs:equal-3-cols">
  <div class="xs:cols-1-2" style="height: 500px">
    Main content ...
  </div>
  <div class="xs:col-3">
    <div class="sticky">
      Look, I’m sticky on small screens up!
    </div>
  </div>
</div>
```

## Notes on position sticky

1. the example HTML code snippet above has some added height to the main column, so that if you copy-paste it, this will prove that it’s working. Delete the `style="height: 500px"` when you no longer need it.)
2. You may also need to add extra `top` distance in your CSS, to compensate if you have a `position: fixed;` element above the sticky element in your own design. (This has been necessary in the demo above, so that the sticky element isn’t tucked under the docs top-bar.)