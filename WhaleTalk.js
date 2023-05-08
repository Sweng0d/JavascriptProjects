const input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for(let i = 0; i<input.length;i++){
  if(input[i] == "e"){
    resultArray.push("e");
  }
  if(input[i] == "u"){
    resultArray.push("u");
  }
  for(let j = 0; j<vowels.length; j++){
    if(input[i] == vowels[j]){
      resultArray.push(vowels[j]);
    }
  }
}
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);

