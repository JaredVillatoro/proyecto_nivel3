import React, { useState } from "react";
import "./ActividadOrdenarOraciones.css";

const oraciones = [
  {
    id: 1,
    correcta: ["El", "niño", "come", "una", "manzana"],
  },
  {
    id: 2,
    correcta: ["Mi", "hermana", "juega", "en", "el", "parque"],
  },
];

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const ActividadOrdenarOraciones = () => {
  const [index, setIndex] = useState(0);
  const [oracion, setOracion] = useState(shuffleArray(oraciones[index].correcta));
  const [respuesta, setRespuesta] = useState([]);

  const moverPalabra = (palabra) => {
    setRespuesta([...respuesta, palabra]);
    setOracion(oracion.filter((p) => p !== palabra));
  };

  const verificar = () => {
    const esCorrecto = JSON.stringify(respuesta) === JSON.stringify(oraciones[index].correcta);
    alert(esCorrecto ? "✅ ¡Muy bien!" : "❌ Intenta de nuevo");
  };

  const siguiente = () => {
    const nuevoIndex = (index + 1) % oraciones.length;
    setIndex(nuevoIndex);
    setOracion(shuffleArray(oraciones[nuevoIndex].correcta));
    setRespuesta([]);
  };

  return (
    <div className="ordenar-oraciones">
      <h2>🧩 Ordena la oración</h2>
      <div className="zona-palabras">
        {oracion.map((palabra, i) => (
          <button key={i} onClick={() => moverPalabra(palabra)}>
            {palabra}
          </button>
        ))}
      </div>
      <div className="zona-respuesta">
        {respuesta.map((palabra, i) => (
          <span key={i} className="palabra-elegida">
            {palabra}
          </span>
        ))}
      </div>
      <div className="botones">
        <button onClick={verificar}>Verificar</button>
        <button onClick={siguiente}>Siguiente oración</button>
      </div>
    </div>
  );
};

export default ActividadOrdenarOraciones;
