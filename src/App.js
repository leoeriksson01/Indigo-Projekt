import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarContextProvider from "./components/contexts/CarContext";
import Footer from "./components/Footer";
import ShopCartContextProvider from "./components/contexts/ShopCartContext"
import Home from "./pages/Home";
import Car from "./pages/Car";
import AboutPage from "./pages/AboutPage";
export default function App() {
  return (
    <CarContextProvider>
      <ShopCartContextProvider>
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
            {/* <Footer /> */}
          </Router>
        </div>
      </ShopCartContextProvider>
    </CarContextProvider>
  );
}
