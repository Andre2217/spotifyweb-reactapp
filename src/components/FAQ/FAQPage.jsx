import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
//import Header from "../home/Header";
import FAQ from "./FAQ";


function FAQPage(){
    return (
        <>
        <div>
        <Navbar/>
        </div>
        
        <div>
        <FAQ/>
        </div>
        
        <div>
        <Footer/>
        </div>
        </>
    );
    
}

export default FAQPage;