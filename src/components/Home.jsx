import Carrosel from "./Carrosel";
import Footer from "./Footer";
import Navbar from "./Navbar";  
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>       
         <Navbar></Navbar>
         <Carrosel></Carrosel>
         <Footer></Footer>
         <Cards></Cards>
        </>
    )
}

export default Home;