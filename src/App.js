// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Timeline from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footers from './components/Footer/footer'; 

function App() {
  return (
    <div className='bg-[#171717] '>
      <NavBar/>
      <Intro/>
      <Timeline/>
      <Projects/>
      <Contact/>
      <Footers/>
    </div>
  );
}

export default App;
