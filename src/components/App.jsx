import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';

const App = () => {
  const filteredContacts = useSelector(getContacts);

  return (
    <div>
      <h1 className="title">Phone Book</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      {filteredContacts.length !== 0 && <Filter />}
      <ContactList />
    </div>
  );
};

export default App;
