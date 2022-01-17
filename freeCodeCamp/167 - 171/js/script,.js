/*                  167                 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);

/*                  168                 */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);

/*                  169             */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

/*                  170             */

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

/*              171                 */

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);



