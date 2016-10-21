function reverseString(str) {
  var arr1 = str.split('');
  var arr2 = arr1.reverse();
  var str2 = arr2.join('');
  return str2;
}