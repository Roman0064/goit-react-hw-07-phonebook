import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  
    return (
      <li className={css.list}>
        {name}: {number}
        <button onClick={handleDeleteContact} className={css.btn}>Delete</button>
      </li>
    );
  };
  
  ContactItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactItem;
