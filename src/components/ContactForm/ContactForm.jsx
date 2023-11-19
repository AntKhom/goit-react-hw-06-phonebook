import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import css from "./contactForm.module.css"

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmitForm = (values, action) => {
        const isInContacts =
            contacts.some(({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );

        if (isInContacts) {
            return alert(`${values.name} is already in contacts.`);
        }
        
        dispatch(addContact(values));
        action.resetForm();
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