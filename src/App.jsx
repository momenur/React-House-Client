
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar';

export default function App() {

  return <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>;
}
