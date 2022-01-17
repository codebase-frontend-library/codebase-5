---
title: "Tabs"
layout: layout.njk
prevPage: "/docs/7-alpinejs-components/offcanvas"
nextPage: "/docs/7-alpinejs-components/slideshows"
prevLink: "Offcanvas"
nextLink: "Slideshows"
---

Accessible Codebase tabs, powered by AlpineJS. You can click through the tabs, or use arrow keys.

## Tabs and accessibility

Codebase tabs take inspiration from [W3C](https://www.w3.org/)’s WAI-ARIA design pattern for [tabs with automatic navigation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html), but the functiobality is provided by AlpineJS. 

The normal behaviour for assistive technology and keyboard users is to `tab` sequentually through a page, where the focus progresses from one link or button to another in order (or use `shift+tab` to go in reverse order). Then, on a selected link or button, use the `enter` or `space` key to click it.

However, according to the W3C example above, the normal behavior for interacting with a “tabs widget” (or, tabbed interface) using assistive technology or keyboard is to `tab` (or `enter`, or `space` key) through the pre-selected/front tab (usually the first) into its respective tab panel, or  use `right arrow` and `left arrow` keys to explore and select the tabs. Then the visitor selects a tab by tabbing into it.

After tabbing through any interactive elements within a tab panel, tabbing again will exit the tab and continue down the accessibility tree on the weboage.

All of the above is doable using Codebase and AlpineJS. Play with the example below and you will see.

## Styling tabbed navigation

### Basic tabs

Here’s an unstyled tabs example, ready for you to style your own way. Explanation:

1. Tab elements have their appropriate [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) `tablist`, `tab`, and `tabpanel`: tab labels are `<button role="tab" class="btn-info">` wrapped in a `<nav role="tablist">`, and the panels are `<div role="tabpanel">. Other ARIA attributes are also included.
2. `tabindex` is set as 0 for hidden tabs, swapped to am index number when a tab is selected (brought into view). Selecting tabs can by done by click/tap, keyboard arrow, or assistive tech.
3. A Selected tab labels have a color change, adding the `active` class (looks the same as the `:hover` state).

<div class="mb-3">
<div x-cloak x-data="{ currentTab: 1 }">
  <nav
    role="tablist"
    class="list-style-type-none mb-2"
    aria-label="Tabs example 1"
  >
    <button 
      role="tab"
      id="first-tab"
      x-ref="firstTab"
      aria-controls="first-tab-panel"
      :aria-selected="currentTab === 1"
      class="btn-info"
      :class="currentTab === 1 && 'active'"
      @click="currentTab = 1"
      @keyup.right="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
      :tabindex="currentTab === 1 ? '0' : '-1'"
    >
      First tab
    </button>
    <button
      role="tab"
      id="second-tab"
      x-ref="secondTab"
      aria-controls="second-tab-panel"
      :aria-selected="currentTab === 2"
      class="btn-info"
      :class="currentTab === 2 && 'active'"
      @click="currentTab = 2"
      @keyup.right="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
      @keyup.left="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
      :tabindex="currentTab === 2 ? '0' : '-1'"
    >
      Second tab
    </button>
    <button
      role="tab"
      id="third-tab"
      x-ref="thirdTab"
      aria-controls="third-tab-panel"
      :aria-selected="currentTab === 3"
      class="btn-info"
      :class="currentTab === 3 && 'active'"
      @click="currentTab = 3"
      @keyup.left="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
      :tabindex="currentTab === 3 ? '0' : '-1'"
    >
      Third tab
    </button>
  </nav><!-- /role=tablist -->
  <div
    role="tabpanel"
    id="first-tab-panel"
    x-ref="firstTabPanel"
    aria-labelledby="first-tab"
    x-show="currentTab === 1"
    tabindex="0"
    @keyup.shift.tab="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
  >
    <p><em>First tab panel.</em> With an <a href="#/">example link</a>.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium modi mollitia perspiciatis, sunt enim saepe velit tempore. Repellat qui ducimus magni odio suscipit, cumque a ea eaque ipsum corrupti? Et, at ex quod repellendus quia omnis perspiciatis dolorum cumque eaque quos praesentium accusamus facilis optio rerum maiores animi cum expedita reiciendis aliquid culpa, iste voluptates. Numquam accusamus illum, ad sequi distinctio provident quibusdam.</p>
  </div>
  <div
    role="tabpanel"
    id="second-tab-panel"
    x-ref="secondTabPanel"
    aria-labelledby="second-tab"
    x-show="currentTab === 2"
    tabindex="0"
    @keyup.shift.tab="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
  >
    <p><em>Second tab panel.</em></p>
    <p>Magnam fuga vero facere <a href="#/">nulla itaque</a> facilis, eos doloremque error maiores amet fugiat ullam et officiis voluptatum obcaecati hic odit similique consectetur enim alias assumenda reiciendis sint libero. Eos, porro? <a href="#/">Accusamus</a>, natus!</p>
  </div>
  <div
    role="tabpanel" 
    id="third-tab-panel"
    x-ref="thirdTabPanel"
    aria-labelledby="third-tab"
    x-show="currentTab === 3"
    tabindex="0"
    @keyup.shift.tab="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
  >
    <p><em>Third tab panel.</em></p>
    <p>Cumque doloribus fugit, eos neque nulla quidem excepturi iusto magnam possimus odit enim labore aut quas error maxime nam minima quae, libero tempore sint! Placeat pariatur adipisci consectetur laborum est cum, nulla soluta porro harum, odio ut totam reiciendis. Aliquam, provident dolor! Saepe, fugiat eligendi cupiditate unde corporis tempore eveniet! Perspiciatis quibusdam nulla accusantium quisquam ducimus tempore voluptas non iure vitae. Debitis hic laudantium excepturi id harum ea obcaecati delectus, sit, aliquam nesciunt aspernatur voluptates, officia atque. At voluptas illo earum ipsam corrupti adipisci exercitationem, recusandae nulla repellat, alias, voluptatibus dolorem architecto dolores maxime doloremque voluptate! Totam dignissimos nisi animi vitae, possimus similique facere?</p>
  </div>
</div>
</div>

```html
<div x-cloak x-data="{ currentTab: 1 }">
  <nav
    role="tablist"
    class="list-style-type-none mb-2"
    aria-label="Tabs example 1"
  >
    <button 
      role="tab"
      id="first-tab"
      x-ref="firstTab"
      aria-controls="first-tab-panel"
      :aria-selected="currentTab === 1"
      class="btn-info"
      :class="currentTab === 1 && 'active'"
      @click="currentTab = 1"
      @keyup.right="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
      :tabindex="currentTab === 1 ? '0' : '-1'"
    >
      First tab
    </button>
    <button
      role="tab"
      id="second-tab"
      x-ref="secondTab"
      aria-controls="second-tab-panel"
      :aria-selected="currentTab === 2"
      class="btn-info"
      :class="currentTab === 2 && 'active'"
      @click="currentTab = 2"
      @keyup.right="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
      @keyup.left="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
      :tabindex="currentTab === 2 ? '0' : '-1'"
    >
      Second tab
    </button>
    <button
      role="tab"
      id="third-tab"
      x-ref="thirdTab"
      aria-controls="third-tab-panel"
      :aria-selected="currentTab === 3"
      class="btn-info"
      :class="currentTab === 3 && 'active'"
      @click="currentTab = 3"
      @keyup.left="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
      :tabindex="currentTab === 3 ? '0' : '-1'"
    >
      Third tab
    </button>
  </nav><!-- /role=tablist -->
  <div
    role="tabpanel"
    id="first-tab-panel"
    x-ref="firstTabPanel"
    aria-labelledby="first-tab"
    x-show="currentTab === 1"
    tabindex="0"
    @keyup.shift.tab="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
  >
    <p><em>First tab panel.</em> With an <a href="#/">example link</a>.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium modi mollitia perspiciatis, sunt enim saepe velit tempore. Repellat qui ducimus magni odio suscipit, cumque a ea eaque ipsum corrupti? Et, at ex quod repellendus quia omnis perspiciatis dolorum cumque eaque quos praesentium accusamus facilis optio rerum maiores animi cum expedita reiciendis aliquid culpa, iste voluptates. Numquam accusamus illum, ad sequi distinctio provident quibusdam.</p>
  </div>
  <div
    role="tabpanel"
    id="second-tab-panel"
    x-ref="secondTabPanel"
    aria-labelledby="second-tab"
    x-show="currentTab === 2"
    tabindex="0"
    @keyup.shift.tab="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
  >
    <p><em>Second tab panel.</em></p>
    <p>Magnam fuga vero facere <a href="#/">nulla itaque</a> facilis, eos doloremque error maiores amet fugiat ullam et officiis voluptatum obcaecati hic odit similique consectetur enim alias assumenda reiciendis sint libero. Eos, porro? <a href="#/">Accusamus</a>, natus!</p>
  </div>
  <div
    role="tabpanel" 
    id="third-tab-panel"
    x-ref="thirdTabPanel"
    aria-labelledby="third-tab"
    x-show="currentTab === 3"
    tabindex="0"
    @keyup.shift.tab="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
  >
    <p><em>Third tab panel.</em></p>
    <p>Cumque doloribus fugit, eos neque nulla quidem excepturi iusto magnam possimus odit enim labore aut quas error maxime nam minima quae, libero tempore sint! Placeat pariatur adipisci consectetur laborum est cum, nulla soluta porro harum, odio ut totam reiciendis. Aliquam, provident dolor! Saepe, fugiat eligendi cupiditate unde corporis tempore eveniet! Perspiciatis quibusdam nulla accusantium quisquam ducimus tempore voluptas non iure vitae. Debitis hic laudantium excepturi id harum ea obcaecati delectus, sit, aliquam nesciunt aspernatur voluptates, officia atque. At voluptas illo earum ipsam corrupti adipisci exercitationem, recusandae nulla repellat, alias, voluptatibus dolorem architecto dolores maxime doloremque voluptate! Totam dignissimos nisi animi vitae, possimus similique facere?</p>
  </div>
</div>
```

### Classic tabs

Codebase has styling for a “classic tabs” component.

1. Use the CSS classes `tablist`, `tab`, and `tabpanel` to the same elements as you assign the [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) `tablist`, `tab`, and `tabpanel`.
2. The classics tabs classes simply apply coloring to the tab labels, unrounded (square) corners to the bottom of tab labels, and a white mask over the button of the selected tab button so that it appears to be seamlessly attached to its tabpanel.
3. Other Codebase utilities are used, to complete the classic tabs styling.

<div class="mb-3">
<div x-cloak x-data="{ currentTab: 1 }">
  <ul
    role="tablist"
    class="tablist list-style-type-none mb-0 pl-0 flex"
    aria-label="Tabs example 2"
  >
    <li>
      <button 
        role="tab"
        id="first-tab"
        x-ref="firstTab"
        class="tab unrounded-bottom"
        aria-controls="first-tab-panel"
        :aria-selected="currentTab === 1"
        @click="currentTab = 1"
        @keyup.right="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
        :tabindex="currentTab === 1 ? '0' : '-1'"
      >
        First tab
      </button>
    </li>
    <li>
      <button
        role="tab"
        id="second-tab"
        x-ref="secondTab"
        class="tab unrounded-bottom"
        aria-controls="second-tab-panel"
        :aria-selected="currentTab === 2"
        @click="currentTab = 2"
        @keyup.right="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
        @keyup.left="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
        :tabindex="currentTab === 2 ? '0' : '-1'"
      >
        Second tab
      </button>
    </li>
    <li>
      <button
        role="tab"
        id="third-tab"
        x-ref="thirdTab"
        class="tab unrounded-bottom"
        aria-controls="third-tab-panel"
        :aria-selected="currentTab === 3"
        @click="currentTab = 3"
        @keyup.left="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
        :tabindex="currentTab === 3 ? '0' : '-1'"
      >
        Third tab
      </button>
    </li>
  </ul><!-- /.tablist -->
  <div
    role="tabpanel"
    id="first-tab-panel"
    x-ref="firstTabPanel"
    aria-labelledby="first-tab"
    x-show="currentTab === 1"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
  >
    <em>First tab panel.</em> With an <a href="#/">example link</a>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium modi mollitia perspiciatis, sunt enim saepe velit tempore. Repellat qui ducimus magni odio suscipit, cumque a ea eaque ipsum corrupti? Et, at ex quod repellendus quia omnis perspiciatis dolorum cumque eaque quos praesentium accusamus facilis optio rerum maiores animi cum expedita reiciendis aliquid culpa, iste voluptates. Numquam accusamus illum, ad sequi distinctio provident quibusdam.
  </div>
  <div
    role="tabpanel"
    id="second-tab-panel"
    x-ref="secondTabPanel"
    aria-labelledby="second-tab"
    x-show="currentTab === 2"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
  >
    <em>Second tab panel.</em> Magnam fuga vero facere <a href="#/">nulla itaque</a> facilis, eos doloremque error maiores amet fugiat ullam et officiis voluptatum obcaecati hic odit similique consectetur enim alias assumenda reiciendis sint libero. Eos, porro? <a href="#/">Accusamus</a>, natus!
  </div>
  <div
    role="tabpanel" 
    id="third-tab-panel"
    x-ref="thirdTabPanel"
    aria-labelledby="third-tab"
    x-show="currentTab === 3"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
  >
    <em>Third tab panel.</em> Cumque doloribus fugit, eos neque nulla quidem excepturi iusto magnam possimus odit enim labore aut quas error maxime nam minima quae, libero tempore sint! Placeat pariatur adipisci consectetur laborum est cum, nulla soluta porro harum, odio ut totam reiciendis. Aliquam, provident dolor! Saepe, fugiat eligendi cupiditate unde corporis tempore eveniet! Perspiciatis quibusdam nulla accusantium quisquam ducimus tempore voluptas non iure vitae. Debitis hic laudantium excepturi id harum ea obcaecati delectus, sit, aliquam nesciunt aspernatur voluptates, officia atque. At voluptas illo earum ipsam corrupti adipisci exercitationem, recusandae nulla repellat, alias, voluptatibus dolorem architecto dolores maxime doloremque voluptate! Totam dignissimos nisi animi vitae, possimus similique facere?
  </div>
</div>
</div>

```html
<div x-cloak x-data="{ currentTab: 1 }">
  <ul
    role="tablist"
    class="tablist list-style-type-none mb-0 pl-0 flex"
    aria-label="Tabs example 2"
  >
    <li>
      <button 
        role="tab"
        id="first-tab"
        x-ref="firstTab"
        class="tab unrounded-bottom"
        aria-controls="first-tab-panel"
        :aria-selected="currentTab === 1"
        @click="currentTab = 1"
        @keyup.right="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
        :tabindex="currentTab === 1 ? '0' : '-1'"
      >
        First tab
      </button>
    </li>
    <li>
      <button
        role="tab"
        id="second-tab"
        x-ref="secondTab"
        class="tab unrounded-bottom"
        aria-controls="second-tab-panel"
        :aria-selected="currentTab === 2"
        @click="currentTab = 2"
        @keyup.right="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
        @keyup.left="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
        :tabindex="currentTab === 2 ? '0' : '-1'"
      >
        Second tab
      </button>
    </li>
    <li>
      <button
        role="tab"
        id="third-tab"
        x-ref="thirdTab"
        class="tab unrounded-bottom"
        aria-controls="third-tab-panel"
        :aria-selected="currentTab === 3"
        @click="currentTab = 3"
        @keyup.left="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
        :tabindex="currentTab === 3 ? '0' : '-1'"
      >
        Third tab
      </button>
    </li>
  </ul><!-- /.tablist -->
  <div
    role="tabpanel"
    id="first-tab-panel"
    x-ref="firstTabPanel"
    aria-labelledby="first-tab"
    x-show="currentTab === 1"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 1; $nextTick(() => $refs.firstTab.focus())"
  >
    <em>First tab panel.</em> With an <a href="#/">example link</a>. Lorem ipsum dolor sit amet...
  </div>
  <div
    role="tabpanel"
    id="second-tab-panel"
    x-ref="secondTabPanel"
    aria-labelledby="second-tab"
    x-show="currentTab === 2"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 2; $nextTick(() => $refs.secondTab.focus())"
  >
    <em>Second tab panel.</em> Magnam fuga vero facere...
  </div>
  <div
    role="tabpanel" 
    id="third-tab-panel"
    x-ref="thirdTabPanel"
    aria-labelledby="third-tab"
    x-show="currentTab === 3"
    class="tabpanel b-thin p-block"
    tabindex="0"
    @keyup.shift.tab="currentTab = 3; $nextTick(() => $refs.thirdTab.focus())"
  >
    <em>Third tab panel.</em> Cumque doloribus fugit...
  </div>
</div>
```