import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import 'react-toastify/dist/ReactToastify.css';

import {
  FormInput,
  ButtonForm,
  LabelForm,
  InputForm,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const duplicate = contacts.some(
          contact =>
            contact.name.toLowerCase() ===
            name.toLowerCase().trim()
    );
    
    if (duplicate) {
      alert (`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormInput onSubmit={handleSubmitForm}>
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          placeholder="Enter name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          placeholder="Enter phone number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </LabelForm>
      <ButtonForm type="submit" disabled={!(name && number)}>
        Add contact
      </ButtonForm>
    </FormInput>
  );
};

export default ContactForm;
