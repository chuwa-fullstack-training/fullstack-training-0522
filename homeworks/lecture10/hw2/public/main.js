const express = require('express');
const app = require('express');

async function handleCheck(element) {
      const todoID = element.dataset.id;
      // Start a http request - delete
      // ES side
      fetch(`/hw2/api/todo/${todoID}`, {
            method: 'DELETE'
      })
            .then(res => {
                  if (res.ok) {
                        console.log('DELETE request sent!');
                        window.location.href = '/hw2'
                  }
                  else console.error('DETELE request failed!');
            })
            .catch(err => {
                  console.error('Error: ', err);
            });
};

async function handleSubmit() {
      // get test from input box
      const todo = document.querySelector('#todo').value;

      if (!todo) return alert('Please enter a todo name');

      fetch('/hw2/api/todo', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({ todo: todo })
      })
            .then(res => {
                  window.location.href = '/hw2'
            })
            .catch(error => {
                  console.error(error);
            });
};

document.querySelector('#todo').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
            handleSubmit();
      }
});