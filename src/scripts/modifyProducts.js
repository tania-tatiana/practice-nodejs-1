import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    for (const product of products) {
      delete product.description;
    }
    await fs.writeFile(PATH_DB, JSON.stringify(products, undefined, 2));
    return products;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(await modifyProducts());
