
import './App.css';
import Inventory from './Components/Inventory';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className='container'>
      <div className='box'>
        <Inventory></Inventory>
        <Pricing></Pricing>
      </div>
    </div>
  );
}

export default App;
