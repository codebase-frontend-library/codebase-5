---
title: "Labels"
layout: layout.njk
prevPage: "/docs/6-simple-components/badges"
nextPage: "/docs/6-simple-components/tables"
prevLink: "Badges"
nextLink: "Tables"
---

## The label tag

The default, classless `<label>` has no special styling, and is commonly used on above or beside form input fields:

<label>Label</label>

```html
<label>Label</label>
```

## The label utility class

Codebase has a UI `label` class, that you can apply `label` to a `<label>`, or a `<span>`, or other inline element. This will give you:

<label class="label">Label</label>

```html
<label class="label">Label</label>
```

## UI colors

The `label` class default backgroud is middle gray, same as `bg-info`. Add a UI background color utility class, and you can have:

<span class="label label-warning">Really?</span> <span class="label label-danger">Required</span> <span class="label label-success">Winner</span> <span class="label label-info">Anything</span> <span class="label label-primary">Author</span> <span class="label label-secondary">Description</span> <span class="label label-tertiary">Uncaregorized</span>

```html
<span class="label label-warning">Really?</span>
<span class="label label-danger">Required</span>
<span class="label label-success">Winner</span>
<span class="label label-info">Anything</span>
<span class="label label-primary">Author</span>
<span class="label label-secondary">Description</span>
<span class="label label-tertiary">Uncaregorized</span>
```

Labels can sit <span class="label">comfortably</span> within a block of text, as you can see for yourself. That text can occupy multiple lines, and the <span class="label">label</span> will not disturb the vertical rhythm.
