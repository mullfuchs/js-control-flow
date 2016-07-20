var word = 'here come dat boi';
var retval = '';
for(var i = word.length - 1; i >= 0; i--){
	retval += word[i];
}
console.log(retval);