/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
  if (!stones || !stones.length) return 0;
  if (stones.length === 1) return stones[0];
  stones = stones.sort((a, b) => b - a); // 降序排列
  while(stones.length > 1) {
    const max = stones[0];
    stones.shift()
    const sMax = stones[0];
    stones.shift();
    const rest = max - sMax;
    if (rest > 0) {
      stones.unshift(rest);
    }
    lastStoneWeight(stones);
  }
};

const arr = [2,7,4,1,8,1];
console.log(lastStoneWeight(arr));