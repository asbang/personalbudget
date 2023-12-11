import React, {useEffect, useState} from 'react';
import authService from '../components/auth-service';

import {
    Link
  } from "react-router-dom";

function Menu() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    authService.logout();
  }

  return (
    <nav
        role="navigation"
        aria-label='Main Menu'
        itemType="https://schema.org/SiteNavigationElement"
    >
      <ul>
        <li><Link to="/" className="nav-option">Home</Link></li>

        {currentUser && (
          <li><Link to="/dashboard" className="nav-option">Dashboard</Link></li>
        )}

        {currentUser ? (
          <li><a href="/login" className="nav-option" onClick={logout}>Log Out</a></li>
        ) : (
          <div>
            <li><Link to="/login" className="nav-option">Login</Link></li>
            <li><Link to="/signup" className="nav-option">Sign Up</Link></li>
          </div>
        )}

        
      </ul>
    </nav>
  );
}

export default Menu;