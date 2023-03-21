import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';


const images = [image1, image2, image3, image4, image5, image6];

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

            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src ={image} alt="texto alt"/>
              </motion.div>
              ))}

          </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrosel;
