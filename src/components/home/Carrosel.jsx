import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';


const playlist = [{id:1,nome:"Adele",capa:image1,musica:[]},
                  {id:2,nome:"Queen",capa:image2,musica:[]},
                  {id:3,nome:"Coldplay",capa:image3,musica:[]},
                  {id:4,nome:"Beatles",capa:image4,musica:[]},
                  {id:5,nome:"MichaelJackson",capa:image5,musica:[]},
                  {id:6,nome:"SeuJorge",capa:image6,musica:[]}
                 ];

function novaPagina(id){
    //console.log(id);
    //const album = playlist.findIndex(id);
    //console.log(album);
    return (
      <div>
        <div>
          <img src="image2" alt="sei" />
        </div>
      </div>
    );
}

function Carrosel() {

  const carrosel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() =>{
    //console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  }, [])

  return (
    <div className="carrosel-content">
      <motion.div ref={carrosel} className='carrosel' whileTap={{cursor: "grabbing"}}>
          <motion.div 
          className='inner'
          drag="x"
          dragConstraints={{right:0, left: -width}}
          >
            {playlist.map(image => (
              <motion.div className='item' key={image}>
                <button onClick={novaPagina(image.id)}><img src ={image.capa} alt="texto alt"/></button>
              </motion.div>
              ))}
              

          </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrosel;
