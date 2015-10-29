dryish.css
==========

A CSS methodology heavily based on [DRY CSS](http://www.slideshare.net/jeremyclarke/dry-css-a-dontrepeatyourself-methodology-for-creating-efficient-unified-and-scalable-stylesheets) (by [Jeremy Clarke](http://simianuprising.com/)) and [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css), with some BEM and SMACSS touches. Bundled with helpful selectors and a super simple flex-based layout system. A start point for any front-end project.

# Principles of Dryish

- Design for reusability.
- Keep style separate from content.
- Specificity no deeper than one level. Yes, that hard. Only for modifiers (in some cases) are allowed to access level two.
- Don't repeat yourself (DRY). Avoid it.

### Dryish :heart: Sass

[Sass](http://sass-lang.com/) is incredible. It really gives superpowers to CSS. But we need to limit it's flight, to avoid duplication. There are two rules on *Dryish.css*, as follows:

- No variables outsite setup files. Create a unique file selector and extend from there.
- No mixins. They are super, but also make your compiled file super redundant.

From now on, `@extend` is your best friend.

### Guidelines

> Why this style isn't part of a group?

Make individual selectors as rare and sparse as possible.

Try to [think](https://facebook.github.io/react/docs/thinking-in-react.html) like when you're working with [React.js](https://facebook.github.io/react). Split elements in smaller elements. Draw boxes around every element (and its children) in the mock and give them all names accordingly to its style, not the content. Forget about classes like `.profile-card` or `.about-page-title`. Think in more reusable and simple classes like `.box` or `.big-text`. [Nicole Sullivan](http://www.stubbornella.org/content/author/nicole/) talked about this on her [article](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

![Elements Split](http://s8.postimg.org/q8bj3vbr9/dryish_facebook_example.png)

# Naming conventions

*Dryish.css* offers five types of selectors, all presented in the code below:

```
<div class="christmas-tree">
    <div class="christmas-tree--star is-active">
        <img src="shine.png" />
    </div>
    <ul class="christmas-tree--lights">
        <li class="christmas-tree--light mod-red"><svg /></li>
        <li class="christmas-tree--light mod-green"><svg /></li>
        <li class="christmas-tree--light mod-blue"><svg /></li>
    </ul>
</div>
```

#### Block
Independent, this selector has the highest level. Should represent a container.

###### Example
`.christmas-tree`

#### Element
A selector that has dependency of another element. Prefixed with `--` before the name of the block.

###### Example
`.christmas-tree--lights`

#### Modifier
Prefixed with `.mod-`. Try to place these modifiers on the higher level, to make it more reusable. But if you need something super specific, I have good news: This should be the only selector that could be child of another selector. It's recommended to place all your modifiers in a unique stylesheet. So, before creating a new one, you ask yourself:

> Haven't I made a modifier for this?

Check the list, and create a new one if not.

###### Examples
```
.mod-green
.mod-bordered
.mod-no-icon
```

#### State
Prefixed with `.is-`. The state selectors manage the state of an element and the user interaction. This selector type works great with Javascript. And is the ONLY selector type where is allowed to use `!importante`. Only ONLY, ok? :rage:

###### Examples
```
.is-hidden
.is-active
.is-current
.is-collapsed
.is-disabled
```

#### Utilities
Prefixed with `.u-`. For generic helper classes.

###### Examples
```
.u-clearfix
.u-responsive
```

## Implementation

- Install Sass.

*Dryish.css* is all based on it.

- Install Sass Linter.

It will help you write following the best pratices by default. Without IDs, overqualified selectors, etc.

- Clone this repository inside your project's folder.

We will provide access through NPM, Bower, etc; in a near future.
