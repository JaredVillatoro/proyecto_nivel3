import React, { useState } from "react";
import "../App.css";

const frutas = [
  { id: 1, imagen: require("../images/naranja.png"), palabra: "Naranja" },
  { id: 2, imagen: require("../images/sandia.png"), palabra: "Sandia" },
  { id: 3, imagen: require("../images/uva.png"), palabra: "Uva" },
];

function ActividadArrastraPalabra() {
  const [palabraArrastrada, setPalabraArrastrada] = useState(null);
  const [emparejamientos, setEmparejamientos] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [verificado, setVerificado] = useState(false);

  const permitirSoltar = (e) => e.preventDefault();

  const soltarPalabra = (e, fruta) => {
    if (!emparejamientos[fruta.id]) {
      setEmparejamientos({
        ...emparejamientos,
        [fruta.id]: palabraArrastrada,
      });
    }
    setPalabraArrastrada(null);
  };

  const leerTexto = (texto) => {
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    window.speechSynthesis.speak(voz);
  };

  const verificarRespuestas = () => {
    const correcto = frutas.every(
      (fruta) => emparejamientos[fruta.id] === fruta.palabra
    );

    if (correcto) {
      setMensaje("🎉 ¡Felicidades! Todas las palabras son correctas.");
      leerTexto("¡Felicidades! Lo hiciste muy bien.");
    } else {
      setMensaje("❌ Algunas palabras están incorrectas. Intenta de nuevo.");
      leerTexto("Algunas palabras están incorrectas, vuelve a intentarlo.");

      // Reinicia los emparejamientos después de un pequeño delay
      setTimeout(() => {
        setEmparejamientos({});
        setMensaje("");
        setVerificado(false);
      }, 2500);
    }

    setVerificado(true);
  };

  const palabrasDisponibles = frutas
    .map((fruta) => fruta.palabra)
    .filter((palabra) => !Object.values(emparejamientos).includes(palabra));

  return (
    <div>
      <h2>Actividad 3: Relaciona la palabra con la imagen</h2>
      <p>Arrastra la palabra hacia la imagen correcta. Da clic en la palabra para escucharla.</p>

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
              flexDirection: "column",
            }}
          >
            <img
              src={fruta.imagen}
              alt={fruta.palabra}
              style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "10px" }}
            />
            <strong>{emparejamientos[fruta.id] || "..."}</strong>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        {palabrasDisponibles.map((palabra) => (
          <div
            key={palabra}
            draggable
            onDragStart={() => setPalabraArrastrada(palabra)}
            onClick={() => leerTexto(palabra)}
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
            {palabra}
          </div>
        ))}
      </div>

      {Object.keys(emparejamientos).length === frutas.length && !verificado && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={verificarRespuestas}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Verificar
          </button>
        </div>
      )}

      {mensaje && (
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            fontSize: "18px",
            color: mensaje.includes("❌") ? "red" : "green",
            textAlign: "center",
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default ActividadArrastraPalabra;
