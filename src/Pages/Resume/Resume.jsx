import "./Resume.css";

import { ResumeJson } from "../../Information/index";

import { IconCard } from "../../Components/index";

import {
  iconPython,
  iconCSS,
  iconReact,
  iconJS,
  iconPhotoshop,
} from "../../Images/index";

function uploadResumeHistory() {
  let result = [];

  var keyBloco = 0;
  for (keyBloco in ResumeJson.resume) {
    let data = ResumeJson.resume[keyBloco];
    let subBlocos = [];
    let keyExp = 0;
    for (keyExp in data.experiencia) {
      let logos = [];
      let keyLogo = 0;

      for (keyLogo in data.experiencia[keyExp].logotipos) {
        logos.push(
          <a href="">
            <img
              src={
                "./Images/Logotipos/" +
                data.experiencia[keyExp].logotipos[keyLogo]
              }
              alt=""
            />
          </a>
        );
      }
      subBlocos.push(
        <div className="subBlockOfResume">
          <div className="circleSubBlock"></div>
          <div>
            <h3 className="nomeOfSubBlockResume">
              {data.experiencia[keyExp].nome}
            </h3>
            <h3 className="anoOfSubBlockResume">
              {data.experiencia[keyExp].ano}
            </h3>
            <h5 className="descricaoOfSubBlockResume">
              {data.experiencia[keyExp].descricao}
            </h5>
          </div>
          <div className="logosOfResume">{logos}</div>
        </div>
      );
    }
    result.push(
      <div className="blockOfResume">
        <h2 className="titleBlockResume">{data.titulo}</h2>
        <div className="displayerSubBlocks">{subBlocos}</div>
      </div>
    );
  }
  return result;
}

const Resume = () => {
  return (
    <div className="mainResume">
      {uploadResumeHistory()}
      <div className="blockOfResume">
        <h2 className="titleBlockResume">General skills</h2>
        <div className="displayerIconsResume">
          <IconCard link="" icon={iconCSS} name="CSS" />
          <IconCard link="" icon={iconReact} name="React" />
          <IconCard link="" icon={iconPython} name="Python" />
          <IconCard link="" icon={iconJS} name="Javascript" />
          <IconCard link="" icon={iconPhotoshop} name="Photoshop" />
        </div>
      </div>
    </div>
  );
};

export { Resume };
