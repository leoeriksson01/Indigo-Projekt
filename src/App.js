import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutPage from './components/CheckoutPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarContextProvider from "./components/contexts/CarContext";
import Home from "./pages/Home";
import Car from "./pages/Car";
import ShopCartContextProvider from "./components/contexts/ShopCartContext";
import CheckoutConfirmation from "./components/CheckoutConfirmation";
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
              <Route exact path="/car/:vin">
                <Car />
              </Route>
              <Route exact path="/checkout">
                <CheckoutPage />
              </Route>
              <Route exact path="/confirmation">
                <CheckoutConfirmation />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </ShopCartContextProvider>
    </CarContextProvider>
  );
}
