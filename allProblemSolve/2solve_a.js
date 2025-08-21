function longestString (names){
 let longestWord = '';
 let lgWordLength = longestWord.length;
 for (name of names) {
    if (name.length > lgWordLength){
        longestWord = name;
    }
    
}
 return [longestWord, names.indexOf(longestWord)]
}
console.log(longestString (["md jahirul", "mohammad rabiul", "Shiek ripion", "maksudur rohoman attarai"]));
console.log(name);