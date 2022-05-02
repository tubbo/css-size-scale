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
