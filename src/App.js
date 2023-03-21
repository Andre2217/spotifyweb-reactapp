import './App.css';
import Carrosel from './components/Carrosel';
import Home from './components/Home';
import Cards from './components/Cards';
import Perguntas from './components/FAQ/Perguntas';
import Respostas from './components/FAQ/Respostas';
import Script from './components/FAQ/Script';

function App() {


  return (
    <div className="App">

      <Home></Home>
      <Cards/>
      <Carrosel/>
      <Perguntas/>
      <Respostas/>
      <Script/>

    </div>
  );
}

export default App;
