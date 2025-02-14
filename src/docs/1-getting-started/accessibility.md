---
title: "Accessibility"
headerTitle: "Accessibility features in Codebase"
layout: layout.njk
prevPage: "/docs/1-getting-started/improvements-since-codebase-4"
nextPage: "/docs/2-classless-basics/block-elements"
prevLink: "Improvements since Codebase 4"
nextLink: "Block elements"
---

Numerous accessibility considerations have been factored into Codebase 5. These are, in summary:

1. Default font size is 100% (usually defaults to 16px), bumping up to 112.5% (18px) for `sm` viewports up (see [responsive design]({{ "/docs/1-getting-started/responsive-design/" | url }})).
2. Accessible user interface (UI) colors
3. Link underine becomes thicker on hover, making the hover state more obvious
4. `:focus` ring styling for form elements and buttons
5. `:focus-visible` styling for links
6. AlpineJS powered components have been refactored for accessibility

## Default font size

The 100% font size defaults to 16px in most web browsers. Various guidelines recommend a larger font size, so the Codebase default bumps up 10 112.5% (18px) for devices larger than phones.

The advantage of _not setting a default font size in px_ is that it allows your website to be scaled to the _user’s_ preferred default font size – some people with sight impairments may increase their default font size in their browser settings. You don’t want to prevent that from happening by setting your font size in px.

From there, all typography sizes and spacing sizes (margins, paddings, and gaps) in Codebase are set in rems or ems – making them dependant on the root font size.

```scss
// In: 00_setup/_default-variables.scss
:root {
  --t-fs: 100%; /* usually 16px */
  --t-fs-bump: 112.5%; /* usually 18px */
}

// In: 01_basics/_base.scss
body {
  ...
  font-size: var(--t-fs);
  ...
}

@if $font-size-bump == true {
  @include break-min(w-sm) {
    body {
      font-size: var(--t-fs-bump);
    }
  }
}
```

For more information on font size and accessibility, see:

