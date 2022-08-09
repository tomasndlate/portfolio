import React, { useEffect, useState } from "react";
import "./Hello.css";

import { IconCard } from "../../Components/index";

import {
  iconReact,
  iconCSS,
  iconPython,
  iconGithub,
  iconLinkedIn,
  fotoHello,
} from "../../Images/index";

import { HelloPhoto } from "./HelloPhoto/HelloPhoto";

import { sleep } from "../../Helper/index";

const Hello = (props, ref) => {
  const wordsEffect = [" Software Dev", " Front-end Dev", "n IT Graduated"];
  const [word, setWord] = useState("");

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  async function changeWordEffect() {
    let wordPosition = 0;

    while (true) {
      let wordLength = wordsEffect[wordPosition].length;

      // ADICIONAR CARACTER
      for (let i = 0; i < wordLength; i++) {
        setWord((word) => word + wordsEffect[wordPosition].charAt(i));
        await sleep(1 * 80);
      }

      // TEMPO QUE A PLAVRA FICA VISIVEL
      await sleep(1 * 3000);

      // REMOVER CARACTER
      for (let k = wordLength; k >= 0; k--) {
        await sleep(1 * 80);
        setWord((word) => word.slice(0, -1));
      }

      if (wordPosition === wordsEffect.length - 1) {
        wordPosition = 0;
      } else {
        wordPosition++;
      }
    }
  }

  useEffect(() => {
    changeWordEffect();
  }, []);

  return (
    <div ref={ref} className="mainHello">
      <div className="gridHello">
        <div className="leftHello">
          <h4>I've just graduated in Information Technology</h4>
          <h1>
            Hi, <span className="iamHello">I'm</span>
            <span className="nameHello"> Tomás Ndlate</span>
            <br />a{word}
            <span className="writerUnderlineHello">_</span>
          </h1>
          <h5>
            Bachelor’s in Information Technology {"(IT)"}, in University of
            Lisbon, Science Faculty {"(FCUL)"}, with a minor {"(specifcation)"}{" "}
            on Management, in Lisbon School of Economics {"&"} Management{" "}
            {"(ISEG)"}.
            <br />
            Immense desire to apply my knowledge on a profesional way and
            explore the different areas of IT.
          </h5>
        </div>
        <div className="rightHello">
          <h1 className="backTextHello">
            <span>Tomás</span>
            <br />
            <span>Ndlate</span>
          </h1>
          <HelloPhoto fotoHello={fotoHello} />
        </div>
        <div className="infoBlock">
          <div>
            <h4>Find me</h4>
            <div className="displayerSocial">
              <IconCard icon={iconGithub} name="Github" link="" />
              <IconCard icon={iconLinkedIn} name="LinkedIn" link="" />
            </div>
          </div>
          <div>
            <h4>Best skills</h4>
            <div className="displayerSkills">
              <IconCard icon={iconReact} name="React" link="" />
              <IconCard icon={iconCSS} name="CSS" link="" />
              <IconCard icon={iconPython} name="Python" link="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForwaredHello = React.forwardRef(Hello);

export { ForwaredHello };
