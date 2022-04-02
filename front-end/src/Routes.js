import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from './pages/Home'
import AddCompany from './pages/AddCompany'

export default ()=> {

  return (
    <Switch>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route  path ="/createCompany">
        <AddCompany/>
      </Route>
      <Route exact path ="/config">
       
      </Route>
    </Switch>

  )
}