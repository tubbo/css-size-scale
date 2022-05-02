# css-size-scale

Generates a size scale for use in CSS-in-JS design systems such as
[Stitches](https://stitches.dev).

When you run:

```typescript
import { sizeScale } from 'css-size-scale'

sizeScale(8)
```

You'll get an 8-position scale, each position being 4 pixels apart:

```typescript
{
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '20px',
  5: '24px',
  6: '28px',
  7: '32px',
}
```

The `sizeScale()` function can be configured with additional parameters
to control the step interval and CSS unit. For example, here's how you
might create a font size scale using these additional parameters:

```typescript
sizeScale(8, 0.3, 'em')
```

This would return:

```
{
  0: '0em',
  1: '0.3em',
  2: '0.6em',
  3: '0.9em',
  4: '1.2em',
  5: '1.5em',
  6: '1.8em',
  7: '2.1em',
}
```

Full API documentation available at https://tubbo.github.io/css-size-scale
