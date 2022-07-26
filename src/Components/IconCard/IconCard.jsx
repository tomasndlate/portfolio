import "./IconCard.css";

const IconCard = (props) => {
  return (
    <div
      className="mainIconCard"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.icon} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
};

export { IconCard };
