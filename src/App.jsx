import Navbar from './Components/Navbar'; 

import './index.css';

import Card from './Components/Card';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './paging/Home';
import About from './paging/About';
import Contact from './paging/Contact';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    <div className="card-container">
      <Card
      name="sumaiya"
      Department="CSE"
      year="3rd year"
      />
      <Card
      name="ayesha"
      Department="IT"
      year="2nd year"
      />
      <Card
      name="rijana"
      Department="IT"
      year="1st year"
      />
    </div>
    </div>
  );
}
      
  function App() {
    return (
      <div className="App"> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
     
      
      <Footer />
    
    </div>
    
  );
}

export default App;
