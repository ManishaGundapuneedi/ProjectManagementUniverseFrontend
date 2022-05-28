import axios from 'axios';
import { AUTHORIZATION_TOKEN } from './constants';

export async function postApiData(url, method, payload, bearer, auth,params) {
  let urlData,authToken;
  if (params !== ''&& params !==undefined) {
    urlData = url + params;
  }
  else {
    urlData = url;
  }
  if (auth === true) {
    authToken = bearer ? bearer + " " + AUTHORIZATION_TOKEN : `${AUTHORIZATION_TOKEN}`
  }
  else {
    authToken = ''
  }
  var config = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': authToken

    },
    responseType: 'json'
  };
  return await axios.post(urlData, payload, config);

}
export async function getApiData(url, params, method, bearer, auth, payload) {
  let urlData, authToken;
  if (params !== ''&& params !==undefined) {
    urlData = url + params
  }
  else {
    urlData = url
  }
  if (auth === true) {
    let userData = localStorage.getItem("userData");
    let token = localStorage.getItem("userData") ? JSON.parse(userData)["_token"] : "";
    authToken = bearer ? bearer + " " + token : `${token}`
  }
  else {
    authToken = ''
  }
  var config = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': authToken
    },
    responseType: 'json'
  };
  return await axios.get(urlData, config, payload);


}
export function updateApiData(url, method, payload, bearer, auth) {
  let urlData = url;
  let authToken;
  if (auth === true) {
    authToken = bearer ? bearer + " " + AUTHORIZATION_TOKEN : `${AUTHORIZATION_TOKEN}`
  }
  else {
    authToken = ''
  }
  var config = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': authToken,
    },
    responseType: 'json'
  };
  return axios.put(urlData, payload, config);

}
export function deleteApiData(url, method, payload, bearer, auth,params) {
  let urlData,authToken;
  if (params !== ''&& params !==undefined) {
    urlData = url + params;
  }
  else {
    urlData = url;
  }
  if (auth === true) {
    authToken = bearer ? bearer + " " + AUTHORIZATION_TOKEN : `${AUTHORIZATION_TOKEN}`
  }
  else {
    authToken = ''
  }
  var config = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': authToken,
    },
    responseType: 'json'
  };
  return axios.delete(urlData, config);
}

export function uploadFileApiData(url, method, payload,params) {
  let urlData;
  if (params !== ''&& params !==undefined) {
    urlData = url + params;
  }
  else {
    urlData = url;
  }
  var config = {
    method: method,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',

    },
    responseType: 'json'
  };
 return axios.post(urlData, payload, config);

}
