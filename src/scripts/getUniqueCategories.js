import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const getUniqueCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    const categories = products
      .map(({ category }) => category)
      .filter((category, index, array) => index === array.indexOf(category));
    return categories;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(await getUniqueCategories());
