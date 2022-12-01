# Log

_Note: update version numbers need updating every time in `metadata.json`, `package.json`, `package-lock.json` (×2), `README.md`, `LOG.md`, and `codebase.scss`_

***

## 01 Dec 2022 -- v.5.2.3

* Smaller text for `btn-sm`. Larger text for `btn-lg`.

## 24 Nov 2022 -- v.5.2.2

* Fixed bug with `overflow-x` failing to to work as a wrapper around oversized tables on narrow viewports (phones). 

## 23 Nov 2022 -- v.5.2.1

* Improvements to container classes, to prevent interference with e.g. the HubSpot required container-fluid class
* Improvements to forms, for compatibility with iOS added features

## 19 Nov 2022 -- v.5.2.0

* **Changed all interpolated Sass variables to CSS variables (custom properties)**, and refactored
* Updated dependencies. Corrected Sass function units, adding % to color mix in default variables and button hover states (because of the Dart Sass breaking change).
* Removed PostCSS and associated dependencies, and CSSNANO. Now no auto-added vendor prefixes. (A few are still required; these have been added manually.) CSS minification is now done by the NPM _Sass_ plugin, using `--style compressed`.
* To enable running on Windows machines, added `npm-run-all` and changed the `npm run dev` script in `package.json` (still runs on Macs).
* Changed “warning” orange to amber, because it was too similar to “danger” red. Maintained accessability by changing text on warning UI elements (buttons, badges, and labels) from white to black. Also, the named color `-orange` is now named `-amber` (this is a breaking change).
* Improvements to tables (this shaved 2KB off of the minified file size!)
* Improvements to forms.
* Improvements to glassmorphic backgrounds.
* Additions to aspect-ratios.
* Updated the documentation.

## 2 Nov 2022 -- v.5.1.1

* Added `width: 100%` to the `block` utility class, because in Safari `<input type="text" class="block">` and `<button class="block">` were not going full width.

## 20 Oct 2022 -- v.5.1.0

* **Breaking change:** improved CSS grid gap and flexbox gap, using the full set of responsive spacing variables: now `gap-1` thru `gap-6` (and column only and row only versions, and breakpoint alternatives) instead of the simpler `gap-sm`, `gap-md`, and `gap-lg`. Also `flexbox-gap` has gone; use these new `gap-*` utilities instead.
* Improved `focus-visible` focus ring: black and white "checker" dotted line, comprised of black dotted outline overlaying a solid white box-shadow of the same thickness.
* `btn` class (for links) now _doesn't_ have the input focus ring; it has the link focus ring.
* Updated npm packages.

## 26 Sep 2022 -- v.5.0.10

* Added hover states to opacity utilities.
* improved the docs -- fixed broken links.

## 12 Aug 2022 -- v.5.0.9

* Added `img-cover-*` positioning (top-right, right, etc.).
* Fixed the docs sidebar, was prevented from independently scrolling on iPad and touch devices.

## 19 Jul 2022 -- v.5.0.8

* `container` classes base no longer set using `[class=container]` -- improving compatibillity with other platforms.
* `container` classes now have x-axis insets controlled by a `min()` finction on the width -- so, no more need for x-axis paddings.
* Added `t-link-inside` and `t-link`. (Removed the previously undocumented `t-hyperlink`).

## 23 Jun 2022 -- v.5.0.7

* For improved keyboard-user accessibility, `:focus-visible` focus rings on links are now the default user-agent stylesheet gray offset, with a white box-shadow inside the offset (for inproved visibility over dark backgrounds)
* For improved keyboard-user accessibility, `:focus-visible` focus rings on form elements and `.btn` buttons a 0.25rem light blue box shadow.
* Capability to remove box shadows above or below a media query breakpoint.

## 15 Jun 2022 v.5.0.6

* For improved accessibility, defailt font size is now 100% (not 16px). This will still be 16px for many people, but now visually impaired people or others who increase the default font size in their browser settings can do so.
* x-axis and y-axis margin utilities (`mx-` and `my-`) now use `margin-inline` and `margin-block`. Similar for paddings.
* Improved system font stacks, based on https://systemfontstack.com.
* Hover states for box shadows.
* Added posiiton utilities `z-index-997` and `z-index-998` for better handling of offcanvas, modals, etc.
* Set long-read `clamp()` to max at 1.25rem size.
* Other minor fixes.
* Some corrections and improvements in the docs.

## 16 March 2022 -- v.5.0.5

* Correcting the version control number from `v.1` to `v.5`
* Default gaps for flexbox and grid are now 1.5rem.
* Added for `gap-sm` and `gap-lg` for grid (only, not flexbox). This done for all grid `gap`, `col-gap`, and `row-gap` at 5 media query tiers.

## 8 March 2022 -- v.5.0.4

* Added grid `col-gap` and `row-gap` classes (at 5 media query tiers).

## 1 March 2022 (still v.5.0.3)

* Added `loading="lazy"` to the docs placeholder images, and discussed `loading="lazy"` in the docs at `classless-basics/media`.

## 12 Feb 2022 -- v.5.0.3

* `aspect-ratio` classes now using the new CSS aspect ratio style (the old padding hack is still available in mixins).
* The same `aspect-ratio` class is required to map an overlay on to a hero component.
* Other minor fixes

## 2 Feb 2022 -- v.5.0.2

* The `container` default is now the same as `container-xxl` (max width 1792px).

## 2 Feb 2022 -- v.5.0.1

* Added `b-transparent` and `hover:b-transparent`.
* A few minor fixes.

## 11 Jan 2022 -- v.51.0.0

* Initial upload of Codebase v.5.0.0.