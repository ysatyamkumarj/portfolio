import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Work />
        </div>
    );
};

export default App;