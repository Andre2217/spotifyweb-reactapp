import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';

function PlaylistPage() {
  let { id } = useParams();
  let playlist = data.find(p => p.id == id);

  const [currentTrack, setCurrentTrack] = useState(null);

  const start = (track) => {
    if (currentTrack) {
      currentTrack.pause();
    }
    const audio = new Audio(track);
    setCurrentTrack(audio);
    audio.play();
  };

  const stop = () => {
    if (currentTrack) {
      currentTrack.pause();
      setCurrentTrack(null);
    }
  };

  return (
        <div style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${playlist.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // cor de fundo transparente
        height: 'center',
        width: '40%',
        margin: '0 auto',
        padding: '25px',
        borderRadius: '10px'
      }}>
        
        <h1>{playlist.nome}</h1>
        <ul>
        {playlist.musica.map(musica => (
          <li key={musica.id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>{musica.nome}</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => start(musica.track)} style={{ 
                  backgroundImage: 'url(../images/PLAY.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  padding: '20px',
                  marginRight: '20px'
                }}>
                </button>
  
                <button onClick={stop} style={{ 
                  backgroundImage: 'url(../images/pause.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  padding: '20px'
                }}>
                </button>
              </div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
  
  
}

export default PlaylistPage;
