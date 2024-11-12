import './App.css';
import HomePage from './pages/HomePage'
import Prezentare from './pages/Prezentare'
import Postere from './pages/Postere'
import CursCyber from './pages/CursCyber'
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element = { <HomePage/> } />
      <Route path="/prezentare" element = { <Prezentare/> } />
      <Route path="/cursCyber" element = { <CursCyber/> } />
      <Route path="/postere" element = { <Postere/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
