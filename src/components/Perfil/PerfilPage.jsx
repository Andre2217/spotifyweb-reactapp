import React, { useState } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Perfil from '../Perfil/Perfil';
import Navbar from '../home/Navbar';
import EditarPerfil from '../Perfil/EditarPerfil';

function PerfilPage() {
    const [editarPerfil, setEditarPerfil] = useState(false);
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    

    function toggleEditarPerfil() {
        setEditarPerfil(!editarPerfil);
    }

    return (
        <>
        <div className='cadastro-container'>
            <div className="cadastro-header">
                <Header/>
                <Navbar/>
            </div>
            <div className='cadastro-content'>
                {editarPerfil ? (
                    <EditarPerfil usuario={usuario} toggleEditarPerfil={toggleEditarPerfil} />
                ) : (
                    <Perfil toggleEditarPerfil={toggleEditarPerfil} />
                )}
            </div>

            <div className="cadastro-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default PerfilPage;
