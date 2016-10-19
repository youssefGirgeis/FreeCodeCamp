/*

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

*/

function bouncer(arr) {
	var truesArray = [];
	for(var i=0; i<arr.length; i++){

		if(Boolean(arr[i]) !== false){

			truesArray.push(arr[i]);
		}
	}
	return truesArray;
}