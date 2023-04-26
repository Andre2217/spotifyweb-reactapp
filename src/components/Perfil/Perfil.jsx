
function Perfil() {

const usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
  return (
    <div>
      <h1>{usuario.nome}</h1>
      <h2>{usuario.email}</h2>
      <button></button>
    </div>
  );


}

export default Perfil;
