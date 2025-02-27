import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega */
import "./index.css";
import { BrowserRouter } from "react-router-dom"; /* se agrega para habilitar la navegacion por rutas en la aplicacion */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* se agrega BrowserRouter, envuelve la aplicacion para el enrutamiento */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
