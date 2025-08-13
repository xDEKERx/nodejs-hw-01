import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        const newContacts = [];

        for (let i = 0; i < number; i++){
            const newContact = createFakeContact();
            newContacts.push(newContact);
        }

        const updatedContacts = [...contacts, ...newContacts];
        writeContacts(updatedContacts);
    } catch (error) {
        console.error('Generating contacts error:', error);
    }
};

generateContacts(5);