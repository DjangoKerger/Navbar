import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Demo from './pages/Demo';
import Navbar from './Navbar/Navbar';
import "./App.css"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={KeyFeature} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/demo" component={Demo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
