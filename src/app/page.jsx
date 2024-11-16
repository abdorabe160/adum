import About from "./3-About/page";
import Hero from "./2-Hero/page";
import How from "./5-Hwo/page";
import Nave from "./1-Nave/page";
import Why from "./4-Why/page";
import Redy from "./6-Redy/page";
import Contact from "./7-Contact/page";
import Up from "./Up/page";
import Footer from "./8-Footer/page";



export default function Home() {
  return (
    <>
    <div className="w-3/4 mx-auto ">
     <Nave />
     <Up />
     <Hero />
     <About />
     <Why />
     <How />
     <Redy />
     <Contact />
    </div>
     <Footer />
    </>
  );
}
