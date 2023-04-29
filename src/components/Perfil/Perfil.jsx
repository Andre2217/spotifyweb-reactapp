import axios from 'axios';
import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Perfil({ toggleEditarPerfil }) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const id = usuario.id;

    const [showInputs, setShowInputs] = useState(false);
    const [nomePlaylist, setNomePlaylist] = useState('');
    const [musicasPlaylist, setMusicasPlaylist] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowInputs(!showInputs);
    };

    function cadastrarPlaylists() {
        const novoUsuario = { ...usuario }; 
        console.log('Novo usuário:', novoUsuario);
        novoUsuario.playlists = novoUsuario.playlists || [];
        console.log('Novo usuário:', novoUsuario);
        novoUsuario.playlists.push({ nome: nomePlaylist, musicas: musicasPlaylist });
        console.log('Novo usuário:', novoUsuario);
        axios.put(`http://localhost:3001/usuarios/${id}`, novoUsuario);
      }

    function logout() {
        localStorage.removeItem("usuarioLogado");
        navigate('/login');
    }

        //--------------*****MUSICAS SELECIONADAS*****------------
        async function adicionarMusicas(id) {
            try {
                const response = await axios.get(`http://localhost:3001/musicas/${id}`);
                const musica = response.data;
                if(musicasPlaylist == null){
                    setMusicasPlaylist([musica]);
                }else{
                    setMusicasPlaylist([...musicasPlaylist, musica]);
                }
            } catch (error) {
                console.error(error);
            }
        }
        //------------*****PESQUISA*****------------------------------------------------------
     const [pesquisa, setPesquisa] = useState('');
     const [resultado, setResultado] = useState([]);
 
     const handleChange = (event) => {
         setPesquisa(event.target.value);
     };
 
     const [searchClicked, setSearchClicked] = useState(false);
 
     const handleSubmit = async (event) => {
         event.preventDefault();
         try {
             if (searchClicked) {
                 return;
             }
             setSearchClicked(true);
             const resposta = await axios.get(`http://localhost:3001/musicas`);
             const resultadosFiltrados = resposta.data.filter(item => item.nome.toLowerCase().includes(pesquisa.toLowerCase()));
             setResultado(resultadosFiltrados);
             setSearchClicked(false);
         } catch (error) {
             console.error(error);
             setSearchClicked(false);
         }
     };


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
                    <input type="text" value={nomePlaylist} onChange={(e) => setNomePlaylist(e.target.value)} />
                    <br />
                    {/* Buscar a musica por nome */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="busca nome de uma musica" value={pesquisa} onChange={handleChange} />
                        <button type="submit">Search</button>
                    </form>
                    {resultado.map((result, index) => (
                        <div key={index}>
                            <p>Nome da musica: {result.nome} by {result.cantor}</p>
                            <button onClick={() => adicionarMusicas(result.id)}>Adicionar a playlist</button>
                        </div>
                    ))}
                    <button onClick={() => cadastrarPlaylists()}>Cadastrar Playlist</button>
                </div>
            )}
            </Card.Body>
        </Card>
    );
}

export default Perfil;