import './App.css';
import Imageslider from './components/Imageslider';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <Imageslider slides={SliderData} />
  );
}

export default App;
