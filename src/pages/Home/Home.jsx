import { Container, LinkStyled, LineStyle, Title } from './Home.styled';
import { Helmet } from 'react-helmet';
import Cover from '../../images/default.jpg';
import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <Box title="" styled={{ backgroundImage: `url(${Cover})` }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <LineStyle />
        {!isLoggedIn ? (
          <>
            <LinkStyled to="/login">Login</LinkStyled>
            <LinkStyled to="/register">Sign up</LinkStyled>
          </>
        ) : (
          <Title>
            Welcom, {user.name} <br /> to your phonebook
          </Title>
        )}
      </Container>
    </Box>
  );
};

export default Home;
