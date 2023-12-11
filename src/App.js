import React, {useEffect, useState} from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './components/Menu';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import TestDash from './pages/TestDash';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import authService from './components/auth-service';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    authService.expireWarning();
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Router>
      <Menu/>
      <Header/>
      <div className="mainContainer">
      <Routes>
          <Route path='/dashboard' element={<TestDash/>} />
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/' element={<HomePage/>} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

