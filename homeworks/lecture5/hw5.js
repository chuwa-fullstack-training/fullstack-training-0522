// change http request into promise-based function

const https = require("https");

// function httpsRequest(url) {
//   const request = https.get(url, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = "";
//     response.on("data", (chunk) => {
//       data += chunk;
//     });
//     response.on("end", () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on("error", (err) => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        const error = new Error(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        );
        response.resume();
        reject(error);
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(e.message);
        }
      });
    });

    request.on("error", (err) => {
      const er = new Error(
        `Encountered an error trying to make a request: ${err.message}`
      );
      reject(er);
    });
  });
}
