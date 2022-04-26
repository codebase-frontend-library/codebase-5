---
title: "Accessibility"
headerTitle: "Accessibility features in Codebase 5"
layout: layout.njk
prevPage: "/docs/1-getting-started/improvements-since-codebase-4"
nextPage: "/docs/2-classless-basics/block-elements"
prevLink: "Improvements since Codebase 4"
nextLink: "Block elements"
---

Numerous accessibility improvements have been made to Codebase since version 4.

The three main improvements for accessability in Codebase are:

1. Accessible UI colors
2. Focus ring styling
3. AlpineJS powered components have been refactored

## Accessible UI colors

Colored UI components are those most commonly expected worldwide, as used on signage and user interfaces:

* Warning is orange
* Danger is red
* Success is green
* Information is blue

These are the colors used for UI elements such as ([buttons]({{ '/docs/7-simple-components/buttons' | url }}), [badges]({{ '/docs/7-simple-components/badges' | url }}) and [labels]({{ '/docs/7-simple-components/labels' | url }})) have their colors set to conform with **WCAG 2.1 Level AA guidelines for text at font-size 16px**, using the [Adobe Color accessible color generator](https://color.adobe.com/create/color-contrast-analyzer). The required color contrast ratio is 4.5:1 or better.

<div class="flex flex-wrap my-6">
<span class="mr-1 mb-1 square-lg inline-flex flex-center flex-middle bg-warning t-white 
t-center">warning<br>#c25703<br>4.51:1</span>
<span class="mr-1 mb-1 square-lg inline-flex flex-center flex-middle bg-danger t-white t-center">danger<br>#cf000f<br>5.74:1</span>
<span class="mr-1 mb-1 square-lg inline-flex flex-center flex-middle bg-success t-white t-center">success<br>#128a12<br>4.5:1</span>
<span class="square-lg inline-flex flex-center flex-middle bg-info t-white t-center">info<br>#1262ed<br>4.54:1</span>
</div>

The default folor for links `<a href="">` is also the UI color for information (blue), because blue is the most commonly expected color for links, and links generally link to further information within paragraphs of text on the internet. Meanwhile, the default text color `#212121` on a white background has a color contrast ratio of 16.1:1.

In addition, three “accent” colors are provided:

<div class="flex flex-wrap my-6">
<span class="mr-1 mb-1 square-lg flex flex-center flex-middle bg-primary t-white t-center">primary<br>#9400d3<br>6.56:1</span>
<span class="mr-1 mb-1 square-lg flex flex-center flex-middle bg-secondary t-white t-center">secondary<br>#0080a2<br>4.56:1</span>
<span class="square-lg flex flex-center flex-middle bg-tertiary t-white t-center">tertiary<br>#767676<br>4.54:1</span>
</div>

While other CSS frameworks (such as [Bootstrap](https://getbootstrap.com/docs/5.0/customize/color/)) have set blue as their primary (accent) color, a purple has been chosen for Codebase, so that blue can be used for the UI “info” color.

## Focus ring styling

Interactive elements require a visual indicator that to lake them obvious for sighted keyboard users, who use “tabbing” to get around the webpage’s [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree) (a.k.a. tab index). 

In Codebase, focus ring styling has been improved for links, buttons, form inputs, etc. The default focus ring in various web browsers is different – examples include a 1px dotted black outline, a thicker gray outline, or a pale blue blurred outline. In Codebase, these have all been replaced by a solid (unblurred) _double_ box-shadow applied to `:focus`: a 2px white shadow surrounded by a 2px black shadow. That way, one and/or the other box shadow is visible over both light and dark backgrounds.

```scss
:focus-visible {
  outline: none;
  box-shadow: $focus-ring;
}

a:not(.btn):focus-visible {
  outline-color: currentColor;
  outline-offset: 2px;
}
```

`:focus-visible` has been available in most web browsers since 2018 (Safari is a notable exception). Browsers that don’t implement `:focus-visible` will still use their built-in focus ring styles.)

In addition, Codebase UI colored buttons with `:focus-visible` will receive the same color change as happens with their `:hover` state.

## AlpineJS powered components

Besides moving up to AlpineJS version 3, the Alpine powered components in these docs have been improved to enable usability via keyboard and assistive tech:

* [Collapse]({{ '/docs/7-alpinejs-components/collapse' | url }})
* [Dropdown]({{ '/docs/7-alpinejs-components/dropdown' | url }})
* [Modal]({{ '/docs/7-alpinejs-components/modal' | url }})
* [Offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }})
* [Tabs]({{ '/docs/7-alpinejs-components/tabs' | url }})
* [Slideshow]({{ '/docs/7-alpinejs-components/slideshow' | url }})

