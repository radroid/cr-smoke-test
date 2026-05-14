/** Average of an array of numbers. */
export function average(numbers) {
  const total = numbers.reduce((t, n) => t + n, 0)
  return total / numbers.length
}
