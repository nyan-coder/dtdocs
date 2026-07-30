import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Intro from './pages/Intro';
import Tradutores from './pages/Tradutores';
import Mixers from './pages/Mixers';

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/tradutores" element={<Tradutores />} />
            <Route path="/mixers" element={<Mixers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
