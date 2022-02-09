import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import CardCaller from './components/CardCaller';
import Indian from './components/Indian';
import Italian from './components/Italian';
import Shake from './components/Shake';
import Icecream from './components/Icecream';
import Sweet from './components/Sweet';
import Chinese from './components/Chinese';
import About from './components/About';

function App() {
  const [time, settime] = useState('veg')
  const timeChange = (time1) => {
    settime(time1)
  }

  return (
      
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home timeChange={timeChange}/>}/>
        <Route path='/food' element={<CardCaller time={time}/>}/>
        <Route path='/indian' element={<Indian/>}/>
        <Route path='/chinese' element={<Chinese/>}/>
        <Route path='/italian' element={<Italian/>}/>
        <Route path='/shake' element={<Shake/>}/>
        <Route path='/icecream' element={<Icecream/>}/>
        <Route path='/sweet' element={<Sweet/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
