import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import css from "./contactForm.module.css"
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);



    const handleSubmitForm = (e) => {
        e.preventDefault();

        console.log(e.target.name.value)
        
        const isExistingContact = (name) => { 
            return contacts.some(contact => contact.name === name);
        }
        

        if (isExistingContact(e.target.name.value)) {
            return alert(`${e.target.name.value} is already in contacts.`);
        }

        const newObj = {
            id: nanoid(),
            name: e.target.name.value,
            number: e.target.number.value,
        };
        
        dispatch(addContact(newObj));
        e.target.reset();
    };

    return <form className={css.formInput } onSubmit={handleSubmitForm}>
        <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                required
            />
        <br />      
        <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Phone number"
                required
            />
        <br />
        <button type="submit">Add contact</button>
    </form>
};

export default ContactForm;