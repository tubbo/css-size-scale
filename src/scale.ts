import times from 'lodash/times'

/**
 * A series of CSS values that are equidistant from each other.
 */
export type Scale = { [step: number]: string }

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
  ...times(positions, (position) => {
    const calculation = position * step
    const value = Math.ceil(calculation * 10) / 10

    return [value, unit].join('')
  }),
})
