import config from "../config";
const fetchCategories = async () => {
  const url = `${config.defaultUrl}/products/categories`;
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

export default fetchCategories;
