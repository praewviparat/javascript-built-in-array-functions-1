let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  for(let i = 0; i < words.length; i++){
    if(words.length >= 5){
      return words
    }
  }
}

const result = words.filter(get5CharWords)

console.log(result); // Output: ["apple", "elephant"]
