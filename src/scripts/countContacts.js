
import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts.length;
    } catch (error) {
        console.log('Counting contacts error:', error);
    }
};

console.log(await countContacts());
