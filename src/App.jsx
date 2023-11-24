// Import the BrowserRouter used for routing between pages
import { BrowserRouter } from "react-router-dom";

// import all of our components from  the components folder
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full glass-effect">
          <div className="w-full glass-effect">

            <div className="w-full bg-hero-img">
            <Navbar />

              <Hero />
              {/* <StarsCanvas /> */}
            </div>
            <About />

            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
