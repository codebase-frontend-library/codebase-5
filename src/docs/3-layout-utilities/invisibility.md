---
title: "Invisibility"
headerTitle: "Invisibility"
layout: layout.njk
prevPage: "/docs/3-layout-utilities/overflows"
nextPage: "/docs/4-decoration-utilities/colors"
prevLink: "Overflows"
nextLink: "Colors"
---

In some circumatances, you may need to hide stuff.

## Visually hidden (screen reader only)

* `visually-hidden` (alias `screen-reader-only`)

The code CSS code for this utility class has been copied from [Hide content (The A11y Project)](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/).

This CSS visually removes an element from the webage, but a screen reader will still percieve it and include it in the spoken read-through of your webage content.

Keyboard users can also get to visually hidden elements when they tab through the webpage’s accessibility tree (tab index). When someone tabs onto a visually hidden element, it becomes visible on the page.

Therefore, for example, `visually-hidden` (or `screen-reader-only`) can be used to hide a “skip link” such as the one at `tabindex="1"` on this webpage. Skip links can provide people who rely on assistive technologies with a means of skipping over your site’s main navigation (menubar or megamenu), if they are already familiar with it.

```html
<a
  id="skip-link"
  href="#page-main-content"
  tabindex="1"
  class="visually-hidden"
>
  Skip to main content
</a>

<!-- Website main navigation  would go here -->
...

<div id="page-main-content">
  ...
</div>
```

## Responsive hiding

The four media query breakpoint widths in Codebase (`xs`, `sm`, `md`, and `lg`) have both `hidden-below` and `hidden` (i.e. hidden-above) utility classes.

The `*:hidden-below` classes hide stuff on viewport widths from zero up to (max-width: variable - 1px).

So, for example, if you want to hide a sidebar on an iPad in portrait orientation but not on an iPad in landscape orientation, then you’ll want to use `md:hidden-below`. At `md` (1024px, default) and above, the sidebar will be displayed.

<p class="t-center"> &check; = displayed; &cross; = hidden</p>

<div class="overflow-x mb-2">
<table class="table-compact">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
      <th>&le;567px</th>
      <th>568px–767px</th>
      <th>768px–1023px</th>
      <th>1024px–1280px</th>
      <th>&ge;1280px</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bt-thick">
      <td><code>xs:hidden-below</code></td>
      <td>
        <div class="xs:hidden-below p-cell bg-green-200">Example</div>
      </td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">sm:hidden-below</code></td>
      <td>
        <div class="sm:hidden-below p-cell bg-green-200">Example</div>
      </td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">md:hidden-below</code></td>
      <td>
        <div class="md:hidden-below p-cell bg-green-200">Example</div>
      </td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>lg:hidden-below</code></td>
      <td>
        <div class="lg:hidden-below p-cell bg-green-200">Example</div>
      </td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&check;</td>
    </tr>
    <tr class="bt-thick">
      <td><code>xs:hidden</code></td>
      <td>
        <div class="xs:hidden p-cell bg-green-200">Example</div>
      </td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>sm:hidden</code></td>
      <td>
        <div class="sm:hidden p-cell bg-green-200">Example</div>
      </td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>md:hidden</code></td>
      <td>
        <div class="md:hidden p-cell bg-green-200">Example</div>
      </td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>lg:hidden</code></td>
      <td>
        <div class="lg:hidden p-cell bg-green-200">Example</div>
      </td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
  </tbody>
</table>
</div>