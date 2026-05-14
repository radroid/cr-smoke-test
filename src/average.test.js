import { test } from 'node:test'
import assert from 'node:assert/strict'
import { average } from './average.js'

test('average of numbers', () => {
  assert.equal(average([2, 4, 6]), 4)
})

test('average of empty array is 0', () => {
  assert.equal(average([]), 0)
})

test('average of non-array input is 0', () => {
  assert.equal(average(null), 0)
})

test('average of single element is that element', () => {
  assert.equal(average([7]), 7)
})

test('average of negative numbers', () => {
  assert.equal(average([-2, -4, -6]), -4)
})

test('average of floating-point numbers', () => {
  assert.equal(average([1.5, 2.5, 3.5]), 2.5)
})
