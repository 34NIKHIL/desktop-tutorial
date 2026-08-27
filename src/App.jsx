import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Manager from './pages/Manager';
import './App.css'; // Added App.css import

function App() {
  return (
    <div className="app-container">
      {/* The Navigation bar stays at the top of every page */}
      <Navbar />

      {/* Main content area */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
