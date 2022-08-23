import "./Navbar.css";

import { iconPortfolio } from "../../Images/index";

const Navbar = (props) => {
  function scrollTo(referencia) {
    referencia.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="mainNavbar">
      <div className="blocoLogo">
        <img src={iconPortfolio} alt="Logotipo portfolio - Tomás Ndlate" />
      </div>
      <div className="blocoButtons">
        <h4
          onClick={() => {
            scrollTo(props.refs.refHello.current);
          }}
        >
          Hello
        </h4>
        <h4
          onClick={() => {
            scrollTo(props.refs.refResume.current);
          }}
        >
          Resume
        </h4>
        {/* <h4
          onClick={() => {
            scrollTo(props.refs.refPortfolio.current);
          }}
        >
          Portfolio
        </h4> */}
        <h4
          onClick={() => {
            scrollTo(props.refs.refContact.current);
          }}
        >
          Contact
        </h4>
      </div>
    </header>
  );
};

export { Navbar };
