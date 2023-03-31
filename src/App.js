import './App.css';
import Home from './components/home/Home';
import FAQPage from './components/FAQ/FAQPage';
import PlaylistPage from './components/Playlist/PlaylistPage';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playlist/:id" element={<PlaylistPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
