import { ContactListStyled } from './ContactsList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClickDelete={() => onClickDelete(id)}
        />
      ))}
    </ContactListStyled>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func,
};
