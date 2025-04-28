import React, { useState } from "react";

const ActividadIdeaPrincipal = () => {
  const [mensaje, setMensaje] = useState("");
  const [esCorrecto, setEsCorrecto] = useState(null); // true o false

  const leerTexto = (texto) => {
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    window.speechSynthesis.speak(voz);
  };

  const verificarRespuesta = (texto, correcta) => {
    leerTexto(texto);

    if (correcta) {
      setMensaje("¡Muy bien! Esa es la idea principal. 🎉");
      setEsCorrecto(true);
    } else {
      setMensaje("Intenta de nuevo, esa no es la idea principal. ❌");
      setEsCorrecto(false);
    }
  };

  return (
    <div className="actividad">
      <h2> Actividad 1: Encuentra la idea principal</h2>
      <p
        className="texto"
        onClick={() =>
          leerTexto(
            "Las plantas necesitan sol, agua y aire para vivir. El sol les da energía. El agua y el aire ayudan a que crezcan fuertes."
          )
        }
      >
        Las plantas necesitan sol, agua y aire para vivir. El sol les da
        energía. El agua y el aire ayudan a que crezcan fuertes.
      </p>

      <div className="opciones">
        <button
          onClick={() =>
            verificarRespuesta("Las plantas se ven bonitas", false)
          }
        >
          Las plantas se ven bonitas.
        </button>

        <button
          onClick={() =>
            verificarRespuesta(
              "Las plantas necesitan cosas para vivir",
              true
            )
          }
        >
          Las plantas necesitan cosas para vivir.
        </button>

        <button
          onClick={() =>
            verificarRespuesta("Las plantas están en el jardín", false)
          }
        >
          Las plantas están en el jardín.
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

export default ActividadIdeaPrincipal;
