import PropTypes from 'prop-types';
import { useMemo } from 'react';
import {
  Item,
  Info,
  DeleteButton,
  Cover,
  InfoBox,
  Text,
} from './ContactItem.styled';

export const ContactItem = ({ name, number, onClickDelete, id }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const firstLetter = name.split(' ').map(el => {
    const arr = [];
    arr.push(el.slice(0, 1));
    return arr.join('');
  });

  const color = useMemo(() => getRandomHexColor(), []);

  return (
    <Item>
      <Cover style={{ backgroundColor: color }}>{firstLetter}</Cover>
      <InfoBox>
        <Info>{name}</Info>
        <Text>{number}</Text>
      </InfoBox>
      <DeleteButton type="button" onClick={() => onClickDelete(id)}>
        delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClickDelete: PropTypes.func.isRequired,
};
