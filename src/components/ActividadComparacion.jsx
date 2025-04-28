import React, { useState } from "react";

const ActividadComparacion = () => {
  const [mensaje, setMensaje] = useState("");
  const [esCorrecto, setEsCorrecto] = useState(null);

  const leerTexto = (texto) => {
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    window.speechSynthesis.speak(voz);
  };

  const verificarComparacion = (texto, correcta) => {
    leerTexto(texto);

    if (correcta) {
      setMensaje("¡Excelente comparación! 🎉");
      setEsCorrecto(true);
    } else {
      setMensaje("Intenta de nuevo, esa comparación no es correcta. ❌");
      setEsCorrecto(false);
    }
  };

  return (
    <div className="actividad">
      <h2> Actividad 2: Compara los textos</h2>
      <p
        className="texto"
        onClick={() =>
          leerTexto(
            "El sol proporciona energía a las plantas para que puedan crecer, mientras que el agua y el aire son esenciales para su supervivencia."
          )
        }
      >
        El sol proporciona energía a las plantas para que puedan crecer, mientras
        que el agua y el aire son esenciales para su supervivencia.
      </p>

      <div className="opciones">
        <button
          onClick={() =>
            verificarComparacion(
              "El agua y el aire son más importantes que el sol.",
              false
            )
          }
        >
          El agua y el aire son más importantes que el sol.
        </button>

        <button
          onClick={() =>
            verificarComparacion(
              "El sol es crucial para las plantas, pero el agua y el aire también lo son.",
              true
            )
          }
        >
          El sol es crucial para las plantas, pero el agua y el aire también lo
          son.
        </button>

        <button
          onClick={() =>
            verificarComparacion(
              "Las plantas solo necesitan sol para vivir.",
              false
            )
          }
        >
          Las plantas solo necesitan sol para vivir.
        </button>
      </div>

      {mensaje && (
        <p
          className="mensaje"
          style={{
            color: esCorrecto ? "green" : "red",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default ActividadComparacion;
