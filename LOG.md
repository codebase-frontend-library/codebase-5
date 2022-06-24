# Log

_Note: update version numbers need updating every time in `metadata.json`, `package.json`, `package-lock.json`, `README.md`, `LOG.md`, and `codebase.scss`_

***

## 23 Jun 2022 v.5.0.7

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