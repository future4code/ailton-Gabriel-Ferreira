const word:string = "pinto"

let factorial: number = word.length;

let possibleAnagrams: number = factorial;
for (var i = 1; i < factorial; i++) {
  possibleAnagrams *= i;
}

console.log(possibleAnagrams)