import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

import { ToastContainer } from 'react-toastify';
import { Container, TitleForm, TitleContacts, Info } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />

      {!contacts.length && <Info>No contacts.</Info>}

      {contacts.length > 0 && (
        <>
          <TitleContacts>Contacts</TitleContacts>
          <Filter />
        </>
      )}
      <ContactsList />
      <ToastContainer />
    </Container>
  );
};

export default App;
