import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


class App extends Component {
  render() {
    return (
      //to use Routing. Application inside the BrowserRoute can use Route
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;