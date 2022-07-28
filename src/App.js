import './App.css';

import "./CSS/index";
import { Navbar } from "./Layout/index";
import {Hello, Resume, Portfolio, Contact} from "./Pages/index"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hello />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
