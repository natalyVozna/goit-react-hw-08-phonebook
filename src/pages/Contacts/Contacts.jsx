import { AddButton, PlusStyle, Minus, ContactsBox } from './Contacts.styled';
import { Notify } from 'notiflix';
import { FormContact } from '../../components/FormContact/FormContact';
import { Filter } from '../../components/Filter/Filter';
import { Notification } from '../../components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getContcts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/filter/selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/operations';
import { setFilter } from '../../redux/filter/slice';
import { useState } from 'react';
import { Box } from 'components/Box/Box';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useMemo } from 'react';

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);
  const contacts = useSelector(getContcts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      dispatch(addContact(data));
    } else {
      Notify.warning('You already have this contact');
    }
  };

  // const getFilterContacts = () => {
  //   const normalizedContact = filter?.toLowerCase();

  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(normalizedContact);
  //   });
  // };
  const getFilterContacts = useMemo(() => {
    const normalizedContact = filter?.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  }, [filter, contacts]);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));

    Notify.failure('Contact deleted');
  };

  return (
    <>
      <Box title="Contacts">
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <>
          {contacts.length && (
            <Filter
              value={filter}
              disabled={contacts.length === 0}
              onChange={changeFilter}
            />
          )}

          {showForm && <FormContact onSubmitHandle={onAddContact} />}
          <ContactsBox>
            {getFilterContacts.length > 0 ? (
              <ContactsList
                contacts={getFilterContacts}
                onClickDelete={removeContact}
              />
            ) : (
              <Notification
                message={
                  contacts.length > 0 ? 'There is no match' : 'No contacts'
                }
              />
            )}
          </ContactsBox>
          <AddButton type="button" onClick={() => setShowForm(!showForm)}>
            {!showForm ? <PlusStyle /> : <Minus />}
          </AddButton>
        </>
      </Box>
    </>
  );
};

export default Contacts;
