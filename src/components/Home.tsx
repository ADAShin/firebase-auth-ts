import { VFC } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthContext } from '../context/AuthContext';

export const Home: VFC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <div>
      <h1>ホームページ</h1>
      <h2>ようこそ {user!.email} さん</h2>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};
