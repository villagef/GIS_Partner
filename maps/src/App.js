import {useState, useEffect} from 'react';
import "./App.css";
import axios from "axios";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Account from './pages/Account';
import Registration from './pages/Registration';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://capap.gugik.gov.pl/api/fts/hier/_cfg")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <BrowserRouter>
      <NavigationBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/account' component={Account}></Route>
            <Route exact path='/registration' component={Registration}></Route>
          </Switch>
        </Router>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
