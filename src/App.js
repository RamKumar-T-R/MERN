import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import { Route, Routes, Link } from 'react-router-dom';
import ConnectToDB from './components/connectDB';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ConnectToDB />
    </div>
  );
}

export default App;
