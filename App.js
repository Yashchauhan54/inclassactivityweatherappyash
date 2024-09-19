
import React from 'react';
import Weather from './Weather';
import Footer from './Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  return (
    <div>
      
    <div className="background">
      <Weather />
      
    </div>
    <Footer />
    </div>
  );
}

export default App;
