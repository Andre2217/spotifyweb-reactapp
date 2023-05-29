import React, { useState, useEffect } from 'react';
import Header from '../home/Header';
import Navbar from '../home/Navbar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../home/Footer';
import axios from 'axios';


function EditarPlaylist() {

    let { id } = useParams();
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const [playlist, setPlaylist] = useState({musicas:[]})

  useEffect(() =>{
    axios.get(`http://localhost:3001/playlistsPrivadas/${id}`)
      .then((res)=>setPlaylist(res.data))
  }, [])

  





    if (!usuario) {
        return (
            <div className="not-perfil-container">
                <div className="not-perfil-header">
                    <Header />
                    <Navbar />
                </div>
                <div className='not-perfil-content'>
                    <h2 className="not-perfil">Para acessar as funções de Perfil é necessário estar logado.</h2>
                    <Link to="/login">
                        <h3 className='not-perfil'>Faça o login</h3>
                    </Link>
                </div>
                <div className="login-footer">
                    <Footer />
                </div>
            </div>
        )

    }

    return (
        <>
            <div className='cadastro-container'>
                <div className="cadastro-header">
                    <Header />
                    <Navbar />
                </div>
                <div className='cadastro-content'>
                    <p>{playlist.nome}</p>
                </div>
                {/* <div className="cadastro-footer">
                        <Footer/>
                    </div> */}
            </div>
        </>
    );


}


export default EditarPlaylist;