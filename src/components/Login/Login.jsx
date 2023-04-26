import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Login() {

  const [email, setEmail] = useState('');

  useEffect(() =>{
    const user = axios.get(`http://localhost:3001/usuarios?email=${email}`)
    
  }, [])

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='email-label'>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Insira seu e-mail cadastrado" value={email}
                    onChange={(e) => setEmail(e.target.value)} required/>
          <Form.Text className="text-muted">
            Nós nunca compartilharemos seus dados com ninguém.
          </Form.Text>
        </Form.Group>
        <br/><br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className='password-label'>Senha</Form.Label>
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
