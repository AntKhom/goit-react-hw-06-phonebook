import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

// import Contact from "../Contact/Contact";

import css from "./contact.module.css";

const ContactList = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts?.filter(contact =>
        contact?.name?.toLowerCase().includes(filter.toLowerCase())
    );

    if (!filteredContacts?.length) {
        return <p>No contacts</p>;
    } 

    return <table>
        <tbody>
            {filteredContacts.map(contact => (
                <tr className={css.contact} key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td><button className={css.btnDelete} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></td>
            </tr>
            )
            )}
        </tbody>
    </table>
}
export default ContactList;