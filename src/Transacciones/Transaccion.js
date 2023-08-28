import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Transaccion({ data, tipo, valor }) {
  return (
    <div className="container">
      <p>{data}</p>
      <p>{tipo.toUpperCase()}</p>
      <p>$ {valor}</p>
    </div>
  );
}

Transaccion.defaultProps = {
  tipo: "",
  valor: "0",
  data: "",
};

Transaccion.propTypes = {
  tipo: PropTypes.string,
  valor: PropTypes.string,
  data: PropTypes.string,
};

export default Transaccion;
