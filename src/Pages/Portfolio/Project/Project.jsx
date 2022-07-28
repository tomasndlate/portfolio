import "./Project.css";

const Project = (props) => {
  // Lista de tecnologias
  let techs = [];
  for (let i = 0; i < props.tech.length; i++) {
    techs.push(<h5>{props.tech[i]}</h5>);
  }

  return (
    <div className="mainProjectPortfolio">
      <div className="blockPhotoProject">
        <div className="barPhotoProject">
          <div className="circleBarProject circle-red"></div>
          <div className="circleBarProject circle-yellow"></div>
          <div className="circleBarProject circle-green"></div>
        </div>
        <div className="photoProject"></div>
      </div>
      <div className="detailsBlockProject">
        <div className="dadosProject">
          <div className="sectionDadosProject">
            <h4>Year</h4>
            <h5>{props.ano}</h5>
          </div>
          <div className="sectionDadosProject">
            <h4>Task</h4>
            <h5>{props.tarefa}</h5>
          </div>
          <div className="sectionDadosProject">
            <h4>Explore</h4>
            <h5>see project</h5>
          </div>
        </div>
        <div className="nameProject">
          <div className="nameProjectPopUp">
            <h2>Chess web game</h2>
            <p>{props.descricao}</p>
          </div>
        </div>
        <div className="techProject">
          <h4>My role technologies</h4>
          <div className="displayerTechProject">{techs}</div>
        </div>
      </div>
    </div>
  );
};

export { Project };
