
import Navbar from './components/Navbar';
import Hero from './commons/Hero';
import Perfil from './commons/Perfil';
import Card from './commons/Card';
import Astro from './commons/Astro';
import Form from './components/Form';
import Footer from "./commons/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Perfil />
      <Card />
      <Astro />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
