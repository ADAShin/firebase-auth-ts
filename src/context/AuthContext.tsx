import { createContext, useState, useContext, useEffect, FC } from 'react';
import { UserCredential, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

type AuthUser = UserCredential['user'];

export type AuthContextType = {
  isLoading: boolean;
  user: AuthUser | null;
};

const AuthContext = createContext({} as AuthContextType);
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loginUser) => {
      console.log(loginUser);
      setUser(loginUser);
      setIsLoading(false);
    });
    return () => {
      console.log('unsubscribed');
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
