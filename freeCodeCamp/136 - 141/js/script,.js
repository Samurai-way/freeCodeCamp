/*                  136                 */

export default function subtract(x, y) {
    return x - y;
  }


/*                  137                 */

import subtract from "./math_functions.js";
subtract(7,4);

/*                  138                 */

const makeServerRequest = new Promise((resolve, reject) => {
});

/*              139                     */

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });

/*              140                 */

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });

/*                 141              */

const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });