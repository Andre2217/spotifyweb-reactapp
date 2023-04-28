import axios from 'axios';

function Perfil({ toggleEditarPerfil }) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const id = usuario.id;

    function cadastrarPlaylists() {
        axios.put(`http://localhost:3001/usuarios/${id}`, {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            playlits: [{
                nome: "x",
                musicas: "y"
            }]
        })
    }

    return (
        <div>
            <h1>{usuario.nome}</h1>
            <h2>{usuario.email}</h2>
            <button className="cadastra-playlist" onClick={cadastrarPlaylists}>Cadastrar Playlists</button>
            <br></br>
            <button className="editar-perfil" onClick={toggleEditarPerfil}>Editar Perfil</button>
        </div>
    );
}

export default Perfil;
