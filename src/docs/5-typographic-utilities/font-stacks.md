---
title: "Font stacks"
layout: layout.njk
prevPage: "/docs/4-decoration-utilities/forms"
nextPage: "/docs/5-typographic-utilities/making-text-bigger"
prevLink: "Form utilities"
nextLink: "Making text bigger"
---

Codebase contains several text utilites for font stacks, that are either directly coded or aliased from three default font families. These are set in the SCSS default-variables file.

Since v.5.3.0, Codebase has had three simple modern font stacks.

## Default font stacks

### Base font stack (sans-serif)

The HTML `<body>` tag has the CSS variable `--font-base` that sets a common sans-serif font stack. This is what most of Codebase looks like, by default.

```css
:root {
  --font-base: ui-sans-serif, system-ui, sans-serif;
}
```

<p class="b-thin p-3"><code>--font-base</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

Codebase also carries a sans-serif font stack in the SCSS variable `--font-sans-serif`. But by default, it is aliased from `--font-base` – it’s the same.

Unless you change things in your design, `--font-sans-serif` is only available via the text utility class `t-sans-serif`.

### Monospaced font stack

A few elements such as `<code>` have a monospaced font stack, `--font-mono`.

```css
:root {
  --font-mono: ui-monospace, Menlo, Consolas, "Courier New", monospace;
}
```

<p class="b-thin p-3 t-mono"><code>--font-mono</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

Unless you change things in your design, `--font-mono` is only available via the text utility class `t-mono`.

### Serif font stack

There is also a default serif `--font-serif` but Codebase does not apply it to any classless HTML elements.

Unless you change things in your design, `--font-serif` is only available via the text utility class `t-serif`.

```css
:root {
  --font-serif: ui-serif, Cambria, "Times New Roman", Times, serif;
}
```

<p class="b-thin p-3 t-serif"><code>--font-serif</code><br><br>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

### User interface (UI) font stack

User interface elements (form inputs, labels, buttons, etc.) have `--font-ui` applied, but it is aliased from `--font-base`.

Only when you diverge from the Codebase default, applying different font-stacks for `--font-ui` and `--font-base`, will you see a difference.

Besides HTML tags for buttons, form elements and labels, `--font-ui` is available via the text utility class `t-ui`.

### Other aliased font stacks

`--font-sans-serif` and `--font-brand` are available in the default variables, but by default these are aliased to `--font-base`. So at the start, these look no different. They are ready for you to customize in your design.

`--font-prose` is also available, but by default it is aliased to `--font-serif`.

Unless you change things in your design, these last three font stacks are only available through using the following three text utility classes. So, they don’t add much at all to the default `codebase.css` payload:

* `t-sans-serif`
* `t-brand`
* `t-prose`

## How the font stacks are used in Codebase

<div class="overflow-x mb-2">
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
      <td><code>--font-base</code></td>
      <td><code>ui-sans-serif, system-ui, sans-serif</code></td>
      <td><code>&lt;body&gt;</code> Therefore everything gets this by default.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td><code>--font-mono</code></td>
      <td><code>ui-monospace, Menlo, Consolas, "Courier New", monospace</code></td>
      <td><code>&lt;code&gt;</code> <code>&lt;kbd&gt;</code> <code>&lt;samp&gt;</code></td>
      <td><code>t-mono</code></td>
    </tr>
    <tr>
      <td><code>--font-serif</code</td>
      <td><code>ui-serif, Cambria, "Times New Roman", Times, serif</code></td>
      <td>None</td>
      <td><code>t-serif</code></td>
    </tr>
    <tr>
      <td><code>--font-ui</code</td>
      <td>Aliased from <code>--font-base</code></td>
      <td><code>&lt;label&gt;</code> <code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code> <code>&lt;select&gt;</code> <code>&lt;button&gt;</code></td>
      <td><code>btn</code><br> <code>badge</code><br> <code>label</code><br> <code>t-ui</code></td>
    </tr>
    <tr>
      <td class="t-nowrap"><code>--font-sans-serif</code></td>
      <td>Aliased from <code>--font-base</code></td>
      <td>None</td>
      <td><code class="t-nowrap">t-sans-serif</code></td>
    </tr>
    <tr>
      <td><code>--font-brand</code</td>
      <td>Aliased from <code>--font-base</code></td>
      <td>None</td>
      <td><code>t-brand</code></td>
    </tr>
    <tr>
      <td><code>--font-prose</code</td>
      <td>Aliased from <code class="t-nowrap">--font-serif</code></td>
      <td>None</td>
      <td><code>t-prose</code></td>
    </tr>
  </tbody>
</table>
</div>



