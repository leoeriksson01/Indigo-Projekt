import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarContextProvider from "./components/contexts/CarContext";
import Home from "./pages/Home";
import Car from "./pages/Car";
import ShopCartContextProvider from "./components/contexts/ShopCartContext";
import UserContextProvider from "./components/contexts/UserContext";
import CheckoutConfirmation from "./components/CheckoutConfirmation";
import AboutPage from "./pages/AboutPage";
import NotFound from "./components/http/NotFound";
export default function App() {
	return (
		<UserContextProvider>
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
								<Route exact path="/checkout">
									<CheckoutPage />
								</Route>
								<Route exact path="/confirmation">
									<CheckoutConfirmation />
								</Route>
								<Route>
									<NotFound />
								</Route>
							</Switch>
							<Footer />
						</Router>
					</div>
				</ShopCartContextProvider>
			</CarContextProvider>
		</UserContextProvider>
	);
}
