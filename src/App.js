import React from 'react';
import {Header} from './Components/Header';
import  {Footer}  from './Components/Footer';
import  Routes  from './Routes';
import Layout from './Components/Layout';

function App() {
  return (
    <Layout>
        <Header/>
          <Routes/>
        <Footer/>  
    </Layout>
    
    
    
  );
}

export default App;
