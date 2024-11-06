---
title: "Text columns"
layout: layout.njk
prevPage: "/docs/5-typographic-utilities/list-formats"
nextPage: "/docs/6-simple-components/menus-and-menubars"
prevLink: "list-formats"
nextLink: "Menus"
---

If you have some blocks of text that you want to arrange as text columns on a webpage, then place them all inside a `t-columns` wrapper.

## Notes on `t-columns`

1. The number of columns you get depends on how wide the wrapper is that they are put inside (and how wide a screen they are displayed on).
2. Column max-widths and gap widths can be changed in the default variables.

## Example using `t-columns`

<div class="mb-2">
  <div class=" t-columns">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a viverra nisi. In vel porttitor mauris, id ullamcorper odio. Morbi id ornare neque. Aenean faucibus risus quis ipsum malesuada, iaculis semper lectus pellentesque. In ornare lectus dui, tempor ultricies felis commodo nec. Praesent placerat venenatis nibh vel consequat. Mauris vitae molestie tellus. Maecenas feugiat vulputate purus, sit amet rutrum ligula venenatis eleifend. Vivamus suscipit nisi eget faucibus sagittis. Praesent tincidunt est nisl, vel convallis ligula blandit sit amet. Proin vestibulum justo sit amet enim consequat tristique.</p>
    <p>Maecenas posuere elit justo, sit amet bibendum tellus sagittis ut. Pellentesque nec sapien eu quam lacinia sollicitudin. Morbi ut malesuada magna. Vivamus in augue consequat, pretium diam nec, ultrices dui. Donec rutrum et massa id sodales. Morbi auctor enim at tortor tempus, in auctor augue ultrices. Integer pellentesque varius tincidunt. Cras tincidunt urna sed ipsum aliquet iaculis.</p>
    <p>Curabitur fermentum odio et diam ullamcorper sollicitudin. Praesent erat odio, fringilla venenatis posuere vitae, viverra aliquet dolor. Aenean tincidunt nisi elit, eu egestas lectus condimentum vel. Curabitur eu metus faucibus ante elementum mattis sit amet vitae purus. Maecenas eget lacus arcu. Nunc efficitur felis vel sagittis sodales. Aliquam eu laoreet arcu, et rhoncus urna. Maecenas et purus luctus, tincidunt quam vitae, fringilla mauris.</p>
    <p>Aliquam erat volutpat. Morbi tristique nisl et ante condimentum ultrices. Pellentesque quis tincidunt odio. Donec id risus non ligula scelerisque dictum. Aliquam erat volutpat. Donec mi enim, volutpat nec augue vel, iaculis ultricies sapien. Aenean interdum, diam vitae vestibulum placerat, nulla metus vehicula massa, sit amet tincidunt sem purus ut neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <p>Sed tristique risus sit amet libero dignissim, eu vehicula turpis tempus. Quisque aliquet arcu in sem consequat, ac tincidunt enim viverra. Sed ullamcorper sapien ac egestas suscipit. Ut semper, tortor a finibus viverra, tortor metus vehicula augue, sit amet suscipit felis sapien sed sem. Nam sollicitudin turpis aliquet, interdum orci eget, suscipit eros. Sed facilisis metus ut urna fringilla, non efficitur risus condimentum. Nullam posuere leo quis dapibus rutrum. Proin orci elit, blandit eget pulvinar tristique, auctor vel lorem. Suspendisse et iaculis nisl. Vestibulum quis pulvinar lectus, sed pharetra justo. Mauris bibendum euismod tempus. Nullam scelerisque rutrum nunc, vitae laoreet augue maximus quis. In bibendum id dui eget placerat.</p>
  </div>
</div>

```html
<div class="t-columns">
  <p>Lorem ipsum dolor sit amet ...</p>
</div>
```