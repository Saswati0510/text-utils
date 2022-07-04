
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const toggleNavbarTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#14213d';
      setToggleThemeText('Enable light mode');
      showAlert('Dark mode enabled.', 'success');
      document.title='TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setToggleThemeText('Enable dark mode');
      showAlert('Light mode enabled.', 'success');
      document.title='TextUtils - Light Mode';
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const [mode, setMode] = useState('light');
  const [toggleThemeText, setToggleThemeText] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);
  return (
    <>
      <Router>
        <Navbar title='textUtils' aboutText='About Us' mode={mode} toggleMode={toggleNavbarTheme} toggleThemeLabel={toggleThemeText} />
        <Alert alert={alert}></Alert>
        <div className='container my-3'>
          <Routes>
          <Route exact path="/" element={<Textarea showAlert={showAlert} heading='Try TextUtils - Word counter, character counter, removes extra spaces.' mode={mode}></Textarea>} />
          <Route path="/about" element={<About mode={mode}/>} />
           {/*  <Route path="/">
              <Textarea showAlert={showAlert} heading='Enter text to analyze' mode={mode}></Textarea>
            </Route>
            <Route path="/about">
              <About />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
