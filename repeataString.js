/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

*/



function repeatStringNumTimes(str, num) {
    
    if(num > 0){
    var addStr = str;
    for(var i=0; i<num-1; i++){
        str += addStr;    
    }
        return str;
    } else{
        return "";
    }
    
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("abc", -2));
