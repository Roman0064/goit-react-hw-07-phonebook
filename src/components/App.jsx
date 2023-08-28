import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactItem/ContactItem';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
    return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};
export default App;