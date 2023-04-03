import { useParams } from 'react-router-dom';
import data from '../../data/data';

function PlaylistPage() {
    let { id } = useParams();
    let playlist = data.find(p => p.id == id);
    const start = (track) => {
        const audio = new Audio(track);
        audio.play();
      };

    return (
        <div>
            <h1>{playlist.nome}</h1>
            <p>{playlist.id}</p>
            <ul>
                {playlist.musica.map(musica => (//Só vai funcionar se tiver apenas um track, se tiver mais que um aí eu acho que buga.
                    <><li>{musica.id}{musica.cantor} </li><img src={playlist.capa} alt="alt" onClick={() => start(musica.track)} /></>
                ))}
            </ul>
        </div>
    );
}

export default PlaylistPage;
