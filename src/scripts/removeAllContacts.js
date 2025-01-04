import fs from 'fs/promises';
import path from 'node:path';

const dbPath = path.resolve('src', 'db', 'db.json');

export const removeAllContacts = async () => {
  try {
    const fileContent = await fs.readFile(dbPath, 'utf8');
    const data = JSON.parse(fileContent);
    if (!Array.isArray(data)) {
      throw new Error('Помилка!');
    }
    const updatedData = [];
    await fs.writeFile(dbPath, JSON.stringify(updatedData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Помилка!', error.message);
  }
};

removeAllContacts();
