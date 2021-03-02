import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarContextProvider from "./components/contexts/CarContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
export default function App() {
  return (
    <CarContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Footer/>
          <Home />
          <Route exact path="/" />
          <Route exact path="/About-us" />
        </Router>
      </div>
    </CarContextProvider>
  );
}
