// change http request into promise-based function

const https = require("https");
//httpsRequest("https://api.github.com/search/repositories?q=react");
//我用chrome可以打开，显示一个JSON。但是用给的function会拿到Did not get an OK from the server. Code: 403
//response.on("end")会拿到error，Unexpected token R in JSON at position 2
//然后我尝试catch error的地方输出一下data看看什么问题，结果：
//Request forbidden by administrative rules. Please make sure your request has a User-Agent header (https://docs.github.com/en/rest/overview/resources-in-the-rest-api#user-agent-required). Check https://developer.github.com for other possible causes.
function httpsRequest(url) {
  const request = https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(
        `Did not get an OK from the server. Code: ${response.statusCode}`
      );
      response.resume();
    }

    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      try {
        // When the response body is complete, we can parse it and log it to the console
        console.log(JSON.parse(data));
      } catch (e) {
        // If there is an error parsing JSON, log it to the console and throw the error
        console.log("AAAAAAAAAAAAAAAA" + data);
        throw new Error(e.message);
      }
    });
  });
  request.on("error", (err) => {
    console.log("CCCCCCCCCCCCCCCCCCC");
    console.error(
      `Encountered an error trying to make a request: ${err.message}`
    );
  });
}
httpsRequest("https://api.github.com/search/repositories?q=react");

// function getJSON(url) {
//   request = new Promise((resolve, reject) => {
//     // reject(url + "unfinished");
//     https.get(url, (response) => {
//     if (response.statusCode !== 200) {
//       reject(
//         new Error(
//           `Did not get an OK from the server. Code: ${response.statusCode}`
//         )
//       );
//       response.resume();
//     }
//           let data = "";
//           response.on("data", (chunk) => {
//             data += chunk;
//           });
//           response.on("end", () => {
//             try {
//               // When the response body is complete, we can parse it and log it to the console
//               resolve(JSON.parse(data));
//             } catch (e) {
//               // If there is an error parsing JSON, log it to the console and throw the error
//               reject(new Error(e.message));
//             }
//           });
//         })
//         .on("error", (err) => {
//           reject(
//             new Error(
//               `Encountered an error trying to make a request: ${err.message}`
//             )
//           );
//         });
//   });
//   return request
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       return err.message;
//     });
// }
