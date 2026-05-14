/** Average of an array of numbers. Returns 0 for an empty or non-array input. */
export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0
  const total = numbers.reduce((t, n) => t + n, 0)
  return total / numbers.length
}
