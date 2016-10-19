/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/


function destroyer(arr){
    var newArray = [];
    for(var i=0; i < arr.length; i++){
        var counter = 0;
        for(var j=1; j<arguments.length; j++){
            if(arr[i] !== arguments[j]){
                counter++;
            }
        }   
        if(counter === arguments.length - 1){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

