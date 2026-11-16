import Navbar from './Components/Navbar'; 
import './index.css';

import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="dashboard">
      <Navbar />
      <h1>Student Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    <div className="card-container">  
      
      <Card
        name="sumaiya"
        department="IT"
        year="3rd Year"></Card>
      <Card
        name="Ayesha"
        department="CSE"
        year="3rd Year"></Card>
      <Card
        name="rijana"
        department="IT"
        year="3rd Y"></Card>

    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
