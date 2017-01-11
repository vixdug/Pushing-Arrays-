/*refactor code to return index aswell */

var example = "lighthouse in the house"
var letters = new Object;

// changed conditional to account for array and allow for .push

function countLetters(string){
  var splitString = string.split(" ").join("")
  for (var i = 0; i < splitString.length; i++) {
    var l = splitString.charAt(i)
      if (letters[l] === undefined) {
      letters[l] = [i]
      }else {
      letters[l].push(i);
    }
  }
return(letters);
}

function print(output){
  console.log(output)
}


countLetters(example);
print(letters)
