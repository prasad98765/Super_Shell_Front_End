const axios = require("axios");

export function Getproducts(data) {
  console.log("In Call API");

  return axios({
    method: "post",
    url: "http://localhost:5000/GetProducinfo",
    data:data
  });
}

export function getImagePath(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/image",
    data: data
  });
}

export function postProduct(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/Producinfo",
    data: data
  });
}

export function delectProduct(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/DelectProduct",
    data: data
  });
}

export function findProduct(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/FindProduct",
    data: data
  });
}

export function updateProduct(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/UpdateProduct",
    data: data
  });
}

export function Sendmessage(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/sendEmail",
    data: data
  });
}


export function Sendenquiry(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/sendEnquiryEmail",
    data: data
  });
}

export function Distrubutorshipform(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/distributorshipFrom",
    data: data
  });
}


export function Customerdetails(data) {
  console.log("In Call API");
  return axios({
    method: "POST",
    url: "http://localhost:5000/customerDetails",
    data: data
  });
}