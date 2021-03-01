import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarContextProvider from './components/contexts/CarContext';
export default function App() {
    return (
        <CarContextProvider>
            <div className="App">
     <Router>
        <Navbar />
          <Route exact path="/" />
          <Route exact path="/About-us" />
      </Router>
            </div>
        </CarContextProvider>
    );
}