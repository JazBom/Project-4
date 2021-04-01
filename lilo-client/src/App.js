import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Nav } from './components/Nav';
import { Container } from './components/Container';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { MenuForm } from './components/MenuForm';
import { Form } from './components/Form';
import { DogForm } from './components/DogForm';
import { DogImages } from './components/DogImages';
import { AdminLogin } from "./users/AdminLogin";
import { ProtectedRoute } from "./users/ProtectedRoute";

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  }

  const onLogout = () => {
    setLoggedIn(false);
  }

  return (
    <Router>
    <div className="app">
    <img className="image-background" src="https://web.archive.org/web/20161031200755if_/http://static.panoramio.com/photos/large/102225398.jpg" alt="beach boxes in background"/>
    <Nav loggedIn={isLoggedIn} logOut={onLogout}/>
          <Switch>
          
          <Route exact path="/">
            <Container/>
          </Route>

          <Route exact path="/home">
            <Container/>
          </Route>


          <Route exact path="/about">
            <About/>
          </Route>
          
          <Route exact path="/menu">
            <Menu/>
          </Route>
          
          <Route exact path="/admin-login">
            <AdminLogin logIn={onLogin}/>
          </Route>

          <ProtectedRoute 
          path="/admin-user"
          loggedIn={isLoggedIn}
          component={Admin}/>

          <ProtectedRoute 
          path="/admin/menu-update"
          loggedIn={isLoggedIn}
          component={MenuForm}/>

          <ProtectedRoute 
          path="/admin/dogs"
          loggedIn={isLoggedIn}
          component={DogForm}/>

          <ProtectedRoute 
          path="/admin/dogs/images"
          loggedIn={isLoggedIn}
          component={DogImages}/>

        </Switch>
        
    <Footer/>
    </div>
    </Router>
  );
}

export { App };
