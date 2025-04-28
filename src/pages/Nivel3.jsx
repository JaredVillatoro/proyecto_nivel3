import React, { useState } from "react";

function Nivel3() {
  const [respuesta, setRespuesta] = useState("");

  const leerTexto = (texto) => {
    const utterance = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(utterance);
  };

  const texto1 = `El cambio climático es uno de los mayores desafíos del siglo 21. Las actividades humanas como la quema de combustibles fósiles generan gases que atrapan el calor.`;
  const texto2 = `Algunas personas creen que el cambio climático es un ciclo natural de la Tierra, sin embargo, la evidencia científica muestra que las emisiones humanas son la principal causa.`;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Nivel 3: Análisis y pensamiento crítico</h1>

      {/* Identificación de ideas */}
      <section style={{ marginTop: "30px" }}>
        <h2>1. Identificación de ideas principales y secundarias</h2>
        <div style={estiloTexto}>
          <p>{texto1}</p>
          <button onClick={() => leerTexto(texto1)}>🔊 Escuchar texto</button>
        </div>
      </section>

      {/* Comparación de textos */}
      <section style={{ marginTop: "40px" }}>
        <h2>2. Comparación de textos y argumentos</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={estiloTexto}>
            <p>{texto1}</p>
            <button onClick={() => leerTexto(texto1)}>🔊 Escuchar</button>
          </div>
          <div style={estiloTexto}>
            <p>{texto2}</p>
            <button onClick={() => leerTexto(texto2)}>🔊 Escuchar</button>
          </div>
        </div>
        <p style={{ marginTop: "10px" }}>
         ¿Qué similitudes y diferencias encuentras entre ambos textos?
        </p>
      </section>

      {/* Respuesta argumentada */}
      <section style={{ marginTop: "40px" }}>
        <h2>3. Escribe tu opinión</h2>
        <textarea
          rows="5"
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          placeholder="Escribe una respuesta argumentada sobre los textos anteriores..."
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
        ></textarea>
      </section>
    </div>
  );
}

const estiloTexto = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

export default Nivel3;
