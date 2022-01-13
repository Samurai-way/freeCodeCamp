/*              152                         */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex);

/*                  153             */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 

/*                      154             */

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

/*                      155                 */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

/*                      156             */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

