// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes ,Route } from "react-router-dom";
// import Home from './Com/Home';
import Notification from './pages/Notification';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Home from './pages/Home';
// import Navbar from './Com/Navbar';
import Block from './pages/Block/Block';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/>} />
      <Route path='/Account' element={ <Account/>} />
      <Route path='/SignUp' element={ <SignUp/>} />
      <Route path='/Home' element={ <Home/>} />
      <Route path='/notification' element={ <Notification/>} />
      <Route path='/Block' element={ <Block/>} />

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
