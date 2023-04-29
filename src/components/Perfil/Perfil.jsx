import axios from 'axios';
import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Perfil({ toggleEditarPerfil }) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const id = usuario.id;

    const [showInputs, setShowInputs] = useState(false);
    const [nomePlaylist, setNomePlaylist] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        setShowInputs(!showInputs);
    };

    function cadastrarPlaylists() {
        const novaPlaylist = { nome: nomePlaylist };
        usuario.playlists.push(novaPlaylist);
        axios.put(`http://localhost:3001/usuarios/${id}`, usuario);
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      }

    function logout() {
        localStorage.removeItem("usuarioLogado");
        navigate('/login');
    }

    return (
        <Card style={{ width: '20rem', margin: '0 auto', marginBottom: '20px', marginTop: '20px' }} className="mx-auto">
            <Card.Header  className="text-center">Seu Perfil</Card.Header>
            <Card.Body  className="text-center">
                <Card.Text className="user-name">
                    {usuario.nome}
                </Card.Text>
                <Card.Text>
                    {usuario.email}
                </Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <Button 
                variant="primary" 
                onClick={handleClick} 
                className="mx-2 cria-playlist-btn">
                    Criar Playlist
                    </Button>

                <Button 
                variant="primary" 
                onClick={toggleEditarPerfil} 
                className="mx-2 editar-perfil-btn">
                    Editar Perfil
                    </Button>
                
                <Button 
                variant="danger" 
                onClick={logout} 
                className="mx-2 logout-btn">
                    Logout
                    </Button>

                </div>
                {showInputs && (
                    <div>
                        <label>Nome da playlist</label>
                        <input 
                        type="text" 
                        value={nomePlaylist} 
                        onChange={(e) => setNomePlaylist(e.target.value)} 
                        />
                        <br />
                        <label>Busque sua musica</label>
                        <input type="text" />
                        <Button variant="success" onClick={cadastrarPlaylists}>Cadastrar Playlist</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default Perfil;