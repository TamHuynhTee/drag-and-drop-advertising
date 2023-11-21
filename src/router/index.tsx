// import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
const Admin = lazy(() => import('../pages/Admin'));
const ConsumerPage = lazy(() => import('../pages/Consumer'));

type Props = {};

const AppRouter = ({}: Props) => {
  return (
    <BrowserRouter>
      <RouterPaths />
    </BrowserRouter>
  );
};

const RouterPaths = () => {
  const location = useLocation();

  if (location.pathname === '/') return <Navigate to={'/admin'} />;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path="/admin"
          index
          element={<Admin />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="/consumer"
          element={<ConsumerPage />}
          errorElement={<ErrorBoundary />}
        />
        <Route path="/" />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
