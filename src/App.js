import './App.css';

import "./CSS/index";
import { Navbar } from "./Layout/index";
import {Hello} from "./Pages/index"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hello />
    </div>
  );
}

export default App;
