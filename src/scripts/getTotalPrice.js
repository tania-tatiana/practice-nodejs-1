import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const getTotalPrice = async () => {
  let sum = 0;
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    for (const product of products) {
      sum = sum + Number(product.price);
    }
    return sum;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(await getTotalPrice());
