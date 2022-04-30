import React from "react";
import "../hojas-de-estilo/BotonClear.css";

const BotonClear = (props) => {
  return (
    <div className="boton-clear" onClick={props.manejarClic}>
      {props.children}
      {/* Clear ... otra forma de utilizarlo con valor estatico */}
    </div>
  );
};

export default BotonClear;
