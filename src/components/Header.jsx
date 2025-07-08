import React from 'react';
import './Header.css';
import {  useNavigate } from 'react-router-dom';

export default function Header({ user }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">S</span>WIFT
      </div>
      <div className="header-right">
        <div className="user-circle">
          {user?.name?.split(' ')[0][0]}{user?.name?.split(' ')[1]?.[0]}
        </div>
        <span className="user-name" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
          {user?.name}
        </span>
      </div>
    </header>
  );
}