const word = "Test"; // Set your constant word here

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    console.log(reversed);
}

reverseWord(word);