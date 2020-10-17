import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>

        <Header />

        <Switch>
            {/* Search Page  */}
            <Route path='/search'>
               <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
         

        <Footer />
      </Router>
      

      
    </div>
  );
}

export default App;
