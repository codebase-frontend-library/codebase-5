# Changelog

<!-- Note: update version numbers need updating every time in `metadata.json`, `package.json`, `package-lock.json` (×2), `README.md`, `CHANGELOG.md`, and `codebase.scss` -->

## 19 Mar 2025 -- v.5.3.6

* Changed utility classes `t-no-underline` to `t-underline-none` and `links-no-underline` and `links-underline-none`.

## 28 Nov 2024 -- v.5.3.5

* Added table modifier class `--t-lined`
* Variable `--line-detail` renamed as `--line` throughout.

## 28 Nov 2024 -- v.5.3.4

* Font size bump 112.5% (default 18px) for 768px up.
* Color variable outputs changed to the OKLAB color space. (Tried the OKLCH color space, but this  distorted the lightness levels, especially of the lighter greens coming out as orange.)
* Accessibility: focus state styling now based on that of the design systems of the NHS.co.uk and GOV.UK.
* Improved `t-link-inside` and renamed as `panel-link` (old name is still present for backgards compatability).
* Improved link variations: `t-underline-none` / `t-underline-hover-only`
* Added link groups (for menus): `links-underline-none` / `links-underline-hover-only`

## 19 Nov 2024 -- v.5.3.3

* Reinvention of the way Codebase handles rounded corners. Breaking changes:
  * Different border radius size classes now only provide _values_ — e.g. they need to be paired with `rounded`, `rounded-tl` etc. class as a modifier;
  * Now there is only one `unrounded` reset. Four corner-specific rounding corner classes have been added.
  * Removed `rounded-circle` and `rounded-full` (you only need `rounded-pill` to accomplish all thay they were used for).

## 11 Nov 2024 -- v.5.3.2

* Focus ring now copying the [Accessability Style Guide](https://a11y-style-guide.com/style-guide/section-general.html#kssref-general-link-focus).
* Heading tags that are `:first-child` now have their top margins removed.

## 8 Nov 2024 -- v.5.3.1

* Added utility `overflow-clip` using `overflow: clip`. (`overflow-hidden` is now aliased to this, for backwards compatability.)

## 6 Nov 2024 -- v.5.3.0

* Updated NPM packages, including Eleventy and Dart-Sass. The Dart-Sass update required making some updates to several Sass functions in Codebase, fixing breaking changes for the preprocessor.
* Colors now have `color-mix()` functons and OKLAB color space. Base color variables are now available for overriding in the root variables.
* Reverted to a simpler focus ring stying using recent browser defaults, because this is now working well in all the evergreen browsers (including rounded corners). But, added a little outline-offset to improve readability and visibility when touching a simlar-colored button.
* Simpler font stacks.
* A little text-underline-offset has been added to links.
* Reduced `margin-bottom` of typographic base block elements (and `.table`) to 1rem. Now controlled by a variable.
* Simplified heading sizes (ems equivalent of 16px, 18px, 20px, 24px, 30px, 36px, as usually specified in WYSIWYG editors). Also, simplified by removing heading size bump for MD screens (use the responsive `clamp()` controled `t-long-read` or `t-display` in those situations where you need bigger text).
* All Heading tags and heading utility classes now have built-in `margin-top`. As margin-block controlled by a variable. (Use `mt-0` to override.)
* "Heading sizes" utility classes now only change text sizes. They do not affect margins offont weights.
* Improved `.t-underline-none` and `.t-link-inside` (panel links).
* All tables now need the `.table` class.
* Paddings utility `.p-block` renamed `.p-cell` (alias `.p-block` is still available.)
* Removed `-webkit-overflow-scrolling: touch;` from the body tag.

## 30 Oct 2024 -- v.5.2.4

* Reverted to the browser built-in accessibility focus ring outline (no longer using a box shadow). But set 2px outline thickness and 2px offset. Evergreen browsers have outlines that now follow rounded corners on inputs and buttons.

## 23 July 2024 -- v.5.2.3

* Improved `t-tight` and `t-loose` letter spacing.
* Improved `t-link-inside` / `t-link` (i.e. panel links) and examples.

## 28 May 2024 -- v.5.2.2

* Media query controlled max-width utilities (e.g. md:w-xs), so that layout blocks can be set to different max-widths at different breakpoint widths.
* Increased heading sizes (for both base and `MD` bump sizes).

## 29 Feb 2024 -- v.5.2.12

* Added position `static` utility to all breakpoints.
* Added text-wrap `t-balance` utility.

## 12 Feb 2024 -- v.5.2.11

* Adjusted headings `h1` to `h6` so that they have a ×1.125 font size increase, that takes effect at `md` (1024px default).
* Improved `t-sm` so that its _minimum_ size is 13.5px, using `max(.75em, 13.5px)`.
* Improved `t-lg` so that it simply upsizes by ×1.25.
* Added `t-display` that increases font sizes (×1.25 → 2) using a `clamp()` ramp.
* Added `w-fit-content`.
* Added `h-100dvh` and `h-max-100dvh`.
* Removed `w-25%`, `w-50%`, `w-75%` as these are almost never used.

## 3 Jan 2024 -- v.5.2.10

* Added `xs:`, `sm:`, `md:`, and `lg:` — `aspect-ratio-unset`

## 2 Nov 2023 -- v.5.2.9

* Added `xs:`, `sm:`, `md:`, and `lg:` media query tiered variants to all `flex` modifier classes.
* Added `xs:`, `sm:`, `md:`, and `lg:` media query tiers to `grid` wrapper setup classes.
* Improved `t-link-inside` and `t-link`.
* Added `rounded-xl`.

## 25 Oct 2023 -- v.5.2.8

* ~~Improved heading variables, so that `--h1` through `--h6` scale down by ~0.875 for `sm` viewports. Now, the heading variables can be safely be utilised by the designer.~~ See v.5.2.11.

## 13 Oct 2023 -- v.5.2.7

* Changed `t-loose` and `t-tight` units from `rem` to `em`. Improvement shows more when used on headings.

## 20 Apr 2023 -- v.5.2.6

* Added `grid-dense` to the CSS grid system.
* Added `xs:`, `sm:`, `md:`, and `lg:` media query tiered variants to the image/video aspect ratio utilities.

These variants enable you to both _set up_ and _rearrange_ a square tile array for different device sizes.

## 22 Feb 2023 -- v.5.2.5

* Minor bug fix: `h-max-100%` now works OK.

## 16 Dec 2022 -- v.5.2.4

* Activating focus ring on buttons only for `:focus-visible`.
* Removing the `hide-focus-ring` class.

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
* Improved system font stacks, based on [https://systemfontstack.com](https://systemfontstack.com).
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

## 11 Jan 2022 -- v.5.0.0

* Initial upload of Codebase v.5.0.0.
