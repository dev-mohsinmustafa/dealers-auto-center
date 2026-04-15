import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { VehicleProvider } from './context/VehicleContext';
import './styles/main.css';

function App() {
  return (
    <Router>
      <VehicleProvider>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </VehicleProvider>
    </Router>
  );
}

export default App;
