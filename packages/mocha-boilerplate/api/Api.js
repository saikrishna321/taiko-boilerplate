import fetch, { Headers } from 'node-fetch';
var btoa = require('btoa');
const baseApi = 'http://127.0.0.1:8000/wp-json/wp/v2';
export async function post(url, requestBody) {
  const username = process.env.USERNAME;
  const password = process.env.API_KEY;
  let authString = `${username}:${password}`;

  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic ' + btoa(authString));
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify(requestBody);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(`${baseApi + url}`, requestOptions);
  if (response.ok) {
    return response;
  } else {
    throw new Error(JSON.stringify(await response.json()));
  }
}
