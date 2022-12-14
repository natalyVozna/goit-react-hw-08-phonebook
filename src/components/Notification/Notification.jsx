import { LineStyle, Text, Box } from './Notification.styled';
import PropTypes from 'prop-types';
import Cover from '../../images/default.jpg';

export const Notification = ({ message = 'No information' }) => {
  return (
    <Box style={{ backgroundImage: `url(${Cover})` }}>
      <LineStyle />
      <Text>{message}</Text>
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
