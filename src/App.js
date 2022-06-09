import React, {useState} from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';
import styles from './styles/App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App;