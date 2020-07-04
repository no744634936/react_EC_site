import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {BrowserRouter,Route,Switch} from "react-router-dom"


const HatsPage=()=>{
    return (
        <div>
            <h1>hats page</h1>
        </div>
    )
}

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop/hats" component={HatsPage}></Route>
            </Switch>

        </div>
    </BrowserRouter>
  );
}

export default App;
