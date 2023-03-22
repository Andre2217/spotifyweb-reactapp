import './App.css';
import Home from './components/home/Home';
import FAQPage from './components/FAQ/FAQPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={FAQPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
