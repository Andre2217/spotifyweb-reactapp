// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
 

// const Login = ({ history }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aqui você pode adicionar lógica para autenticação com backend ou salvar dados no estado do aplicativo.
//   };

//   const handleSignUpClick = () => {
//     history.push("/cadastro");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Usuário:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <br />
//       <label>
//         Senha:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br />
//       <br />
//       <button type="submit">Entrar</button>
//       <br />
//       <br />
//       <span>
//         <Link to="/cadastro">Não tem conta? Cadastre-se!</Link>
//       </span>
//     </form>
//   );
// };

// export default Login;

import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function Login() {
  return (
    <Container className="mt-3">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='email-label'>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Insira seu e-mail cadastrado" required/>
          <Form.Text className="text-muted">
            Nós nunca compartilharemos seus dados com ninguém.
          </Form.Text>
        </Form.Group>
        <br/><br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Insira sua senha" required/>
        </Form.Group>
        <br/><br/>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
        <br/>
        <br/>
        <Link to="/cadastro" className="ml-3">
          Não tem conta? Cadastre-se!
        </Link>
      </Form>
    </Container>
  );
}

export default Login;
