import './App.css';
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import About from './Components/About';
// import {
//   // BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter,
// } from "react-router-dom";


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

  const toggleMode = () => {
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
      {/* <Navbar title="REACT-APP" abouttext="About Us"/> */}
      <Navbar title="Text-Reader-App" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container" >
        {/* <BrowserRouter>
          <Routes>
            <Route path="/about">{About}</Route>
          </Routes>
          <Routes>
            <Route path="/textutils" components={<TextUtils showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes>
        </BrowserRouter> */}
        <TextUtils showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
