import { useAuth } from 'hooks';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'components/Layout/Layout';
import { refreshUser } from 'redux/auth/operation';
import { RestrictedRoute } from 'http.js/RestrictedRoute';
import { PrivateRoute } from 'http.js/PrivateRoute';

const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const RegisterPage = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return !isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute
  //             redirectTo="/contacts"
  //             component={<RegisterPage />}
  //           />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/contacts"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // );

  return (
    // <div>App</div>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} /> */}
        {/* <Route index element={<LoginPage />} /> */}

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
