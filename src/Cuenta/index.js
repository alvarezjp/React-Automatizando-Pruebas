import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Cuenta = ({ saldo, realizarTransaccion }) => {
  const [valores, setValores] = useState({ transaccion: "", valor: 0 });

  function handleChange(e) {
    const { name, value } = e.target;
    const nuevosValores = { ...valores, [name]: value };

    setValores(nuevosValores);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const datatransaccion = new Date().toLocaleDateString("es-mx");

    realizarTransaccion({ ...valores, data: datatransaccion });
  }

  return (
    <div className="Header">
      <h2>Cuenta</h2>
      <p>
        Saldo:
        <strong data-testid="saldo-cuenta">{` $${saldo}`}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Deposito
            <input
              type="radio"
              name="transaccion"
              value="deposito"
              onChange={handleChange}
              data-testid="transaccion"
              checked={valores.transaccion === "deposito"}
            />
          </label>
        </div>

        <div>
          <label>
            Retiro
            <input
              type="radio"
              name="transaccion"
              value="retiro"
              data-testid="transaccion"
              onChange={handleChange}
              checked={valores.transaccion === "retiro"}
            />
          </label>
        </div>

        <label>Valor:</label>
        <input
          type="text"
          name="valor"
          value={valores.valor}
          data-testid="valor"
          onChange={handleChange}
          className="input"
        ></input>

        <div>
          <button type="submit" className="btn">
            Realizar operación
          </button>
        </div>
      </form>
    </div>
  );
};

Cuenta.defaultProps = {
  saldo: 0,
};

Cuenta.propTypes = {
  saldo: PropTypes.number,
};

export default Cuenta;
