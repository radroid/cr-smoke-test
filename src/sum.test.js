import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sum } from './sum.js'

test('sum adds numbers', () => {
  assert.equal(sum([1, 2, 3]), 6)
})

test('sum of empty array is 0', () => {
  assert.equal(sum([]), 0)
})
