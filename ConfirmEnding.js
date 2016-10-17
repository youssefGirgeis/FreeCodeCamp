/*
    Check if a string (first argument, str) ends with the given target string (second argument, target).
*/


function confirmEnding(str, target) {
    
    var arrOfStr = str.split(' ');
    var lastWord = arrOfStr[arrOfStr.length - 1];
    
    var start = lastWord.length - target.length;
    var end = lastWord.length;
    
    if(lastWord.substring(start, end) === target){
        return true;
    }else{
        return false;
    }
}

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // ture