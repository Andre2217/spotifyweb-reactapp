import Carrosel from "./Carrosel";
import Footer from "./Footer";
import Navbar from "./Navbar";  
import Cards from "./Cards";
import Header from "./Header";
import FAQ from "../FAQ/FAQ"

function Home() {
    return (
      <>
        <div className="home-container">
          <Header />
          <Navbar />
          <div className="home-content">
            <Carrosel />
            <Cards />
          </div>
          <div className="home-faq">
            <FAQ />
          </div>
          <div className="home-footer">
            <Footer />
          </div>

        </div>
      </>
    );
  }

export default Home;