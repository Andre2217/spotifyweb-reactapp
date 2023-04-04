import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [styles, setStyles] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/login');
  }


    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4">Cadastro</h1>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="username">Nome de usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Digite seu nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="styles">Estilos musicais favoritos</label>
                  <select
                    className="form-control"
                    id="styles"
                    multiple
                    value={styles}
                    onChange={(e) => setStyles(Array.from(e.target.selectedOptions, (option) => option.value))}
                    required
                  >
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="classical">Clássica</option>
                  </select>
                </div>
                <div className="form-group form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acceptTerms"
                    required
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    Eu aceito os termos de compromisso
                  </label>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="newsletter"
                  />
                  <label className="form-check-label" htmlFor="newsletter">
                    Quero receber novidades e newsletters sobre a TocaPlay
                  </label>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
              </form>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      );
    
}

export default Cadastro;
