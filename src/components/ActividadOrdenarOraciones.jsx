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
  {
    id: 3,
    correcta: ["Los", "pájaros", "vuelan", "en", "el", "cielo"],
  },
  {
    id: 4,
    correcta: ["María", "lee", "un", "libro", "interesante"],
  },
];

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const ActividadOrdenarOraciones = () => {
  const [index, setIndex] = useState(0);
  const [oracion, setOracion] = useState(shuffleArray(oraciones[index].correcta));
  const [respuesta, setRespuesta] = useState([]);
  const [esCorrecto, setEsCorrecto] = useState(null);
  const [completado, setCompletado] = useState(false);

  const moverPalabra = (palabra) => {
    if (esCorrecto === null) { // Solo permite mover si no se ha verificado
      setRespuesta([...respuesta, palabra]);
      setOracion(oracion.filter((p) => p !== palabra));
    }
  };

  const verificar = () => {
    const correcto = JSON.stringify(respuesta) === JSON.stringify(oraciones[index].correcta);
    setEsCorrecto(correcto);
  };

  const siguiente = () => {
    if (index < oraciones.length - 1) {
      setIndex(index + 1);
      setOracion(shuffleArray(oraciones[index + 1].correcta));
      setRespuesta([]);
      setEsCorrecto(null);
    } else {
      setCompletado(true);
    }
  };

  const reintentar = () => {
    setOracion(shuffleArray(oraciones[index].correcta));
    setRespuesta([]);
    setEsCorrecto(null);
  };

  const reiniciar = () => {
    setIndex(0);
    setOracion(shuffleArray(oraciones[0].correcta));
    setRespuesta([]);
    setEsCorrecto(null);
    setCompletado(false);
  };

  if (completado) {
    return (
      <div className="ordenar-oraciones">
        <div className="tarjeta-completado">
          <h2>🎉 ¡Sección completada!</h2>
          <p>Has ordenado correctamente todas las oraciones</p>
          <button onClick={reiniciar} className="boton-reiniciar">
            🔄 Volver a intentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ordenar-oraciones">
      <div className="header-actividad">
        <h2>🧩 Ordena la oración</h2>
        <div className="contador">Oración {index + 1} de {oraciones.length}</div>
      </div>
      
      <div className="tarjeta-pregunta">
        {index === 0 && (
          <div className="instrucciones">
            📝 <strong>Instrucciones:</strong> Arrastra y ordena la oración correcta
          </div>
        )}
        
        <div className="zona-palabras">
          {oracion.map((palabra, i) => (
            <button 
              key={i} 
              onClick={() => moverPalabra(palabra)}
              className="palabra-boton"
              disabled={esCorrecto !== null}
            >
              {palabra}
            </button>
          ))}
        </div>

        <div className="zona-respuesta">
          {respuesta.map((palabra, i) => (
            <span key={i} className="palabra-elegida">
              {palabra}
              <span className="numero-orden">{i + 1}</span>
            </span>
          ))}
        </div>

        <div className="feedback-mensaje" data-correct={esCorrecto}>
          {esCorrecto !== null && (
            esCorrecto 
              ? "✅ ¡Oración correcta!" 
              : "❌ Orden incorrecta, intenta nuevamente"
          )}
        </div>

        <div className="botones-accion">
          <button 
            onClick={verificar} 
            className="boton-verificar"
            disabled={respuesta.length !== oraciones[index].correcta.length || esCorrecto !== null}
          >
            Verificar
          </button>
          
          {esCorrecto !== null && (
            esCorrecto ? (
              <button onClick={siguiente} className="boton-siguiente">
                {index < oraciones.length - 1 ? "Siguiente ➡️" : "Finalizar ✅"}
              </button>
            ) : (
              <button onClick={reintentar} className="boton-reintentar">
                🔄 Reintentar
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ActividadOrdenarOraciones;