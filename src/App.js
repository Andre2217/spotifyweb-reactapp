import './App.css';
import Home from './components/home/Home';
import FAQ from './components/FAQ/FAQ';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <FAQ />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
