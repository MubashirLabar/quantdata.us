import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// SCSS
import './css/App.scss';

// screen
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screen/Home'
import AffiliateProgram from './screen/AffiliateProgram'

function App() {
  return (
    <div className="App">
      { 
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/affiliate-program' component={AffiliateProgram} />
           </Switch>
           <Footer/>  
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
