import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import RunningText from './RunningText/RunningText';
import Login from './Page/Login/Login';

function App() {
  return (
    <div className="">
      <RunningText></RunningText>
      <Header></Header>
      
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
