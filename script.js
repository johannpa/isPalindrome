function isPalindrome(string){
    string = string.toLowerCase();
    const charactersArr = string.split("");
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

    let lettersArr = [];
    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    if(lettersArr.join('') === lettersArr.reverse().join("")) return true;
    else return false;
}

console.log(isPalindrome("Race car"));