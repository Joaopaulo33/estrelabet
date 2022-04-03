import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from './pages/Home'
import AddCompany from './pages/AddCompany'
import CompanyInformation from './pages/CompanyInformation'


export default ()=> {

  return (
    <Switch>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route  exact path ="/createCompany">
        <AddCompany/>
      </Route>
      <Route exact path ="/companyInformation/:id">
        <CompanyInformation/>
      </Route>
    </Switch>

  )
}