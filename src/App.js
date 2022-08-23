import './App.css';
import React, {useRef, useEffect, useState} from 'react';

import "./CSS/index";
import { Navbar } from "./Layout/index";
import {ForwaredHello,ForwaredResume, ForwaredPortfolio, ForwaredContact} from "./Pages/index"
import {Loader} from "./Components/index"
import {sleep} from "./Helper/index"

const App = () => {

  const [loaderActive, setLoaderActive] = useState(true)

  const refs = {
    refHello: useRef(null),
    refResume: useRef(null),
    refPortfolio: useRef(null),
    refContact: useRef(null)
  }

  async function loaderEffect(){
    await sleep(2.05 * 1000)
    setLoaderActive(false)
  }

  useEffect(() => {
    loaderEffect()
  },[])

  return (
    <div className="App">
      <Navbar refs={refs}/>
      {loaderActive ? <Loader /> : null}
      <ForwaredHello ref={refs.refHello} />
      <ForwaredResume ref={refs.refResume} />
      {/* <ForwaredPortfolio ref={refs.refPortfolio} /> */}
      <ForwaredContact ref={refs.refContact} />
    </div>
  );
}

export default App;
