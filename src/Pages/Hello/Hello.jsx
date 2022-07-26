import "./Hello.css";
import { IconCard } from "../../Components/index";

import {
  iconReact,
  iconCSS,
  iconPython,
  iconGithub,
  iconLinkedIn,
} from "../../Images/index";

const Hello = () => {
  return (
    <div className="mainHello">
      <div className="gridHello">
        <div className="leftHello">
          <h4>I've just graduated in Information Technology</h4>
          <h1>
            Hi, I'm
            <span> Tomás Ndlate</span>
            <br />a Effect_
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
        <div className="rightHello"></div>
      </div>
    </div>
  );
};

export { Hello };
