---
title: "Form elements"
layout: layout.njk
prevPage: "/docs/2-classless-basics/inline-elements"
nextPage: "/docs/2-classless-basics/media"
prevLink: "Inline elements"
nextLink: "Media"
---

In Codebase, most form elements are rendered as block elements, for ease of styling.

If you want to make an input field an inline element, add the layout [block utility class]({{ '/docs/3-layout-utilities/blocks/' | url }}) `inline-block`.

## Single line input fields

### Text

<label for="text-example">Text:</label>
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">

```html
<label for="text-example">Text:</label>
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">
```

### Email

<label for="email-example">Email:</label>
<input id="email-example" name="examplename" placeholder="Example email input field" type="email">

```html
<label for="email-example">Email:</label>
<input id="email-example" name="examplename" placeholder="Example email input field" type="email">
```

### Telephone number

<label for="tel-example">Tel:</label>
<input id="tel-example" name="examplename" placeholder="Example phone number input field" type="tel">

```html
<label for="tel-example">Tel:</label>
<input id="tel-example" name="examplename" placeholder="Example phone number input field" type="tel">
```

### Search

<label for="search-example">Search:</label>
<input id="search-example" name="examplename" placeholder="Example search input field" type="search">

```html
<label for="search-example">Search:</label>
<input id="search-example" name="examplename" placeholder="Example search input field" type="search">
```

### Number (picker)

<label for="number-example">Number:</label>
<input type="number" id="quantity" name="example" min="0" inputmode="numeric" pattern="\d*">

```html
<label for="number-example">Number:</label>
<input id="number-example" name="examplename" placeholder=" Example number input field" type="number">
```

### Date and time

<label for="date-example">Date:</label>
<input id="date-example" name="examplename" type="date">

```html
<label for="date-example">Date:</label>
<input id="date-example" name="examplename" type="date">
```

<label for="month-example">Month (and year):</label>
<input id="month-example" name="examplename" type="month">

```html
<label for="month-example">Month (and year):</label>
<input id="month-example" name="examplename" type="month">
```

<label for="time-example">Time:</label>
<input id="time-example" name="examplename" type="time">

```html
<label for="time-example">Time:</label>
<input id="time-example" name="examplename" type="time">
```

### Password

<label for="password-example">Password:</label>
<input id="password-example" name="examplename" placeholder="Example password input field" type="password">

```html
<label for="password-example">Password:</label>
<input id="password-example" name="examplename" placeholder="Example password input field" type="password">
```

### File upload

<label for="upload-example">File upload:</label>
<input id="upload-example" type="file" id="upload-1" name="examplename" accept="image/png, image/jpeg">

```html
<label for="upload-example">File upload:</label>
<input id="upload-example" type="file" id="upload-1" name="examplename" accept="image/png, image/jpeg">
```

## Color picker

<label for="color-example">Color</label>
<input type="color" id="color-example">

## Textareas (multi line)

<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" name="examplename" type="textarea" placeholder="Example textarea" rows="4"></textarea>

```html
<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" name="examplename" type="textarea" placeholder="Example textarea" rows="4"></textarea>
```

## Selects

### Single selects

<label for="single-select-example">Single select:</label>
<select id="single-select-example" name="examplename">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>

```html
<label for="single-select-example">Single select:</label>
<select id="single-select-example" name="examplename">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>
```

### Multi selects

<label for="multi-select-example">Multi-select:</label>
<select id="multi-select-example" name="examplename" multiple size="3">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>

```html
<label for="multi-select-example">Multi-select:</label>
<select id="multi-select-example" name="examplename" multiple size="3">
  <option value="first">First option </option>
  <option value="second">Second option </option>
  <option value="third">Third option</option>
</select>
```

## Radio boxes and checkboxes

### Radio

<form class="mb-3">
  <input id="radio-1" name="examplename" checked="checked" type="radio">
  <label for="radio-1">Radio 1</label><br>
  <input id="radio-2" name="examplename" type="radio">
  <label for="radio-2">Radio 2</label><br>
  <input id="radio-3" name="examplename" type="radio">
  <label for="radio-3">Radio 3</label>
</form>

```html
<input id="radio-1" name="examplename" checked="checked" type="radio">
<label for="radio-1">Radio 1</label><br>
<input id="radio-2" name="examplename" type="radio">
<label for="radio-2">Radio 2</label><br>
<input id="radio-3" name="examplename" type="radio">
<label for="radio-3">Radio 3</label>
```

### Checkbox

<form class="mb-3">
  <input id="checkbox-1" name="examplename" checked="checked" type="checkbox">
  <label for="checkbox-1">Checkbox 1 </label><br>
  <input id="checkbox-2" name="examplename" type="checkbox">
  <label for="checkbox-2">Checkbox 2</label><br>
  <input id="checkbox-3" name="examplename" type="checkbox">
  <label for="checkbox-3">Checkbox 3</label>
</form>

```html
<input id="checkbox-1" name="examplename" checked="checked" type="checkbox">
<label for="checkbox-1">Checkbox 1 </label><br>
<input id="checkbox-2" name="examplename" type="checkbox">
<label for="checkbox-2">Checkbox 2</label><br>
<input id="checkbox-3" name="examplename" type="checkbox">
<label for="checkbox-3">Checkbox 3</label>
```

## Buttons

This is what a Codebase default (classless) button looks like:

<button type="submit">Button</button> – button, i.e. `<button>`

```html
<button type="submit">Button</button>
```

<p>
  <input value="Click me" type="button">
  <input value="Submit" type="submit">
  <input value="Reset" type="reset">
</p>

```html
<input value="Click me" type="button">
<input value="Submit" type="submit">
<input value="Reset" type="reset">
```

See also the UI [button component]({{ '/docs/7-simple-components/buttons' | url }}).

## Fieldsets and legends

You can wrap a number of related inputs and buttons together in a `<fieldset>` and label it with a `<legend>`.

<form get="">
  <fieldset>
    <legend>Subscribe to our email</legend>
    <label for="email-example">Your email:</label>
    <input id="email-example" class="mb-1" name="examplename" placeholder="Example email input field" type="email">
    <input id="checkbox-terms" name="examplename" checked="checked" type="checkbox">
    <label for="checkbox-terms">I have read your <a href="">privacy policy</a>.</label><br>
    <button type="submit" class="mt-1 btn-primary">Subscribe</button>
  </fieldset>
</form>