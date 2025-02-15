import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Top from './pages/Top';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/top">Top</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </Router>
  );
};

export default App;
