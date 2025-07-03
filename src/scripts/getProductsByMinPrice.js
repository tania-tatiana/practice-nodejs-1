import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (enteredPrice) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    const filteredPrices = products
      .map((products) => products)
      .filter(({ price }) => price >= enteredPrice);
    return filteredPrices;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(await getProductsByMinPrice(600));
