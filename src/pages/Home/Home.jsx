import { Container, LinkStyled, LineStyle } from './Home.styled';
import { Helmet } from 'react-helmet';
import Cover from '../../images/default.jpg';
import { Box } from 'components/Box/Box';

const Home = () => {
  return (
    <Box title="Phonebook" styled={{ backgroundImage: `url(${Cover})` }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <LineStyle />
        <LinkStyled to="/login">Login</LinkStyled>
        <LinkStyled to="/register">Sign up</LinkStyled>
      </Container>
    </Box>
  );
};

export default Home;
