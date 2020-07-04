import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import HomePage from './pages/homepage/homepage.components.js';
import Shop from "./pages/shop/shop.component.js"



function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={Shop}></Route>
            </Switch>

        </div>
    </BrowserRouter>
  );
}

export default App;
