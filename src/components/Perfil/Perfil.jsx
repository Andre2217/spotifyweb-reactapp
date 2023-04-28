import axios from 'axios';
import React, { useState } from "react";

function Perfil({ toggleEditarPerfil }) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const id = usuario.id;

    const [showInputs, setShowInputs] = useState(false);
    const [nomePlaylist, setNomePlaylist] = useState('');

    function cadastrarPlaylists(nomePlaylist) {
        axios.put(`http://localhost:3001/usuarios/${id}`, usuario)

    }


    const handleClick = () => {
        setShowInputs(!showInputs);
    };

    usuario.playlits.push({ nome: nomePlaylist });
    function cadastrarPlaylists() {
        axios.put(`http://localhost:3001/usuarios/${id}`, usuario)
    }

    function logout() {
        localStorage.removeItem("usuarioLogado")
    }
    return (
        <div>
            <h1>{usuario.nome}</h1>
            <h2>{usuario.email}</h2>
            <button onClick={handleClick}>Show Inputs</button>
            <br></br>
            <button onClick={toggleEditarPerfil}>Editar Perfil</button>
            {showInputs && (
                <div>
                    <label>Nome da playlist</label>
                    <input type="text" value={nomePlaylist} onChange={(e) => setNomePlaylist(e.target.value)} />
                    <br />
                    <label>Busque sua musica</label>
                    <input type="text" />
                    <button onClick={() => cadastrarPlaylists(nomePlaylist)}>Cadastrar Playlist</button>
                </div>
            )}
            <button onClick={logout}>logout</button>
        </div>
    );
}

export default Perfil;
