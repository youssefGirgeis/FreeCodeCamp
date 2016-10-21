/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  var arr1 = str.split('');
  var arr2 = arr1.reverse();
  var str2 = arr2.join('');
  return str2;
}