import React, { VFC, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const SignUp: VFC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('登録');
    if (emailRef.current && passwordRef.current) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          // TODO
        });
    }
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" ref={emailRef} />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          登録済みの方は<Link to={'/login'}>こちら</Link>からログイン
        </div>
      </form>
    </div>
  );
};
