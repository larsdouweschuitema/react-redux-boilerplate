import example from './example'

test('example counter', () => {
  expect(
    example(0, {type: 'INCREMENT'})
  ).toEqual(1)
})