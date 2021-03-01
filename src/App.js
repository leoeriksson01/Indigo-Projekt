import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutPage from './components/CheckoutPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CarContextProvider from "./components/contexts/CarContext";
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
        <CheckoutPage />
      </div>
    </CarContextProvider>
  );
}
