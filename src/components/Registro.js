import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Registro.css";
const Registro = () => {
  return (
    <div className="Registro">
      <p>"REGISTRO"</p>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputnom">Nombre</label>
            <input
              type="nombre"
              className="form-control"
              id="inputnombre"
              placeholder="Ingresa nombre"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputape">Apellido</label>
            <input
              type="apellido"
              className="form-control"
              id="inputapellido"
              placeholder="Ingresa apellido"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Correo</label>
            <input
              type="correo"
              className="form-control"
              id="inputcorreo"
              placeholder="Ingresa correo"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputdoc">Documento Identidad</label>
            <input
              type="documento"
              className="form-control"
              id="inputdocumento"
              placeholder="Ingresa documento de identidad"
            />
          </div>
        </div>

        <div className="form-group">
          <label for="inputcon">Contraseña</label>
          <input
            type="contrasena"
            className="form-control"
            id="inputcontrasena"
            placeholder="Ingresa contraseña"
          />
        </div>
      </form>
      <div>
        <p Header="margin: 4px" />
        <button type="button" className="btn2 btn-secondary btn-lg">
          REGRESAR
        </button>
        <p Header="margin: 4px" />
        <button type="button" className="btn2 btn-secondary btn-lg">
          REGISTRARSE
        </button>
      </div>
    </div>
  );
};

export default Registro;
