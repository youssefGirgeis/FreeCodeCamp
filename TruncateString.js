/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/


function truncateString(str, num) {
    var truncateStr;
    if(str.length > num){
    var index = num - 3;
    truncateStr = str.substring(0, index);
    truncateStr += '...';
    return truncateStr;
        
    } else{
        truncateStr = str.substring(0, num);
        truncateStr +='...';
        return truncateStr;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));