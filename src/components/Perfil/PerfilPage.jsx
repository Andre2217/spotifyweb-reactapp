import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Perfil from '../Perfil/Perfil';
import Navbar from '../home/Navbar';

function Playlist() {
    return (
        <>
        <div className='cadastro-container'>
            <div className="cadastro-header">
                <Header/>
                <Navbar/>
            </div>
            <div className='cadastro-content'>
                <Perfil/>
            </div>

            <div className="cadastro-footer">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default Playlist;