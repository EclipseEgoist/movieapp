import React from 'react';
import Home from './routers/Home';
import About from './routers/About';
import Detail from './routers/Detail';
import MovieView from './routers/MovieView';
import Navigation from './components/Navigation';
// import {HashRouter, Route} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path = '/' exact = {true} component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/movie-detail' component = {Detail}/>
        <Route path = '/movie-view' component = {MovieView}/>
      </Switch>
    </BrowserRouter>


    // <HashRouter>
    //   <Navigation />
    //   <Route path = "/" exact = {true} component = {Home} />
    //   <Route path = "/about" exact = {true} component = {About} />
    //   <Route path = "/movie-detail" exact = {true} component = {Detail} />
    // </HashRouter>
    
    // <div>
    //   <h3>MovieApp</h3>
    //   <Home />
      
    // </div>
  )
}

export default App;
