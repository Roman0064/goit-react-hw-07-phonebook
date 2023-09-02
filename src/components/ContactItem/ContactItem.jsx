import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookReducer';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.list}>
      {name}: {number}
      <button onClick={() => onDelete(id)} className={css.btn}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const onDeleteContact= (id) => {
    dispatch(deleteContact(id));
  };


  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
