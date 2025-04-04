
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

function toJadenCase(string) {
    let UpdatedString = "";
    const words = string.split(" ");
//  console.log(words);
    const wordsL = words.length;
    for (let i = 0; i < wordsL; i++) {
        let textTemp= words[i];
//      console.log(textTemp);

        const text2 = textTemp.replace(textTemp[0], (textTemp[0].toUpperCase()));
//      console.log(text2);
            
    }
 //   console.log(UpdatedString);
    return (UpdatedString);
}

console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));

/*

const str = "The  quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
const wordsL = words.length;

console.log(words);
console.log(wordsL);
*/
