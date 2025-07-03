import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    const categories = {};
    for (const product of products) {
      if (categories[product.category]) {
        categories[product.category].push(product.name);
      } else {
        categories[product.category] = [product.name];
      }
    }
    return categories;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(await groupProductsByCategories());
