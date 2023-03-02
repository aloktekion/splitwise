import { useState } from 'react';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import SignIn from './pages/Navbar/modal/SignIn';
import Welcome from './pages/welcome/Welcome';
import SignUp from './pages/Navbar/modal/SignUp';
import MainContent from './pages/dashboard/dashboard';
import Profile from './pages/profile/Profile';
import Summary from './pages/summary/Summary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar
          setLoginIsOpen={setLoginIsOpen}
          setSignUpIsOpen={setSignUpIsOpen}
        />
        {/* <Welcome /> */}
        <SignIn loginIsOpen={loginIsOpen} setLoginIsOpen={setLoginIsOpen} />
        <SignUp signUpIsOpen={signUpIsOpen} setSignUpIsOpen={setSignUpIsOpen} />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<MainContent />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
