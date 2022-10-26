import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Country/Footer/Footer';
import Header from './Components/Header/Header';
// import { useEffect, useState } from 'react';





function App() {

  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div >


  );
}



export default App;
