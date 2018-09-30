const findMedianSortedArrays = (nums1, nums2) => {
  if (!nums1.length && !nums2.length) {
    return '';
  }
  let res = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  })
  let medianIndex = res.length / 2
  if (res.length % 2 === 0) {
    let leftIndex = Math.floor((res.length - 1) / 2);
    let rightIndex = Math.ceil((res.length - 1) / 2);
    return (res[leftIndex] + res[rightIndex]) / 2;
  } else if (res.length % 2 === 1) {
    return res[(res.length - 1) / 2];
  }
};
const findMedianSortedArrays2 = function(A, B) {
  let m = A.length,
    n = B.length;

  if (m > n) {
    return findMedianSortedArrays(B, A);
  }

  let imin = 0,
    imax = m,
    i,
    j;
  while (imin <= imax) {
    i = (imin + imax) >> 1;
    j = ((m + n + 1) >> 1) - i;
    if (j > 0 && i < m && B[j - 1] > A[i]) {
      imin = i + 1;
    } else if (i > 0 && j < n && A[i - 1] > B[j]) {
      imax = i - 1;
    } else {
      if (i === 0) {
        num1 = B[j - 1];
      } else if (j === 0) {
        num1 = A[i - 1];
      } else {
        num1 = Math.max(A[i - 1], B[j - 1]);
      }

      if ((m + n) & 1) {
        return num1;
      }

      if (i === m) {
        num2 = B[j];
      } else if (j === n) {
        num2 = A[i];
      } else {
        num2 = Math.min(A[i], B[j]);
      }
      return (num1 + num2) / 2.0;
    }
  }
};

const findMedianSortedArrays3 = (nums1, nums2) => {
  let sumLength = nums1.length + nums2.length;
  if (!sumLength) {
    return '';
  }
  let leftIndex = 0;
  let rightIndex = 0;
  if (sumLength % 2 === 0) {
    leftIndex = Math.floor((sumLength - 1) / 2);
    rightIndex = leftIndex + 1
  } else {
    leftIndex = rightIndex = (sumLength - 1) / 2
  }
  let resArray = [];
  let i = i1 = i2 = 0;
  while (i <= rightIndex) {
    if (nums1.length === i1 || (nums2.length > i2 && nums2[i2] <= nums1 [i1])){
      i++;
      resArray = [...resArray, nums2[i2]]
      i2++;
    }else if (nums2.length === i2 || (nums1.length > i1 && nums1[i1] < nums2[i2])) {
      i++;
      resArray = [...resArray, nums1[i1]]
      i1++;
    } 
  }
  if (leftIndex === rightIndex) {
    return resArray[leftIndex]
  } else {
    return (resArray[leftIndex] + resArray[rightIndex]) / 2;
  }
}

