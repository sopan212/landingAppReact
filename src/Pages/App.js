import './App.css'
import Navbar from '../Components/NavbarComponents/NavbarComponent'
import HeroComponent from '../Components/HeroComponents/HeroImage'
import Description from '../Components/BodyComponents'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <Description/>
    </div>
  );
}

export default App;
