import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlise';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contact_list}>
      {getFilteredContacts().map(contact => (
        <li key={contact.id} className={css.contact_item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.btn_delete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
