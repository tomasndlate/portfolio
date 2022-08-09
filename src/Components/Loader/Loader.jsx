import "./Loader.css";
import { loaderLogo } from "../../Images/index";

const Loader = () => {
  return (
    <div className="main-logo-loader">
      <div className="logo-loader">
        <div className="logo-stick top"></div>
        <div className="logo-stick right"></div>
        <div className="logo-stick bottom"></div>
        <div className="logo-stick left"></div>
        <img src={loaderLogo} alt="Letras do logotipo do portfolio" />
      </div>
    </div>
  );
};

export { Loader };
