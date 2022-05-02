import { sizeScale } from './scale'

test('size scale in px', () => {
  const scale = sizeScale(4)

  expect(scale[0]).toEqual('0px')
  expect(scale[1]).toEqual('4px')
  expect(scale[2]).toEqual('8px')
  expect(scale[3]).toEqual('12px')
})

test('size scale in pt', () => {
  const scale = sizeScale(4, 4, 'pt')

  expect(scale[0]).toEqual('0pt')
  expect(scale[1]).toEqual('4pt')
  expect(scale[2]).toEqual('8pt')
  expect(scale[3]).toEqual('12pt')
})

test('size scale in em', () => {
  const scale = sizeScale(5, 0.3, 'em')

  expect(scale[0]).toEqual('0em')
  expect(scale[1]).toEqual('0.3em')
  expect(scale[2]).toEqual('0.6em')
  expect(scale[3]).toEqual('0.9em')
  expect(scale[4]).toEqual('1.2em')
})
