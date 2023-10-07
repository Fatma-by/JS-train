/**
 * 1 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */

function reverseStr(str) {

  var res = "";
   let i=str.length-1;
   while (i>=0) {
 res= res + str[i]+i;
 i-- ;

    
   } 
   return res;

}
reverseStr ("hello")

/**
 * 2) A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
 * Write a function  dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr.
 * The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 *
 * @param {Array} arr
 * @return {number}
 */