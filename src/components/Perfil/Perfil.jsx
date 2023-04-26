import axios from 'axios';


function Perfil() {

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
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
            <button onClick={cadastrarPlaylists}>Cadastrar PLaylists</button>
        </div>
    );


}

export default Perfil;
