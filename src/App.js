import logo from './logo.svg';
import './App.css';
import { useMeProtocol } from 'me-protocol';

function App() {
 const {meRegister} = useMeProtocol();
  const register = async() => {
   await meRegister({brandName: "paul", onlinePresence: "paul@myai.life"});
  }
  return (
    <div className="App">
    
      <button onClick={()=> register()}> Register Brand </button>
    </div>
  );
}

export default App;
