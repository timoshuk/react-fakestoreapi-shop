import axios from "axios";

const baseUrl = "https://fakestoreapi.com/";

const getProducts = async () => {
  await axios
    .get(baseUrl + "products")
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(`Get products error ${error}`);
    });
};
