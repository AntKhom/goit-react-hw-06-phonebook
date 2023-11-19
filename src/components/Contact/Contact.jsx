import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';    
import css from "./contact.module.css";

const Contact = ({ id, name, number}) => {
    const dispatch = useDispatch();
    
    return <tr className={css.contact} key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td><button className={css.btnDelete} onClick={() => dispatch(deleteContact(id))}>Delete</button></td>
           </tr>
}

export default Contact; 