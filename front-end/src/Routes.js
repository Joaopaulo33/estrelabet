import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from './pages/Home'
import AddCompany from './pages/AddCompany'
import AddCollaborator from './pages/AddCollaborator'
import CompanyInformation from './pages/CompanyInformation'
import CollaboratorInformation from './pages/CollaboratorInformations'



export default ()=> {

  return (
    <Switch>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route  exact path ="/createCompany">
        <AddCompany/>
      </Route>
      <Route  exact path ="/createCollaborator/:id">
        <AddCollaborator/>
      </Route>
      <Route exact path ="/companyInformation/:id">
        <CompanyInformation/>
      </Route>
      <Route exact path ="/collaboratorInformations/:id">
        <CollaboratorInformation/>
      </Route>
    </Switch>

  )
}