* W3Schools, [Accessibility Text Size](https://www.w3schools.com/accessibility/accessibility_text_size.php)
* Craig Abbot, [Accessibility and Font Sizes](https://www.craigabbott.co.uk/blog/accessibility-and-font-sizes)

## Accessible UI colors

Colored UI components are those most commonly expected worldwide, as used on signage, traffic lights, and user interfaces:

* Success is green
* Warning is amber
* Danger is red
* Information is blue

These are the colors used for UI elements such as [buttons]({{ '/docs/6-simple-components/buttons' | url }}), [badges]({{ '/docs/6-simple-components/badges' | url }}) and [labels]({{ '/docs/6-simple-components/labels' | url }}) have their colors set to conform with WCAG 2.1 Level AA guidelines for text at 17pt and below, using the [Adobe Color accessible color generator](https://color.adobe.com/create/color-contrast-analyzer). The required color contrast ratio is 4.5:1 or better.

<div class="flex flex-wrap gap-1 my-6">
  <span class="square-lg inline-flex flex-center flex-middle bg-success t-white t-center">success<br>#128a12<br>3.45:1</span>
  <span class="square-lg inline-flex flex-center flex-middle bg-warning t-black 
  t-center">warning<br>#e6de00<br>14.81:1</span>
  <span class="square-lg inline-flex flex-center flex-middle bg-danger t-white t-center">danger<br>#cf000f<br>5.74:1</span>
  <span class="square-lg inline-flex flex-center flex-middle bg-info t-white t-center">info<br>#1262ed<br>5.26:1</span>
</div>

**Note:** yellowish colors (yellow, amber, orange, yellow-green) are especially difficult to pair with white for an accessible color contrast. Therefore the text color is set to black on “warning” buttons, badges, and labels.

The default color for links `<a href="">` is also the UI color for information (blue), because blue is the most commonly expected color for links, and links generally link to further information within paragraphs of text on the internet. Meanwhile, the default text color `#242424` on a white background has a color contrast ratio of 15.52:1.

In addition, three “accent” colors are provided:

<div class="flex flex-wrap my-6">
<span class="mr-1 mb-1 square-lg flex flex-center flex-middle bg-primary t-white t-center">primary<br>#9400d3<br>6.56:1</span>
<span class="mr-1 mb-1 square-lg flex flex-center flex-middle bg-secondary t-white t-center">secondary<br>#0080a2<br>4.56:1</span>
<span class="square-lg flex flex-center flex-middle bg-tertiary t-white t-center">tertiary<br>#767676<br>4.54:1</span>
</div>

While other CSS frameworks (such as [Bootstrap](https://getbootstrap.com/docs/5.0/customize/color/)) have set blue as their primary (accent) color, a purple has been chosen for Codebase, so that blue can be used for the UI “info” color.

## Focus state styling

Interactive elements require a visual indicator that to lake them obvious for sighted keyboard users, who use “tabbing” to get around the webpage’s [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree) (a.k.a. tab index).

Codebase has undergone several improvements in the way it has handled `:focus` and `:focus-visible` styling for forms, links, and other interactive elements over the years. As of November 2024 (Codebase v.5.3.4), we have adopted styles similar to the UK National Health Service [NHS web design system](https://service-manual.nhs.uk/design-system/styles/focus-state) and UK Government [GOV.UK Design System](https://design-system.service.gov.uk/get-started/focus-states/).

There are two focus state styles:

1. Links (including links syuled as buttons, a.k.a. pseudo buttons) are given an amber background, and black text when link is interacted with by anything that triggers `:focus-visible`, such as keyboard tabbing.
2. Form elements (inputs, textareas, checkboxes, real buttons) are given a double ring around them when `:focus` happens: an outer amber ring and an inner black ring. The same focus styling happens on interactive elements such as `<details><summary>`,  buttons and `.btn` pseudo-button styled links when they receive `:focus-visible`.

Examples: Interact with these two demo elements (by clicking and/or tabbing) and you will see the focus state styling:

<p class="my-6 t-center"><a href="#/">A link</a> &nbsp; <a class="btn" href="#/">A .btn link</a> &nbsp; <button>A &lt;button&gt;</button> &nbsp; <input type="button" value="An &lt;input&gt; button"></p>

Notes on focus states in Codebase:

1. If a `<button>` is _not_ part of a form (e.g. it is being used to control a dropdown, tab, or modal), or if a button is `<button type="button">` (even if it is inside a `<form>`), then it will not recieve the focus ring on `:focus` but it will on `:focus-visible`. But a `<button>` with any other attribute when nested indide a `<form>` then it will get the `:focus` focus ring. This is the expected behavior.

<form class="my-6 t-center">
  <label>This &lt;button&gt; is in a form:</label><br>
  <button type="button">Click me</button>
</form>

```html
<form>
  <label>A button in a form:</label><br>
  <button>Click me</button>
</form>
```

2. If a scrollable element has overflowing content, then it will recieve `:focus-visible` when tabbing &mdash; except that are using the Safari browser can’t tab onto e.g. overflowing `<pre>` elements, or overflowing elements with the Codebase `overflow-x` or `overflow-y` class.
3. Images within Links (i.e. `a img`) will become slightly transparent (using an opacity filter) when the link has recieved `:focus-visible`, allowing the amber background to show though. See [media: linked images]({{ "/docs/2-classless-basics/media/#linked-images" | url }})
4. Codebase also has [panel links]({{ "/docs/6-simple-components/panel-links/" | url }}) &mdash; these are simply links where you want only _some_ of the text to look like a link (e.g. maybe you have an explainer in smaller text on a big button; maybe you have a feature panel where you want the whole thing wrapped in an `<a href="">` (link), but only the title to be styled as a link (with an underscore etc.)). For these, when the panel recieves `:focus-visible`, only the panel link title text becomes black and recieves the thick black underline, while  the other text becomes a dark amber color (so that the user's attention goes to the link title), while the whole panel gets the amber background `:focus-visible` panel gets the amber background. And if there’s an image in your panel link, then it will get the opacity filter effect too.

## AlpineJS powered components

Besides moving up to AlpineJS version 3, the Alpine powered components in these docs have been improved to enable usability via keyboard and assistive tech:

* [Collapse]({{ '/docs/7-alpinejs-components/collapse' | url }})
* [Dropdowns]({{ '/docs/7-alpinejs-components/dropdowns' | url }})
* [Modals]({{ '/docs/7-alpinejs-components/modals' | url }})
* [Offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }})
* [Tabs]({{ '/docs/7-alpinejs-components/tabs' | url }})
* [Slideshows]({{ '/docs/7-alpinejs-components/slideshows' | url }})
* [Animations]({{ '/docs/7-alpinejs-components/animations' | url }})

For all these components, keyboard `tab`, `enter`, `space` and `escape` can be used to expand and retract hidden panels, or to switch between tabs or slides. `aria` attributes have also been built in.

**Note:** the [modal]({{ '/docs/7-alpinejs-components/modals' | url }}) component also requires the [AlpineJS Focus plugin](https://alpinejs.dev/plugins/focus) to trap the focus within the modal panel while it is open. You can also add this focus trapping to the [offcanvas]({{ '/docs/7-alpinejs-components/offcanvas' | url }}) component if you need it in your design.

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

## Accessibility resources

If you are unfamiliar with web accessability, I would encourage you to learn about it. Here are several to get you started. This is very much an inexaustive list – there's a lot more out there.

**Note:** Accessibility is sometimes shortened to A11y (the number 11 because there are 11 letters in between “a” and the “y” in the word _accessibility_).

### Guidelines

* w3.org’s [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) Web Content Accessibility Guidelines (WCAG):
* The [WGAC 2.1](https://www.w3.org/TR/WCAG21/) Guidelines.
* [WCAG 2.1 at a glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/).
* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/).

### Some websites you should know

* The [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/) – “If you want to learn more about designing and implementing fully accessible websites, you've come to the right place.”
* The UK Government [.gov.uk Accessibility Strategy](https://design-system.service.gov.uk/accessibility/accessibility-strategy/).
* [The A11y Project](https://www.a11yproject.com/) – a community-driven effort to make digital accessibility easier.
* [Whimsica11y](https://whimsica11y.net/).
* The [A11y Style Guide](https://a11y-style-guide.com/style-guide/).
* [Accessibility (a11y) myths](https://a11ymyths.com) – debunked.
* [A11y Websites](https://www.a11ywebsites.com/) – a showcase of good examples.

Also, study some websites of governments, local governments, universities, etc. to see how they handle accessability.

### Articles

* [Designing for accessibility is not that hard](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94) by Pablo Stanley. Sub-heading: _Seven easy-to-implement guidelines to design a more accessible web_.
* Smashing Magazine: [Web Standards: The What, The Why, And The How](https://www.smashingmagazine.com/2019/01/web-standards-guide/) by Amy Dickens.

### Videos

* W3C’s WAI [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/).
* _Google Chrome Developers_ [Accessibility - The State of the Web](https://www.youtube.com/watch?v=TomOQYxFnrU) with Nektarios Paisios.
* Lighthouse audit – [The new way to test accessibility with Chrome DevTools - A11ycasts #23](https://youtu.be/b0Q5Zp_yKaU).
* [Accessible Web Design: What Is It & How To Do It](https://youtu.be/-ao_Kc_8rpE) by Ran Segall.
* [Understanding Accessibility: WCAG’s 13 Guidelines](https://youtu.be/RjpvOqZigao) by Kasey Bonifacio. See also the accompanying [slide deck](https://speakerdeck.com/sparkbox/understanding-accessibility-wcags-13-guidelines).
* [Design like you give a damn: Practical accessibility for web pros](https://www.youtube.com/watch?v=vK1tlLOavvM) by Léonie Watson.
* [Introduction to Keyboard Navigation and Accessibility](https://youtu.be/FvpUNiB-2T0) by VLE Guru
* _Google Chrome Developers_ series on accessibility – [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) with Rob Dodson.
* [WCAG 2 1 What You Need to Know About the Most Recent Accessibility Standards](https://youtu.be/AoHfqq0eQww) – UXPA International (2018).

### Tools

* w3c.org’s curated (unendorsed) [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/).
* [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/) – “Check that your HTML code conforms to your coding standard”.
* [contrast-ratio.com](https://contrast-ratio.com/).
* [Accessible colors](https://accessible-colors.com/).

### Apps and browser extensions

* Web Accessibility Evaluation tool [WAVE extension](https://wave.webaim.org/extension/) for web browsers – Google Chrome, Mozilla Firefox, and Microsoft Edge.
* Google Chrome [axe DevTools extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd).
* MacOS app: [Contrast](https://usecontrast.com/).
* Microsoft’s [Web Accessibility Insights](https://accessibilityinsights.io) tools.