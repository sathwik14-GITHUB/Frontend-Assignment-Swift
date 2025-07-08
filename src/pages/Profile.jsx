import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaArrowLeft } from "react-icons/fa";
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  if (!user) return <div className="profile-page">Loading...</div>;

  return (
    <div className="profile-page">
      <Header user={user} />
      <div className='welcome-heading'>
        {location.pathname === '/profile' && (
          <button className="back-button" onClick={() => navigate('/')}><FaArrowLeft /></button>
        )}
        {location.pathname === '/profile' && (
          <span className="welcome-text">Welcome, {user?.name}</span>
        )}
      </div>
      <div className='profile-bg-container'>
        <div className="profile-container">
          <div className="user-heading">
            <div className="user-circle-profile">
              {user?.name?.split(' ')[0][0]}{user?.name?.split(' ')[1]?.[0]}
            </div>
            <div className='user-name-email-container'>
              <span className='name'>{user?.name}</span>
              <span className='email'>{user.email}</span>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-row">
              <label className='label'>User ID</label>
              <p className='labelText'>{user.id}</p>
            </div>
            <div className="profile-row">
              <label className='label'>Username</label>
              <p className='labelText'>{user.username}</p>
            </div>
            <div className="profile-row">
              <label className='label'>Email</label>
              <p className='labelText'>{user.email}</p>
            </div>
            <div className="profile-row">
              <label className='label'>Address</label>
              <p className='labelText'>{user.address.suite}, {user.address.street}, {user.address.city}</p>
            </div>
            <div className="profile-row">
              <label className='label'>Phone</label>
              <p className='labelText'>{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}