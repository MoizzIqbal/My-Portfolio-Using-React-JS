import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
   <>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/aboutus"  element={<About />}/>
        <Route path="/services"  element={<Services />}/>
        <Route path="/contactus"  element={<Contact />}/>
      </Routes>
        <Footer />
      </Router>
   </>
  );
}

export default App;
