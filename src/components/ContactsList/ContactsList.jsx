import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';
import { TbPoint } from 'react-icons/tb';

import {
  ItemContacts,
  ListContacts,
  ButtonDelete,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(currentFilter.toLowerCase())
  );
  
  return (
    <ListContacts>
      {visibleContacts.map(({ name, number, id }) => (
        <ItemContacts key={id}>
          <TbPoint />
          {name}: {number}
          <ButtonDelete
            type="button"
            onClick={() => {
              dispatch(removeContact(id));
            }}
          >
            Delete
          </ButtonDelete>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
