import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  let data = [];
  for (let index = 0; index < number; index++) {
    data.push(createFakeContact());
  }
  data = JSON.stringify(data);

  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
