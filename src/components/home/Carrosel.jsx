import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../../data/data';



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
            {data.map(image => (
              <motion.div className='item' key={image}>
                <Link to={`/playlist/${image.id}`}>
                  <img src ={image.capa} alt="texto alt"/>
                </Link>
              </motion.div>
              ))}
              

          </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrosel;
