/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  
  var arrGroup=[];
  var index = 0;
  var newSize = 0;
  var iteration = arr.length/size;
  //console.log(iteration);
  for(var i=0; i<iteration; i++){
  		newSize += size;
  		arrGroup.push(arr.slice(index, newSize));
  		index += size;
  }

  return arrGroup;
}