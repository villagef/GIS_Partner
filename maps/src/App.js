import {useState, useEffect} from 'react';
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://capap.gugik.gov.pl/api/fts/hier/_cfg")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="App"></div>;
}

export default App;
