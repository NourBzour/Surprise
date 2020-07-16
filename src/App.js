import React, { useState , useCallback } from "react";

import "./App.css";
import Main from './component/main';
import { BrowserRouter as Router , Route , Redirect ,Switch} from 'react-router-dom';
import User from './component/User';
import Cake from './cake';
import Memory from '../src/component/Memory';
import Auth from './login/Auth';
import { AuthContext } from  './context/auth.context';
import Snow from './confetti/Snow';
import Pride from './confetti/Pride';
import Fire from './confetti/Fire';
import Ran from './confetti/Ran';

const App  = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
let routes;

if(isLoggedIn){
  routes = (
    <Switch>
    

<Route path="/"  exact >
          <Cake/>
         <Fire/>
      
      </Route>

      <Route  path="/MessagesforNour"  exact >
      <User/>
         <Pride/>
      
        <Ran/>
       
       

      </Route>
      <Route  path="/OurLastForeverMemories"  exact >
        <Memory/>
        <Snow/>
      </Route>
     
      <Redirect  to="/" />
  </Switch>
  );
}else{
  routes = (
    <Switch>
<Route  path="/Auth"  exact >
        <Auth/>
      </Route>
      
      <Redirect  to="/Auth" />
      </Switch>
  );
}

    return (
      <div>
      
         <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }} >
        
<Router>
  <Main/>
  
         {routes}
         
      </Router>
      </AuthContext.Provider>
     
      </div>
     

    );
  }


export default App;