import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Inicio.css";

const Inicio = (props) => {
  const { history } = props;
  return (
    <div className="Inicio">
      <img className="Logo" src="./img/Logo2.png" alt="Logo" />
      <p>"Los árboles son el trono exterior de la magneficencia divina"</p>
      <button
        type="submit"
        class="btn btn-secondary btn-lg"
        onClick={() => history.push("/Iniciosesion")} >
        INICIAR SESIÓN
      </button>
    </div>
  );
};

export default Inicio;
