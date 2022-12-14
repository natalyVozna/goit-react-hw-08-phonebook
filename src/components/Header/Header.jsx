import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { AppBar } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};

export default Header;
