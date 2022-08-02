import './App.css';
import React, {useRef} from 'react';

import "./CSS/index";
import { Navbar } from "./Layout/index";
import {ForwaredHello,ForwaredResume, ForwaredPortfolio, ForwaredContact} from "./Pages/index"

const App = () => {

  const refs = {
    refHello: useRef(null),
    refResume: useRef(null),
    refPortfolio: useRef(null),
    refContact: useRef(null)
  }

  return (
    <div className="App">
      <Navbar refs={refs}/>
        <ForwaredHello ref={refs.refHello} />
        <ForwaredResume ref={refs.refResume} />
        <ForwaredPortfolio ref={refs.refPortfolio} />
        <ForwaredContact ref={refs.refContact} />
    </div>
  );
}

export default App;
