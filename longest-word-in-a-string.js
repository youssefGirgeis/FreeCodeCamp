/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  
  var arr = str.split(' ');
  var len = 0;
  for(var i=0; i<arr.length; i+=1){
    
    if(arr[i].length > len){
      len = arr[i].length;
    }
  }
  return len;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));