function cutRope(number)
{
  if (number === 1) return 1
  if (number === 2) return 2
  if (number === 3) return 3
  const res = number / 3
  const mod = number % 3
  if (mod === 0) return Math.pow(3, res)
  if (mod === 1) return Math.pow(3, res - 1) * 4
  if (mod === 2) return Math.pow(3, res - 1) * 2
}