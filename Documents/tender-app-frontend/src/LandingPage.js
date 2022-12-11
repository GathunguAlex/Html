import React from 'react';
import Auth from './Auth';
import Login from './Login';
import Cards from './Cards';
import { NavLink } from 'react-router-dom'

function LandingPage(){
return(
    <>     
    <Auth/>
    <Login />
    <NavLink to= "/cards">
    <button>View tenders</button>
          </NavLink>
    </>
)

};


 export default LandingPage