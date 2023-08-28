const API_URL = "http://localhost:3001";
const TRANSACCIONES_URI = `${API_URL}/transacciones`;
const CUENTA_URI = `${API_URL}/cuenta`;

const conecta = (uri, options = {}) => {
  return fetch(uri, options).then(async (response) => {
    if (response.ok) {
      const dados = await response.json();
      return dados;
    }
    throw new Error(response);
  });
};

export const listaTransacciones = () => conecta(TRANSACCIONES_URI);

export const buscarSaldo = () => conecta(CUENTA_URI).then((data) => data.saldo);

export const actualizarSaldo = (saldo) =>
  conecta(CUENTA_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ saldo }),
  });

export const actualizartransacciones = (data) =>
  conecta(TRANSACCIONES_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(data),
  });
