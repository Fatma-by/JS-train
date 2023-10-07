/*Here's the JavaScript implementation of the binary search function*/

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    // Check if x is present at the mid
    if (arr[mid] === x) {
      return mid;
    }

    // If x is greater, ignore the left half
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      // If x is smaller, ignore the right half
      right = mid - 1;
    }
  }

  // If we reached here, the element is not present
  return -1;
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 5;
let result = binarySearch(arr, x);
console.log(result); // Outputs: 4 (index of the element 5 in the sorted array)
