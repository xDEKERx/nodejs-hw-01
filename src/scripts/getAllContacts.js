import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Помилка!', error.message);
    return [];
  }
};

console.log(await getAllContacts());
