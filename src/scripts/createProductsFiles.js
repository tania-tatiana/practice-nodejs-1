import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_FILES_DIR } from '../constants/products.js';
import { PATH_DB } from '../constants/products.js';

const createProductsFiles = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);
  for (let i = 0; i < products.length; i++) {
    const nameOfFile = products[i].name.split(' ').join('-');
    await fs.writeFile(
      path.resolve(PATH_FILES_DIR, `${nameOfFile}.json`),
      JSON.stringify(products[i], undefined, 2),
    );
  }
};
console.log(await createProductsFiles());
