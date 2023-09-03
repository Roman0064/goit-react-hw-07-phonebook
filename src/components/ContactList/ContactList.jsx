import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllContacts())
  },[dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
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
