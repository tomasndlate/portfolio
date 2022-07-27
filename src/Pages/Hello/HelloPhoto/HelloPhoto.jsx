import "./HelloPhoto.css";

const HelloPhoto = (props) => {
  return (
    <div className="blockFotoHello">
      <div className="circleFotoHello">
        <span className="circle-one"></span>
        <span className="circle-two"></span>
        <span className="circle-three"></span>
        <span className="circle-four"></span>
      </div>
      <img src={props.fotoHello} alt="" />
      <div className="blockToHideHello"></div>
      <div className="circleHideHello">
        <img src={props.fotoHello} alt="" />
      </div>
    </div>
  );
};

export { HelloPhoto };
