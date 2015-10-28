dryish.css
==========

A start point based on [DRY CSS](http://www.slideshare.net/jeremyclarke/dry-css-a-dontrepeatyourself-methodology-for-creating-efficient-unified-and-scalable-stylesheets) (by [Jeremy Clarke](http://simianuprising.com/)) and [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css) principles. Also some BEM and SMACSS.

# Principles of Dryish

- Design for reusability.
- Keep style separate from content.
- Specificity no deeper than 1 level. Yes, that hard. 2 for exceptions.
- Don't repeat yourself (DRY). Avoid it.

### Sass guidelines

- No variables.
- No mixins.

It will avoid duplication. From now on, `@extend` is your best friend.

> Why this style isn't part of a group?

Make individual selectors as rare and sparse as possible.

Try to [think](https://facebook.github.io/react/docs/thinking-in-react.html) like when working with React. Split elements in smaller elements. Draw boxes around every element (and subelements) in the mock and give them all names accordingly to its style, not the content. Think in re-usable classes like *.media*, *.box*, *.red*. [Nicole Sullivan](http://www.stubbornella.org/content/author/nicole/) talked about this on her [article](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

![Elements Split](http://www.stubbornella.org/content/wp-content/uploads/2010/06/Facebook-ImageBlock-216x1024.png)

# Naming conventions

```
<div class="media-box">
    <div class="media-box--picture is-active">
        <img src="photo.jpg" />
    </div>
</div>
```

#### Block
`.media-box`

Independent, this element has the highest level.

#### Element
`.media-box--picture`

An element that has dependency of another element. Prefixed with `--` before the name of the block.

#### State
`.is-active`

Prefixed with `.is-`. Like `.is-active`, `.is-current`, `.is-collapsed`, and so on. Works great with Javascript. It's allowed to use `!importante` here. ONLY here.

## Implementation

- Install Sass Linter.

It will help you write following the best pratices by default. Without IDs, overqualified selectors, etc.
