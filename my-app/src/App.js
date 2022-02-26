import logo from './logo.svg';
import './App.css';
import data from './data/results_formatted.json'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
        {data["aerospaceengineering_bs"][2]}
        </span>
          
       
      </header>
    </div>
  );
}

export default App;
