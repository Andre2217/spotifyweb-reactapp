import { useParams } from 'react-router-dom';
import data from '../../data/data';

function PlaylistPage() {
    let { id } = useParams();
    let playlist = data.find(p => p.id == id);
    
    return (
        <div>
            <h1>{playlist.nome}</h1>
            <p>{playlist.id}</p>
            <ul>
                {playlist.musica.map(musica => (
                    <li>{musica.id}{musica.cantor}</li>
                ))}
            </ul>
        </div>
    );
}

export default PlaylistPage;
