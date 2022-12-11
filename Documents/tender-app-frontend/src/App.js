import React, {useEffect,useState } from 'react';
import './App.css';
//import Button from 'react-bootstrap/Button';
import Auth from './Auth';
import Login from './Login';
import Cards from './Cards';
import LandingPage from './LandingPage';
import {Routes,Route } from 'react-router-dom';
// import restProvider from 'ra-data-simple-rest';

// const dataProvider = restProvider('http://localhost:3000');

function App() { 
  
  const [user, setUser] = useState([]);
  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    
      
      
    <div className="App">
      <header className="App-header">
        
      <Routes>
   <Route path="/login" element = {<Login setUser={setUser}/>} />
   <Route path="/auth" element={<Auth/>}/>
   <Route path="/cards" element = {<Cards/>}/>
   <Route path="/" element = {<LandingPage/>}/>
      </Routes>
    </header>
    </div>
   
  );
}

export default App;
