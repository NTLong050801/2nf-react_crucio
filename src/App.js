import './styles/app.scss';
import PreHeader from './components/Pre_header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Blog  from './components/Blog';
import Contact from './components/Contact';
import Sotical from './components/Sotical';
import { useEffect } from 'react';
import WOW from 'wowjs';
import {
  BrowserRouter,

} from 'react-router-dom'

function App() {
  // new WOW().init();
  useEffect(() => {
    new WOW.WOW().init();
    }, []);
  return (
    <BrowserRouter>
    
      <div className="App">
        <PreHeader />
        <Nav />
        <Home />
        <About />
        <Services />
        <Team />
        <Portfolio />
        <Blog />
        <Contact />
        <Sotical />
      </div></BrowserRouter>
  );
}

export default App;
