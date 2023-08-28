import React, { useEffect, useState } from "react";

import Cuenta from "./Cuenta";
import Transacciones from "./Transacciones";
import {
  actualizarSaldo,
  listaTransacciones,
  actualizartransacciones,
  buscarSaldo,
} from "./api";

import "./App.css";

export const calcularNuevoSaldo = (valores, saldo) => {
  if (valores.transaccion === "deposito") {
    return saldo + parseInt(valores.valor);
  } else {
    return saldo - parseInt(valores.valor);
  }
};

function App() {
  const [saldo, setSaldo] = useState(1000);
  const [transacciones, setTransacciones] = useState([]);

  async function cargarTransacciones() {
    const transacciones = await listaTransacciones();
    setTransacciones(transacciones);
  }

  async function obtenerSaldo() {
    setSaldo(await buscarSaldo());
  }

  function realizarTransaccion(valores) {
    const nuevoSaldo = calcularNuevoSaldo(valores, saldo);

    actualizarSaldo(nuevoSaldo).catch((error) => console.error(error));
    actualizartransacciones(valores).catch((error) => console.error(error));

    setSaldo(nuevoSaldo);
    setTransacciones([valores]);
  }

  useEffect(() => {
    obtenerSaldo();
    cargarTransacciones();
  }, [saldo]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AluraBank</h1>
      </header>
      <Cuenta saldo={saldo} realizarTransaccion={realizarTransaccion} />
      <Transacciones transacciones={transacciones} />
    </div>
  );
}

export default App;
