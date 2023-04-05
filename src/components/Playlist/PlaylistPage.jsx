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
    <div>
      <h1>{playlist.nome}</h1>
      <img src={playlist.capa} alt="alt" />
      <ul>
        {playlist.musica.map(musica => (
          <li key={musica.id}>{musica.cantor}</li>
        ))}
      </ul>
      {playlist.musica.map(musica => (
        <div key={musica.id}>
          <button onClick={() => start(musica.track)}>Play</button>
          <button onClick={stop}>Stop</button>
        </div>
      ))}
    </div>
  );
}

export default PlaylistPage;