For all these components, keyboard `tab`, `enter`, `space` and `escape` can be used to expand and retract hidden panels, or to switch between tabs or slides. `aria` attributes have also been built in.

**Note:** the [modal]({{ '/docs/8-alpinejs-components/modal' | url }}) component also requires the [AlpineJS Focus plugin](https://alpinejs.dev/plugins/focus) to trap the focus within the modal panel while it is open. You can also add this focus trapping to the [offcanvas]({{ '/docs/8-alpinejs-components/offcanvas' | url }}) component if you need it in your design.

## Building an accessible website

It should therefore be possible to achieve WCAG Level AA using Codebase on a well-designed website.

To design a wesite well for accessibility includes:

* Properly structured HTML
* Heading hierarchy
* Sufficient color contrast for text and backgrounds
* Meaningful `alt` tags on images
* Keyboard tabbing navigation, modals, dropdowns, etc.
* ARIA attributes where required
* And more

See [WCAG 2.1 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) for a brief introduction.

## Resources

If you are unfamiliar with web accessability, I would encourage you to learn about it. Here are several to get you started. This is very much an inexaustive list – there's a lot more out there.

### Guidelines

* w3.org’s [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) Web Content Accessibility Guidelines (WCAG):
* The [WGAC 2.1](https://www.w3.org/TR/WCAG21/) Guidelines.
* [WCAG 2.1 at a glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/).
* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)

### Some websites you should know

* [The Accessibility (A11y) Project](https://www.a11yproject.com/) – a community-driven effort to make digital accessibility easier.
* The [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/) – “If you want to learn more about designing and implementing fully accessible websites, you've come to the right place.”
* [The A11y Style Guide](https://a11y-style-guide.com/style-guide/).
* [Accessibility (a11y) myths](https://a11ymyths.com) – debunked.
* [A11y Websites](https://www.a11ywebsites.com/) – a showcase of good examples.

Also, study some websites of governments, local governments, universities, etc. to see how they handle accessability.

### Articles on accessibility

* [Designing for accessibility is not that hard](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94) by Pablo Stanley. Sub-heading: _Seven easy-to-implement guidelines to design a more accessible web_.
* Smashing Magazine: [Web Standards: The What, The Why, And The How](https://www.smashingmagazine.com/2019/01/web-standards-guide/) by Amy Dickens

### Videos

* W3C’s WAI [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* _Google Chrome Developers_ [Accessibility - The State of the Web](https://www.youtube.com/watch?v=TomOQYxFnrU) with Nektarios Paisios
* Lighthouse audit – [The new way to test accessibility with Chrome DevTools - A11ycasts #23](https://youtu.be/b0Q5Zp_yKaU)
* [Accessible Web Design: What Is It & How To Do It](https://youtu.be/-ao_Kc_8rpE) by Ran Segall
* [Understanding Accessibility: WCAG’s 13 Guidelines](https://youtu.be/RjpvOqZigao) by Kasey Bonifacio. See also the accompanying [slide deck](https://speakerdeck.com/sparkbox/understanding-accessibility-wcags-13-guidelines).
* [Design like you give a damn: Practical accessibility for web pros](https://www.youtube.com/watch?v=vK1tlLOavvM) by Léonie Watson
* [Introduction to Keyboard Navigation and Accessibility](https://youtu.be/FvpUNiB-2T0) by VLE Guru
* _Google Chrome Developers_ series on accessibility – [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) with Rob Dodson
* [WCAG 2 1 What You Need to Know About the Most Recent Accessibility Standards](https://youtu.be/AoHfqq0eQww) – UXPA International (2018)

### Online accessibility tools

* w3c.org’s curated (unendorsed) [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)
* [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/) – “Check that your HTML code conforms to your coding standard”
* [contrast-ratio.com](https://contrast-ratio.com/)
* [Accessible colors](https://accessible-colors.com/)

### Apps and browser extensions

* Web Accessibility Evaluation tool [WAVE extension](https://wave.webaim.org/extension/) for web browsers – Google Chrome, Mozilla Firefox, and Microsoft Edge.
* Google Chrome [axe DevTools extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
* MacOS app: [Contrast](https://usecontrast.com/)
* Microsoft’s [Web Accessibility Insights](https://accessibilityinsights.io) tools