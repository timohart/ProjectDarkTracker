import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vampire from './components/Vampire';
import Werewolf from './components/Werewolf';

function App() {
  return (
    <Router>
      <div className="container">
        <div id="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/">Darkness Trackers</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vampire">Vampire</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/werewolf">Werewolf</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/vampire" element={<Vampire />} />
          <Route path="/werewolf" element={<Werewolf />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <div id="footer">
          <small>Developed by <a href="mailto:timoh.larp@gmail.com">Timothe Hartwig</a></small>
        </div>
      </div>
    </Router>
  );
}

export default App;
