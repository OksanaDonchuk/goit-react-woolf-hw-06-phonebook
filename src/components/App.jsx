import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';

const App = () => {
  const filteredContacts = useSelector(state => state.contacts);

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
