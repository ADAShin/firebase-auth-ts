import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { PublicRoute, PrivateRoute } from './routes/Route';

const App: VFC = () => {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <Routes>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
