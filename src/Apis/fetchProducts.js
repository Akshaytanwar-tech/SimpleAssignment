import config from "../config";
const fetchProducts = async () => {
  const url = `${config.defaultUrl}/products`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchProducts;
