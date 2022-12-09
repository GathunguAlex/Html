import React from 'react';
import './App.css';
//import Button from 'react-bootstrap/Button';
import Auth from './Auth';
import Login from './Login';
import Cards from './Cards';
// import restProvider from 'ra-data-simple-rest';

// const dataProvider = restProvider('http://localhost:3000');

function App() {  
  return (
    
    <div className="App">
      <header className="App-header">
        
        <Login/>
        <Auth/>
        <Cards/>
      
    </header>
    </div>
    
  );
}

export default App;
