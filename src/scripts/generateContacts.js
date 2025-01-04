import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createContacts } from '../utils/createFakeContact';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createContacts);
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка!', error.message);
  }
};

generateContacts(5);
