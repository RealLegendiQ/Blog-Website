import React from 'react';
import {Box} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//from components.
import Header from './components/Header';
import Home from './components/home/Home';
import View from './components/post/View';
import Create from './components/post/Create';
import Update from './components/post/Update';
import About from './components/about/about';


function App() {
  console.log(process.env.REACT_APP_AUTH0_DOMAIN);
  console.log(process.env.REACT_APP_AUTH0_CLIENT_ID);
  return ( 
    <BrowserRouter> 
      <Header/>
      <Box style = {{marginTop: 64}}>  
         <Switch>
           <Route exact path = '/' component = {Home}/> 
           <Route exact path = '/about' component = {About}/> 
           <Route exact path = '/details/:id' component = {View}/> 
           <Route exact path = '/create' component = {Create}/> 
           <Route exact path = '/update/:id' component = {Update}/> 
         </Switch>
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
