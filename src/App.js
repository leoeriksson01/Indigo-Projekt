import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return <div className="App">
     <Router>
        <Navbar />
          <Route exact path="/" />
          <Route exact path="/About-us" />
      </Router>

  </div>;
}

export default App;
