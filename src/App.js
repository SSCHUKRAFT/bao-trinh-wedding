import React, { useState } from 'react';
import { Home, Rsvp, Timeline, Travel, Party } from './pages'
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar className="side-bar" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/rsvp"element={<Rsvp sidebarOpen={sidebarOpen} />} />
            <Route path="/timeline"element={<Timeline />} />
            <Route path="/travel"element={<Travel />} />
            <Route path="/weddingParty"element={<Party />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
