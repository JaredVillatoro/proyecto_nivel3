import React from "react";
import ActividadIdeaPrincipal from "./components/ActividadIdeaPrincipal";
import ActividadComparacion from "./components/ActividadComparacion";
import ActividadArrastraPalabra from "./components/ActividadArrastraPalabra"; // Nuevo componente


function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🧠 Nivel 3: Análisis y Pensamiento Crítico</h1>

      <ActividadIdeaPrincipal />
      <hr style={{ margin: "40px 0" }} />
      <ActividadComparacion />
      <hr style={{ margin: "40px 0" }} />
      <ActividadArrastraPalabra />

    </div>
  );
}

export default App;

