import './App.css'
import Navbar from '../Components/NavbarComponents/NavbarComponent'
import HeroComponent from '../Components/HeroComponents/HeroImage'
import Description from '../Components/BodyComponents'
import FooterComp from '../Components/FooterComponents'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <Description/>
      <FooterComp/>
    </div>
  );
}

export default App;
