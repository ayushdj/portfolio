import './App.css';
import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Timeline from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footers from './components/Footer/footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative z-10">
        <NavBar />
        <main>
          <Intro />
          <Timeline />
          <Projects />
          <Contact />
        </main>
        <Footers />
      </div>
    </div>
  );
}

export default App;
