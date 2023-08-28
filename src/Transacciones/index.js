import React from "react";
import PropTypes from "prop-types";

import Transaccion from "./Transaccion";

const Transacciones = ({ transacciones }) => {
  return (
    <div data-testid="transacciones">
      {transacciones &&
        transacciones.map(({ id, transaccion, valor, data }) => (
          <Transaccion
            key={`${id}-${transaccion}`}
            tipo={transaccion}
            valor={valor}
            data={data}
          />
        ))}
    </div>
  );
};

Transacciones.defaultProp = {
  transacciones: [
    {
      tipo: "",
      valor: "",
      data: "",
    },
  ],
};

Transacciones.propTypes = {
  transacciones: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.string,
      valor: PropTypes.string,
      data: PropTypes.string,
    })
  ),
};

export default Transacciones;
