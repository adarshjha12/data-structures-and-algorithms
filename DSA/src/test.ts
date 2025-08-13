// two pointer

function hasPairWithSum(arr: number[], target: number) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}
// console.log(hasPairWithSum([1, 2, 3, 4, 6], 6));



// sliding window
function maxSumSubarray(arr: number[], k: number) {
    let sum = 0, maxSum = 0;

    // first window
    for (let i = 0; i < k; i++) sum += arr[i];
    maxSum = sum;

    // slide window
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

// Output: 9
// Explanation: Subarray [5, 1, 3] has the largest sum = 9

