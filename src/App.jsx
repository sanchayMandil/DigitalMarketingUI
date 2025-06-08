import Nav from './components/Header/Nav.jsx';
import NameHook from './components/Header/NameHook.jsx';
import cover from './assets/cover.png';
import ImageContainer from './components/cover/ImageContainer.jsx';
import About from './components/mid/About.jsx';
import Products from './components/mid/Products.jsx';
import People from './components/mid/People.jsx';
import Arch from './components/mid/Arch.jsx';
import Meadia from './components/mid/Media.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>  
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-13 mask-b-from-20% mask-b-to-60%  z-0" 
      style={{ backgroundImage: `url(${cover})` }}>
        {/* Overlay for opacity effect */}
        <div className="absolute inset-0 bg-white/15 pointer-events-none" />
      </div>
      {/* Content above background */}
      <div className="relative z-10">
        <Nav />
        <NameHook />
        <ImageContainer />
        <About/>
        <Products />
        <People/>
        <Arch />
        <Meadia/>
        <Footer />
      </div>
    </>
  );
}

export default App;
