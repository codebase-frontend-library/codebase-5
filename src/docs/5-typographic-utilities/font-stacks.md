---
title: "Font stacks"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/forms"
nextPage: "/docs/5-typographic-utilities/headings"
prevLink: "Form utilities"
nextLink: "Headings"
---

Codebase contains several text utilites for font stacks, that are either directly coded or aliased from three default font families. These are set in the SCSS default-variables file.

Since v.5.0.6, Codebase’s font stacks have been based on Tom MacWright’s [System Font Stacks](https://systemfontstack.com) (but not including the emoji fonts).

## Default font stacks

### Base font stack (sans-serif)

The HTML `<body>` tag has `$font-stack-base` that is a common sans-serif font stack. This is what most of Codebase looks like, by default.

```css
$font-stack-base:
  -apple-system,
  BlinkMacSystemFont,
  "Avenir Next",
  Avenir,
  "Segoe UI",
  "Helvetica Neue",
  Helvetica,
  Cantarell,
  Ubuntu,
  Roboto,
  Noto,
  Arial,
  sans-serif !default;
```

<p class="b-thin p-3"><code>$font-stack-base</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

Codebase also carries a sans-serif font stack in the SCSS variable `$font-stack-sans-serif`. But by default, it is aliased from `$font-stack-base` – it’s the same.

Unless you change things in your design, `$font-stack-sans-serif` is only available via the text utility class `t-sans-serif`.

### Monospaced font stack

A few elements such as `<code>` have a monospaced font stack, `$font-stack-mono`.

```css
$font-stack-mono:
  Menlo,
  Consolas,
  Monaco,
  "Liberation Mono",
  "Lucida Console",
  monospace !default;
```

<p class="b-thin p-3 t-mono"><code>$font-stack-mono</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

Unless you change things in your design, `$font-stack-mono` is only available via the text utility class `t-mono`.

### Serif font stack

There is also a default serif `$font-stack-serif` but Codebase does not apply it to any classless HTML elements.

Unless you change things in your design, `$font-stack-serif` is only available via the text utility class `t-serif`.

```css
$font-stack-serif:
  "Iowan Old Style",
  "Apple Garamond",
  Baskerville,
  "Times New Roman",
  "Droid Serif",
  Times,
  "Source Serif Pro",
  serif !default;
```

<p class="b-thin p-3 t-serif"><code>$font-stack-serif</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

### User interface (UI) font stack

User interface elements (form inputs, labels, buttons, etc.) have `$font-stack-ui` applied, but it is aliased from `$font-stack-base`.

Only when you diverge from the Codebase default, applying different font-stacks for `$font-stack-ui` and `$font-stack-base`, will you see a difference.

Besides HTML tags for buttons, form elements and labels, `$font-stack-ui` is available via the text utility class `t-ui`.

### Other aliased font stacks

`$font-stack-sans-serif` and `$font-stack-brand` are available in the default variables, but by default these are aliased to `$font-stack-base`. So at the start, these look no different. They are ready for you to customize in your design.

`$font-stack-prose` is also available, but by default it is aliased to `$font-stack-serif`.

Unless you change things in your design, these last three font stacks are only available through using the following three text utility classes. So, they don’t add much at all to the default `codebase.css` payload:

* `t-sans-serif`
* `t-brand`
* `t-prose`

## How the font stacks are used in Codebase

<div class="overflow-x mb-3">
<table class="table">
  <thead>
    <tr>
      <th>SCSS variable</th>
      <th>Font family (defaults)</th>
      <th>Applied to HTML tags (classless basics)</th>
      <th>Text utility class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$font-stack-base</code></td>
      <td><code>ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif</code></td>
      <td><code>&lt;body&gt;</code> Therefore everything gets this by default.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td><code>$font-stack-mono</code></td>
      <td><code>SFMono-Regular, Menlo, Consolas, "Liberation Mono", "Lucida Console", "Courier New", monospace</code></td>
      <td><code>&lt;code&gt;</code> <code>&lt;kbd&gt;</code> <code>&lt;samp&gt;</code></td>
      <td><code>t-mono</code></td>
    </tr>
    <tr>
      <td><code>$font-stack-serif</code</td>
      <td><code>"Hoefler Text", Cambria, "Times New Roman", "Liberation Serif", Times, serif</code></td>
      <td>None</td>
      <td><code>t-serif</code></td>
    </tr>
    <tr>
      <td><code>$font-stack-ui</code</td>
      <td>Aliased from <code>$font-stack-base</code></td>
      <td><code>&lt;label&gt;</code> <code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code> <code>&lt;select&gt;</code> <code>&lt;button&gt;</code></td>
      <td><code>btn</code><br> <code>badge</code><br> <code>label</code><br> <code>t-ui</code></td>
    </tr>
    <tr>
      <td class="t-nowrap"><code>$font-stack-sans-serif</code></td>
      <td>Aliased from <code>$font-stack-base</code></td>
      <td>None</td>
      <td><code class="t-nowrap">t-sans-serif</code></td>
    </tr>
    <tr>
      <td><code>$font-stack-brand</code</td>
      <td>Aliased from <code>$font-stack-base</code></td>
      <td>None</td>
      <td><code>t-brand</code></td>
    </tr>
    <tr>
      <td><code>$font-stack-prose</code</td>
      <td>Aliased from <code class="t-nowrap">$font-stack-serif</code></td>
      <td>None</td>
      <td><code>t-prose</code></td>
    </tr>
  </tbody>
</table>
</div>



