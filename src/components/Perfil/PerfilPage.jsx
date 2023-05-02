import React, { useState } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Perfil from '../Perfil/Perfil';
import Navbar from '../home/Navbar';
import EditarPerfil from '../Perfil/EditarPerfil';
import { Link } from 'react-router-dom';

function PerfilPage() {
    const [editarPerfil, setEditarPerfil] = useState(false);
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
        return (
            <div>
                <div className="cadastro-header">
                    <Header />
                    <Navbar />
                </div>
                <Link to="/login">
                    <h1>Faça o login</h1>
                </Link>
                 <div className="cadastro-footer">
                    <Footer/>
                </div>
            </div>
        )

    }

    function toggleEditarPerfil() {
        setEditarPerfil(!editarPerfil);
    }

    return (
        <>
            <div className='cadastro-container'>
                <div className="cadastro-header">
                    <Header />
                    <Navbar />
                </div>
                <div className='cadastro-content'>
                    {editarPerfil ? (
                        <EditarPerfil usuario={usuario} toggleEditarPerfil={toggleEditarPerfil} />
                    ) : (
                        <>
                            <Perfil usuario={usuario} toggleEditarPerfil={toggleEditarPerfil} />
                        </>
                    )}
                </div>
                {/* <div className="cadastro-footer">
                    <Footer/>
                </div> */}
            </div>
        </>
    );
}

export default PerfilPage;