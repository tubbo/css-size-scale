import { sizeScale } from './scale'

test('default size scale', () => {
  const scale = sizeScale(4)

  expect(scale[0]).toEqual('0px')
  expect(scale[1]).toEqual('4px')
  expect(scale[2]).toEqual('8px')
  expect(scale[3]).toEqual('12px')
})
