/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/


function rot13(str) {
  
  var transfromedStr= '';
  var c;

  for(var i =0; i < str.length; i++){

    var uniCode = str.charCodeAt(i);

    if(uniCode >= 65 && uniCode <= 90){
    if(uniCode <= 77){
      c = String.fromCharCode(uniCode + 13);
    }else{
      c = String.fromCharCode(uniCode - 13);
    }
    transfromedStr += c;

    //console.log(str[i] + ' ' + c);
  } else{

    c = String.fromCharCode(uniCode);
    transfromedStr += c;
  }
}

  console.log(transfromedStr);
}