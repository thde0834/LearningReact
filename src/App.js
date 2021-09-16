import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
        <Greet name="Cartman" heroName="Fat coon" />
        <Welcome name = "Thomas" heroName ="Ochinpo Samurai" />
        {/*<Counter />*/}
    </div>
  );
}

export default App;
