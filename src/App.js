import './App.css';
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils';
import Alert from './Components/Alert';
import React, { useState} from 'react';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  //below commented code is for color pallate to set selected color background and also some comment in navbar.js

  // const remove = () =>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }

  const toggleMode = () => {
    // console.log(cls)
    // remove();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode.';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now.';
      // },1500);
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="Text-Reader-App" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TextUtils showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
