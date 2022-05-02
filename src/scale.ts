/**
 * An object with the keys being each scalar position and the values
 * being strings.
 */
export type Scale = Record<number, string>

type Options = {
  step?: number
  unit?: string
  prefix?: string
}

const notEmpty = (value: unknown) => typeof value !== 'undefined' && value !== null

/**
 * Generate a size scale of CSS values. Defaults to 4px increments.
 *
 * @param positions - Number of positions in the scale.
 * @param options - Additional options
 */
export function sizeScale(
  positions: number,
  { step = 4, unit = 'px', prefix }: Options
): Scale {
  return {
    ...Array(positions).map((position) =>
      [prefix, Math.ceil(position * step), unit]
        .filter(notEmpty)
        .join('')
    ),
  }
}
