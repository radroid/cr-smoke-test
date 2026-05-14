/** Average of an array of numbers. Returns 0 for an empty array. */
export function average(numbers) {
  if (numbers.length === 0) return 0
  const total = numbers.reduce((t, n) => t + n, 0)
  return total / numbers.length
}
