import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditarPerfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [estilos, setEstilos] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const id = usuario.id;

//   useEffect(() => {
//     axios.get(`http://localhost:3001/usuarios/${id}`)
//       .then((response) => {
//         const { 
//             nome, 
//             email, 
//             senha, 
//             estilos } = response.data;
//         setNome(nome);
//         setEmail(email);
//         setSenha(senha);
//         setEstilos(estilos);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios.put(`http://localhost:3001/usuarios/${id}`, {
      nome:nome,
      email:email,
      senha:senha,
      estilos:estilos,
    })
      .then(() => {
        setMensagem('Perfil atualizado com sucesso!');
        setTimeout(() => {
          navigate('/perfil');
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setMensagem('Erro ao atualizar perfil');
      });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Editar Perfil</h1>

            <div className="form-group mb-3">
              <label htmlFor="nome">Altere seu Nome de Usuário</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu novo user"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Altere seu E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu novo e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="senha">Altere sua Senha</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="estilos">Altere seus Estilos musicais favoritos</label>
              <select
                className="form-control"
                id="estilos"
                multiple
                value={estilos}
                onChange={(e) => setEstilos(Array.from(e.target.selectedOptions, (option) => option.value))}
                required
                >
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="hiphop">Hip Hop</option>
                <option value="classical">Clássica</option>
                </select>
                </div>

                <button type="submit" className="btn btn-primary btn-save">Salvar Mudanças</button>

                </form>

        </div>
        </div>
  </div>
);}

export default EditarPerfil;