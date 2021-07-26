import logo from './logo.svg';
import './App.css';

import {Minimalistic} from './Components/Minimalistic'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome
        </h1>

        <h2>
          Jimmy Young
        </h2>

        <div className = "Navigation">
        <span>Minimal</span>
        <span>Journal</span>
        </div>
      </header>
      <Minimalistic/>
    </div>
  );
}

export default App;
