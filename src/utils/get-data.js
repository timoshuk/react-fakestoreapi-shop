import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getProducts = async (callback) => {
  await axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleProduct = async (id, callback) => {
  await axios
    .get(`${baseUrl}/products/${id}`)
    .then((res) => callback(res.data))
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = async (callback) => {
  await axios
    .get(`${baseUrl}/products/categories`)
    .then((res) => callback(res.data))
    .catch((error) => {
      console.log(error);
    });
};
