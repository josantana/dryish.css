dryish.css
==========

A CSS methodology heavily based on [DRY CSS](http://www.slideshare.net/jeremyclarke/dry-css-a-dontrepeatyourself-methodology-for-creating-efficient-unified-and-scalable-stylesheets) (by [Jeremy Clarke](http://simianuprising.com/)) and [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css) principles, with some BEM and SMACSS touches.

# Principles of Dryish

- Design for reusability.
- Keep style separate from content.
- Specificity no deeper than one level. Yes, that hard. Only for modifiers (in some cases) are allowed to access level two.
- Don't repeat yourself (DRY). Avoid it.

### Sass guidelines

- No variables.
- No mixins.

It will avoid duplication. From now on, `@extend` is your best friend.

> Why this style isn't part of a group?

Make individual selectors as rare and sparse as possible.

Try to [think](https://facebook.github.io/react/docs/thinking-in-react.html) like when you're working with [React.js](https://facebook.github.io/react). Split elements in smaller elements. Draw boxes around every element (and its children) in the mock and give them all names accordingly to its style, not the content. Forget about classes like `.profile-card` or `.about-page-title`. Think in more reusable and simple classes like `.box` or `.big-text`. [Nicole Sullivan](http://www.stubbornella.org/content/author/nicole/) talked about this on her [article](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/). Read it.

![Elements Split](http://www.stubbornella.org/content/wp-content/uploads/2010/06/Facebook-ImageBlock-216x1024.png)

# Naming conventions

Dryish.css offers five types of selectors, presented in the code below:

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
Independent, this selector has the highest level. Should represent the container of some kind of style.

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

###### Example
```
.mod-green
.mod-bordered
.mod-no-icon
```

#### State
Prefixed with `.is-`. The state selectors manage the state of an element and the user interaction with it. This selector type works great with Javascript. It's allowed to use `!importante` here. But ONLY here.

###### Example
```
.is-hidden
.is-active
.is-current
.is-collapsed
.is-disabled
```

#### Utilities
Prefixed with `.u-`. Generic helper classes.

###### Example
```
.u-clearfix
.u-responsive
```

## Implementation

- Install Sass Linter.

It will help you write following the best pratices by default. Without IDs, overqualified selectors, etc.
