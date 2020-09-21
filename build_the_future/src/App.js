import React from 'react';
import "./styles/tailwind.css";
import Header from './components/header/Header';
import Layout from './components/content/Layout';

function App() {
  return (
    <div className="container">
      <Header />
      <Layout />
    
    </div>
  );
}

export default App;
