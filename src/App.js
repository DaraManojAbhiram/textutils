import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'Text Utils - Dark Mode';
      setInterval(()=>{
        document.title = 'Text Utils is amazing!';
      }, 2000)
      setInterval(()=>{
        document.title = 'Install Text Utils now!';
      }, 1500)
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'Text Utils - Light Mode'
    }
  }

  
  
  return (
    <>
    {/*<Navbar/>*/}
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert} />} />
    </Routes>
    </div> 
    </Router>
    </>
  );
}
export default App;
