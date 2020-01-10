/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (!candidates || !candidates.length) {
    return []
  }
  candidates.sort()
  let res = []
  let temp = []
  findMatchRoute(res, temp, candidates, target)
  return res
};
function findMatchRoute (res, temp, candidates, target, startFrom) {
  if (target === 0) {
    res.push(temp)
  } else if (target < 0) {
    // nothing
  } else {
    for (let i = startFrom; i < candidates.length; i += 1) {
      const currentCandidate = candidates[i];
  
      // Let's try to add another candidate.
      temp.push(currentCandidate);
  
      // Explore further option with current candidate being added.
      findMatchRoute(
        res,
        temp,
        candidates,
        target - currentCandidate,
        i,
      )
  
      // BACKTRACKING.
      // Let's get back, exclude current candidate and try another ones later.
      temp.pop();
    }
  }
}
console.log(combinationSum([1,2], 6))