import "./Portfolio.css";

import { Project } from "./Project/Project";

import { PortfolioJson } from "../../Information/index";

function uploadPortfolioProjects() {
  let result = [];

  var keyBloco = 0;
  for (keyBloco in PortfolioJson.portfolio) {
    let data = PortfolioJson.portfolio[keyBloco];
    result.push(
      <Project
        link={data.link}
        nome={data.nome}
        descricao={data.descricao}
        ano={data.ano}
        tech={data.tecnologias}
        tarefa={data.tarefa}
        imagem={data.imagem}
      />
    );
  }

  return result;
}

const Portfolio = () => {
  return (
    <div className="mainPortfolio">
      <h2 className="titleBlockPorfolio">Projects</h2>
      {uploadPortfolioProjects()}
    </div>
  );
};

export { Portfolio };
