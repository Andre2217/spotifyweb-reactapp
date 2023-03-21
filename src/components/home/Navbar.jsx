import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top ">
      <div class="container">
        <a class="navbar-brand" href="./index.html">
          {/* <img src="./imgs/logo1.png" alt="..." height="70"> */}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/faq" class="nav-link">FAQ</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Cadastro.html">Cadastro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./login.html">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
