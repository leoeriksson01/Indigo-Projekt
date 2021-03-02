import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarContextProvider from "./components/contexts/CarContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Car from "./pages/Car";
import AboutPage from "./pages/AboutPage";
export default function App() {
  return (
    <CarContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/car/:vin">
              <Car />
            </Route>
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    </CarContextProvider>
  );
}
