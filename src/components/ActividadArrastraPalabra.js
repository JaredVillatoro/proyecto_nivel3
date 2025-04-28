import React, { useState } from "react";
import "../App.css";

const frutas = [
  { id: 1, imagen: require("../images/naranja.png"), palabra: "Naranja" },
  { id: 2, imagen: require("../images/sandia.png"), palabra: "Sandia" },
  { id: 3, imagen: require("../images/uva.png"), palabra: "Uva" },
];

function ActividadArrastraPalabra() {
  const [mensaje, setMensaje] = useState("");
  const [palabraArrastrada, setPalabraArrastrada] = useState(null);

  const permitirSoltar = (e) => {
    e.preventDefault();
  };

  const soltarPalabra = (e, fruta) => {
    if (palabraArrastrada === fruta.palabra) {
      setMensaje(`✅ ¡Muy bien! Esa es la palabra correcta: ${fruta.palabra}`);
      leerTexto(`Muy bien. ${fruta.palabra}`);
    } else {
      setMensaje("❌ Esa no es la palabra correcta. Intenta de nuevo.");
      leerTexto("Esa no es la palabra correcta");
    }
  };

  const leerTexto = (texto) => {
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    window.speechSynthesis.speak(voz);
  };

  return (
    <div>
      <h2> Actividad 3: Relaciona la palabra con la imagen</h2>
      <p>
        Arrastra la palabra hacia la imagen correcta. Da clic en la palabra para
        escucharla.
      </p>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        {frutas.map((fruta) => (
          <div
            key={fruta.id}
            onDrop={(e) => soltarPalabra(e, fruta)}
            onDragOver={permitirSoltar}
            style={{
              border: "2px dashed #ccc",
              padding: "10px",
              width: "150px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fdfdfd",
              borderRadius: "12px",
            }}
          >
            <img
              src={fruta.imagen}
              alt={fruta.palabra}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        {frutas.map((fruta) => (
          <div
            key={fruta.palabra}
            draggable
            onDragStart={() => setPalabraArrastrada(fruta.palabra)}
            onClick={() => leerTexto(fruta.palabra)}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              margin: "10px",
              border: "2px solid #444",
              borderRadius: "8px",
              backgroundColor: "#e0f7fa",
              cursor: "grab",
              fontWeight: "bold",
            }}
          >
            {fruta.palabra}
          </div>
        ))}
      </div>

      {mensaje && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "18px",
            color: mensaje.includes("✅") ? "green" : "red",
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default ActividadArrastraPalabra;
