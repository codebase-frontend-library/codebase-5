---
title: "Buttons"
layout: layout.njk
prevPage: "/docs/6-simple-components/tables"
nextPage: "/docs/6-simple-components/badges"
prevLink: "Tables"
nextLink: "Badges"
---

Codebase `btn-*` classes enable you to apply button styles to buttons, input-buttons, and hyperlinks.

## Basic buttons

<button>Button</button> – the Codebase basic (classless) button

<input value="Submit" type="submit"> – input button

<a class="btn" role="button" href="#/">Hyperlink</a> – hyperlink dressed as a button using the `btn` class.

```html
<button>Button</button>

<input value="Input" type="submit">

<a class="btn" role="button" href="#/">Hyperlink</a>
```

**Notes:**

1. Both `<button>` and `<input type="submit">` etc. are already buttons, receiving the Codebase classless button styling. They don’t need the `btn` class. (But it will do no harm if you include it.)
2. Following recent updates in browsers, since Codebase v.5.2.5 the `btn` class, used for styling `<a href="">` links, has the same focus ring as buttons and inputs. See [Accessibility: Focus ring styling]({{ '/docs/1-getting-started/accessibility/#focus-ring-styling' | url }}).

<h2>UI colors</h2>

The following UI colors conform to [WCAG 2.1 Level AA guidelines](https://www.w3.org/TR/WCAG/#contrast-minimum) for readability: color contrast ratio 4.5:1 or better for text. See [Accessibility: Accessible UI colors]({{ '/docs/1-getting-started/accessibility/#accessible-ui-colors' | url }}).

<button class="btn-success">Success</button>
<button class="btn-warning">Warning</button>
<button class="btn-danger">Danger</button>
<button class="btn-info">Info</button>
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-tertiary">Tertiary</button>

```html
<button class="btn-success">Success</button>
<button class="btn-warning">Warning</button>
<button class="btn-danger">Danger</button>
<button class="btn-info">Info</button>
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-tertiary">Tertiary</button>
```

## States

`:disabled` or `disabled` / Normal / `:hover` / `:active` or `active`

```html
<button disabled>Default disabled</button>
<button>Default</button>
<button class="active">Default active</button>

<!-- Or -->

<a class="btn disabled" href="javascript:void(0)">Default disabled</a>
<a class="btn">Default</a>
<a class="btn active">Default active</a>
```

<button disabled>Default disabled</button>
<button>Default</button>
<button class="active">Default active</button>

<button class="btn-success" disabled>Success disabled</button>
<button class="btn-success">Success</button>
<button class="btn-success active">Success active</button>

<button class="btn-warning" disabled>Warning disabled</button>
<button class="btn-warning">Warning</button>
<button class="btn-warning active">Warning active</button>

<button class="btn-danger" disabled>Danger disabled</button>
<button class="btn-danger">Danger</button>
<button class="btn-danger active">Danger active</button>

<button class="btn-info" disabled>Info disabled</button>
<button class="btn-info">Info</button>
<button class="btn-info active">Info active</button>

<button class="btn-primary" disabled>Primary disabled</button>
<button class="btn-primary">Primary</button>
<button class="btn-primary active">Primary active</button>

<button class="btn-secondary" disabled>Secondary disabled</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-secondary active">Secondary active</button>

<button class="btn-tertiary" disabled>Tertiary disabled</button>
<button class="btn-tertiary">Tertiary</button>
<button class="btn-tertiary active">Tertiary active</button>

## Full-width buttons

Buttons are normally inline elements. However, if you want a button to be a block element, simply add `block` layout utility class. Alternatively, using `w-100%` utility class will expand the button to the full width of its containing element – achieving the same look.

`btn.block`:

<button class="btn-primary block">Block button</button>

<a class="btn btn-primary block" role="button" href="#/">Hyperlink</a>

```html
<button class="block">Block button</button>

<a class="btn block" role="button" href="#/">Hyperlink</a>
```

`btn.w-100%`:

<button class="btn-primary w-100%">100% width button</button>

<a class="btn btn-primary w-100%" role="button" href="#/">Hyperlink</a>

```html
<button class="btn-primary w-100%">100% width button</button>

<a class="btn btn-primary w-100%" role="button" href="#/">Hyperlink</a>
```

Using the `w-100% flex-start` class instead of `block` will make the button full width, but the button text will not  be centered. This may be useful if you need to have a button in a menu.

<button class="btn-primary w-100% flex-start">100% width button</button>

<a class="btn btn-primary w-100% flex-start" role="button" href="#/">Hyperlink</a>

```html
<button class="btn-primary w-100% flex-start">100% width button</button>

<a class="btn btn-primary w-100% flex-start" role="button" href="#/">Hyperlink</a>
```

Here’s something else you can do: if you have both text and an icon in the button, you can use `flex-space-between` instead of `flex-start`, to push the text and icon to opposite ends of the full-width button:

<button class="btn-primary w-100% flex-space-between">100% width button<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>

```html
<button class="btn-primary w-100% flex-space-between">
  100% width button 
  <!-- icon caret down -->
</button>
```

## Pill buttons

You can change the rounded corners of buttons using [rounded corner]({{ '/docs/4-decoration-utilities/rounded-corners' | url }}) utilities. (In the case of buttons and form elements that have built-in border radous, you don't need the `rounded` utility class.)

<button class="btn-secondary rounded-pill">Pill-shaped button</button>

```html
<button class="btn-secondary rounded-pill">Pill-shaped button</button>
```

## Text and icons

Add SVG or icon-font icons from anywhere. (The Codebase docs demonstrate SVG icons using [Phosphor Icons](https://phosphoricons.com/).

For SVG icons, set the height to match your line height (1.5rem = 24px). And within the SVG itself, set `stroke="currentColor"` to that it inherits the Codebase UI element text color.

<div class="flex flex-middle flex-wrap mb-2">
  <button class="btn-warning">Help <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="128" cy="176" r="16"></circle><path d="M128,136a28,28,0,1,0-28-28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></button>&nbsp;
  <button class="btn-danger">Reset <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-info">Menu <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg> OK</button>&nbsp;
  <button class="btn-primary">Go <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>&nbsp;
  <button class="btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg> Archive</button>&nbsp;
  <button class="btn-tertiary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="192 104 152 104 152 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="64 152 104 152 104 192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="152 192 152 152 192 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="208" x2="152" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="104 64 104 104 64 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="48" x2="104" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg> Minimize</button>
</div>

```html
<button class="btn-success">
  <!-- Icon checkmark -->
  OK
</button>
```

**Notes:**

1. Codebase buttons already have built in `display: inline-flex;` with flex items centered and middled. This should automatically line up text and icons. However, if you use an _icon font_, you may find it necessary to put the icon in its own `<span>` or `<i>` tag within the button.
2. In a situation where you have more than one button in a row (e.g. you are creating a button group or tool bar) and you are using icons and text in combination (or, different text sizes in combination), buttons can become misaligned because the text and icons have _different  baselines_. You can solve this problem by wrapping groups of buttons in `flex flex-middle`.

## Icons only

Add `btn-icon` to get square buttons.

<div class="flex flex-middle mb-2">
  <button class="btn-icon btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="128" cy="176" r="16"></circle><path d="M128,136a28,28,0,1,0-28-28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></button>&nbsp;
  <button class="btn-icon btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-icon btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-icon btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>&nbsp;
  <button class="btn-icon btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>&nbsp;
  <button class="btn-icon btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></button>&nbsp;
  <button class="btn-icon btn-tertiary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="192 104 152 104 152 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="64 152 104 152 104 192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="152 192 152 152 192 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="208" x2="152" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="104 64 104 104 64 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="48" x2="104" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>
</div>

Since `btn-icon` renders a square, you can also add  `rounded-pill` to make it a circle.

<div class="flex flex-middle mb-2">
  <button class="btn-icon rounded-pill btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="128" cy="176" r="16"></circle><path d="M128,136a28,28,0,1,0-28-28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="200" y1="200" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><path d="M93.3,104H32V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6L128,80,98.1,102.4A8.1,8.1,0,0,1,93.3,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></button>&nbsp;
  <button class="btn-icon rounded-pill btn-tertiary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="192 104 152 104 152 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="48" x2="152" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="64 152 104 152 104 192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="208" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="152 192 152 152 192 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="208" y1="208" x2="152" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="104 64 104 104 64 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline><line x1="48" y1="48" x2="104" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>
</div>

## Button sizes

**Note:** since Codebase 5.2.3, smaller buttons have smaller text, and larger buttons have larger text.

<div class="flex flex-middle mb-2"><a class="btn btn-primary btn-sm" href="#/">Small</a>&nbsp;<a class="btn btn-primary" href="#/">Default</a>&nbsp;<a class="btn btn-primary btn-lg" href="#/">Large</a></div>

<div class="flex flex-middle mb-2"><a class="btn btn-sucess btn-sm rounded-pill" href="#/">Small</a>&nbsp;<a class="btn btn-sucess rounded-pill" href="#/">Default</a>&nbsp;<a class="btn btn-sucess btn-lg rounded-pill" href="#/">Large</a></div>

```html
<a href="#/" class="btn btn-sm">Small</a>
<a href="#/" class="btn">Default</a>
<a href="#/" class="btn btn-lg">Large</a>
```

Using `btn-icon` at these different button sizes will maintain its square shape. And maintain a circle shape if used in combination with `rounded-pill`:

<button class="btn btn-sm btn-icon rounded-pill">A</button>
<button class="btn btn-icon rounded-pill">B</button>
<button class="btn btn-lg btn-icon rounded-pill">C</button>

```html
<button class="btn btn-sm btn-icon rounded-pill">A</button>
<button class="btn btn-icon rounded-pill">B</button>
<button class="btn btn-lg btn-icon rounded-pill">C</button>
```

**Note:** The font-size change for smaller or larger buttons will affect icon fonts but it does not affect SVG icons.

<a class="btn btn-secondary btn-sm btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>&nbsp;
<a class="btn btn-secondary btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>&nbsp;
<a class="btn btn-secondary btn-lg btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>

If you want smaller or larger icons, then you must make them smaller or larger yourself. Examples using [Phosphor Icons](https://phosphoricons.com/) at 18px, 24px, and 36px size:

<div class="mb-2 flex flex-middle gap-1">
<a class="btn btn-secondary btn-sm btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>
<a class="btn btn-secondary btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>
<a class="btn btn-secondary btn-lg btn-icon" href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg></a>
</div>

## Combos

A row of buttons would touch each other (buttons are ordinarily inline elements), unless you leave spaces between them. Leave no spaces if you want the buttons to touch each other, as in a “tool bar”. Or if you find it necessary, wrap them in a `flex`.

You can remove some of the rounded corners using some `unrounded` utilities (see [rounded corners]({{ '/docs/4-decoration-utilities/rounded-corners' | url }})).

<div class="flex flex-center mt-6 mb-2">
<button class="btn-icon unrounded rounded-bl rounded-tl rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path></svg>
</button>
<button class="btn-icon unrounded rounded-tr rounded-br rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="152" y1="56" x2="104" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="200" x2="144" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="112" y1="56" x2="192" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
&nbsp;
<button class="btn-icon unrounded rounded-bl rounded-tl rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="108" x2="168" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="188" x2="168" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
<button class="btn-icon unrounded">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="108" x2="192" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="64" y1="188" x2="192" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
<button class="btn-icon unrounded rounded-tr rounded-br rounded-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="68" x2="216" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="88" y1="108" x2="216" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="40" y1="148" x2="216" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><line x1="88" y1="188" x2="216" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
&nbsp;
<button class="btn-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223,123.5l-96.2,96.2a16.1,16.1,0,0,1-22.6,0L19.3,134.8a16.1,16.1,0,0,1,0-22.6L115.5,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><circle cx="124" cy="116" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><path d="M204,216c0-20,20-40,20-40s20,20,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></path><line x1="107" y1="99" x2="37.9" y2="29.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg>
</button>
</div>

```html
<button class="btn-icon unrounded rounded-bl rounded-tl rounded-sm">
  <!-- left-align icon -->
</button>
<button class="btn-icon unrounded">
  <!-- center icon -->
</button>
<button class="btn-icon unrounded rounded-tr rounded-br rounded-sm">
  <!-- right-align icon -->
</button>
```

Go large – to grab people’s attention:

<div class="w-xs mx-auto mb-2">
  <form class="flex">
    <input id="email-example" class="form-element-lg b-thick b-success unrounded rounded-bl rounded-tl rounded-pill p-3 t-lg bg-green-200" name="examplename" placeholder="Your email" type="email">
    <button aria-label="Submit" type="submit" class="btn btn-success btn-lg b-thick b-success unrounded rounded-tr rounded-br rounded-pill p-3 t-lg">Subscribe</button>
  </form>
</div>

```html
<form class="flex">
  <input 
    id="email-example" 
    class="form-element-lg b-thick b-success unrounded rounded-bl rounded-tl rounded-pill p-3 t-lg bg-green-200" 
    name="examplename" 
    placeholder="Your email" 
    type="email"
  >
  <button 
    aria-label="Submit" 
    type="submit" 
    class="btn btn-success btn-lg b-thick b-success unrounded rounded-tr rounded-br rounded-pill p-3 t-lg"
  >
    Subscribe
  </button>
</form>
```

Go small – to fit a form into a menubar, or into a table cell:

<div class="w-xxs mx-auto mb-2">
  <form class="flex" action="">
    <input type="search" class="form-element-sm b-primary unrounded rounded-bl rounded-tl rounded-sm bg-purple-100" id="site-search" name="site-search" autocomplete="off" aria-label="" placeholder="Search">
    <button aria-label="Search" class="btn btn-primary btn-icon btn-sm unrounded rounded-tr rounded-br rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line></svg></button>
  </form>
</div>

```html
<input 
  type="search" 
  class="form-element-sm b-primary unrounded rounded-bl rounded-tl rounded-sm bg-purple-100" 
  id="site-search" 
  name="site-search" 
  autocomplete="off" 
  aria-label="" 
  placeholder="Search"
>
<button 
  aria-label="Search"
  class="btn btn-primary btn-icon btn-sm unrounded rounded-tr rounded-br rounded-sm"
>
  <!-- Search icon -->
</button>
```

See [form elements]({{ 'http://localhost:8080/codebase-5/docs/2-classless-basics/form-elements' | url }}) and [form utilities]({{ 'http://localhost:8080/codebase-5/docs/4-decoration-utilities/forms' | url }})

## Outline buttons

Outline buttons (sometimes called “ghost buttons”) can be created using utility classes.

Do this:

1. Put `bg-transparent` to the button, in addition to e.g. `btn-success`
2. Put a text color on the button, to override the UI white (in this example, `t-success`).

The button border and the hover states are taken care of already (in this example, by `btn-success`).

Example:

`btn btn-success bg-transparent t-success`:

<a class="btn btn-success bg-transparent t-success" href="#/">Find out more&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"></polyline></svg></a>

```html
<a class="btn btn-success flex bg-transparent t-success" href="#/">Find out more →</a>
```