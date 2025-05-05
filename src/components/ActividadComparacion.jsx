import React, { useState } from "react";
import "./ActividadVerdaderoFalso.css";

const ejerciciosVF = [
  {
    afirmacion: "Las plantas pueden sobrevivir solo con aire, sin necesidad de agua ni sol.",
    correcta: false,
    explicacion: "Incorrecto. Las plantas necesitan agua, aire y sol para vivir. 🌱",
  },
  {
    afirmacion: "El Sol es una estrella.",
    correcta: true,
    explicacion: "¡Correcto! El Sol es una estrella. ☀️",
  },
  {
    afirmacion: "Los humanos pueden respirar bajo el agua sin ayuda.",
    correcta: false,
    explicacion: "Incorrecto. Los humanos necesitan aparatos especiales para respirar bajo el agua. 🐠",
  },
  {
    afirmacion: "La Tierra gira alrededor del Sol.",
    correcta: true,
    explicacion: "¡Correcto! La Tierra gira alrededor del Sol. 🌍",
  },
];

const ActividadVerdaderoFalso = () => {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [esCorrecto, setEsCorrecto] = useState(null);
  const [mostrarReintentar, setMostrarReintentar] = useState(false);
  const [completado, setCompletado] = useState(false);

  const verificar = (respuesta) => {
    const correcta = ejerciciosVF[indice].correcta;
    setSeleccion(respuesta);
    if (respuesta === correcta) {
      setEsCorrecto(true);
      setMostrarReintentar(false);
    } else {
      setEsCorrecto(false);
      setMostrarReintentar(true);
    }
  };

  const siguiente = () => {
    if (indice < ejerciciosVF.length - 1) {
      setIndice(indice + 1);
      setSeleccion(null);
      setEsCorrecto(null);
      setMostrarReintentar(false);
    } else {
      setCompletado(true);
    }
  };

  const reintentar = () => {
    setSeleccion(null);
    setEsCorrecto(null);
    setMostrarReintentar(false);
  };

  const reiniciar = () => {
    setIndice(0);
    setSeleccion(null);
    setEsCorrecto(null);
    setMostrarReintentar(false);
    setCompletado(false);
  };

  if (completado) {
    return (
      <div className="actividad-vf">
        <div className="tarjeta-vf">
          <h2 className="titulo-final">🎉 ¡Sección completada!</h2>
          <p className="texto-final">
            Has respondido correctamente todas las afirmaciones. ¡Muy bien hecho!
          </p>
          <button onClick={reiniciar} className="boton-reiniciar">
            🔄 Volver a intentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="actividad-vf">
      <h2 className="titulo-actividad">Ejercicio {indice + 1} de {ejerciciosVF.length}</h2>
      {indice === 0 && (
        <p className="instrucciones-ejercicio">
          📝 <strong>Instrucciones:</strong> Lee la afirmación y selecciona si es verdadera o falsa.
        </p>
      )}
      <div className="tarjeta-vf">
        <p className="pregunta">{ejerciciosVF[indice].afirmacion}</p>

        <div className="botones-vf">
        <button
  className={`boton ${seleccion === true ? (esCorrecto ? "correcto" : "incorrecto") : ""}`}
  onClick={() => verificar(true)}
  disabled={esCorrecto !== null}
>
  Verdadero {seleccion === true && (esCorrecto ? "✔️" : "❌")}
</button>

<button
  className={`boton ${seleccion === false ? (esCorrecto ? "correcto" : "incorrecto") : ""}`}
  onClick={() => verificar(false)}
  disabled={esCorrecto !== null}
>
  Falso {seleccion === false && (esCorrecto ? "✔️" : "❌")}
</button>

        </div>

        {seleccion !== null && (
          <p className={`mensaje ${esCorrecto ? "correcto" : "incorrecto"}`}>
            {ejerciciosVF[indice].explicacion}
          </p>
        )}

        {mostrarReintentar && (
          <button className="boton-reintentar" onClick={reintentar}>
            🔄 Reintentar
          </button>
        )}

        {esCorrecto && (
          <button className="boton-continuar" onClick={siguiente}>
            {indice < ejerciciosVF.length - 1 ? "➡️ Siguiente" : "✅ Finalizar sección"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ActividadVerdaderoFalso;
