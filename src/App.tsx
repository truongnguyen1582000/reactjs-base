import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import publicRoutes from './router/public-route';
import protectedRoute from './router/protected-route';
import PrivateRouteGuard from './layouts/PrivateRouteGuard';
import { Loading } from './components';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
        <PrivateRouteGuard>
          <Routes>
            {protectedRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </PrivateRouteGuard>
      </Suspense>
    </Router>
  );
}

export default App;
