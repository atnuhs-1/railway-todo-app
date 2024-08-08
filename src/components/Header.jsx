import React from 'react';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../authSlice';
import './header.css';

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useHistoryの代わりにuseNavigateを使用
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie('token');
    navigate('/signin'); // history.pushの代わりにnavigateを使用
  };

  return (
    <header className="header">
      <h1>Todoアプリ</h1>
      {auth ? (
        <button onClick={handleSignOut} className="sign-out-button">
          サインアウト
        </button>
      ) : (
        <></>
      )}
    </header>
  );
};
