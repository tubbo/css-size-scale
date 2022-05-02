import times from 'lodash/times'

/**
 * The return value of `sizeScale()`, an object representing your
 * generated CSS scale.
 */
export type Scale = Record<number, string>

/**
 * Additional options that may be passed to `sizeScale()`.
 */
export type ScaleOptions = {
  /**
   * The amount of units that each interval will increase by.
   *
   * @default 4
   */
  step?: number

  /**
   * CSS unit used by the scale.
   *
   * @default "px"
   */
  unit?: string

  /**
   * An optional prefix that you can add to scale keys. Instead of each
   * key being just a number, you can use a prefix to add
   * differentiating names to each scale position, such as "box0" or
   * "space3".
   */
  prefix?: string
}

/**
 * Generate a size scale of CSS values. Defaults to 4px increments.
 *
 * @param positions - Number of positions in the scale.
 * @param step - How many units per interval
 * @param unit - Unit of measurement
 */
export const sizeScale = (
  positions: number,
  step = 4,
  unit = 'px'
): Record<number, string> => ({
  ...times(positions, (position) => `${Math.ceil(position * step)}${unit}`),
})

