import "./Navbar.css";

import { iconPortfolio } from "../../Images/index";

const Navbar = () => {
  return (
    <header className="mainNavbar">
      <div className="blocoLogo">
        <img src={iconPortfolio} alt="Logotipo portfolio - Tomás Ndlate" />
      </div>
      <div className="blocoButtons">
        <h4>Hello</h4>
        <h4>Resume</h4>
        <h4>Portfolio</h4>
        <h4>Contact</h4>
      </div>
    </header>
  );
};

export { Navbar };
