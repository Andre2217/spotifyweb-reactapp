import './App.css';
import Home from './components/home/Home';
import FAQPage from './components/FAQ/FAQPage';
import PlaylistPage from './components/Playlist/PlaylistPage';
import CadastroPage from './components/Cadastro/CadastroPage';
import LoginPage from './components/Login/LoginPage';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/playlist/:id" element={<PlaylistPage/>} />
        <Route path="/faq" element={<FAQPage/>} />
        <Route path="/cadastro" element={<CadastroPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
