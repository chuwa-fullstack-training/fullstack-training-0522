function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      try {
        console.log("status code is: ", this.status)
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(this.status + ' ' + this.statusText);
        }
      } catch (e) {
        reject(e.message);
      }
    };
    request.onerror = function () {
      reject(this.status + ' ' + this.statusText);
    };
    request.send();
  });
}

getJSON('https://api.github.com/users/chuwa-fullstack-training').then(
  console.log
);

// Promise-based example
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      resolve(data);
    }, 1000);
  });
}

function checkOrder(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      data.orderId = 12345;
      resolve(data);
    }, 1000);
  });
}

function getDiscount(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      data.discount = 0.1;
      resolve(data);
    }, 1000);
  });
}

function sendConfirmation(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      data.isConfirmed = true;
      resolve(data);
    }, 1000);
  });
}

function displayData(data) {
  console.log(data);
}

getUser()
  .then(data => checkOrder(data))
  .then(data => getDiscount(data))
  .then(data => sendConfirmation(data))
  .then(data => displayData(data))
  .catch(error => console.error(error));

// getUser()
//   .then(checkOrder)
//   .then(getDiscount)
//   .then(sendConfirmation)
//   .then(displayData)
//   .catch(error => console.error(error));
