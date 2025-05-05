import React, { useState } from "react";
import "./ActividadIdeaPrincipal.css";

const ejercicios = [
  {
    pregunta: "El lápiz rojo está encima del mueble blanco al lado de la cocina. ¿De qué color es el lápiz?",
    opciones: [
      { texto: "Blanco", correcta: false },
      { texto: "Al lado de la cocina", correcta: false },
      { texto: "Rojo", correcta: true },
    ],
  },
  {
    pregunta: "María guardó su bicicleta nueva en el garaje después de usarla. ¿Dónde está la bicicleta?",
    opciones: [
      { texto: "Es nueva", correcta: false },
      { texto: "En el garaje", correcta: true },
      { texto: "Después de usarla", correcta: false },
    ],
  },
  {
    pregunta: "El pastel de chocolate hecho por mi abuela está sobre la mesa de la sala. ¿Quién hizo el pastel?",
    opciones: [
      { texto: "De chocolate", correcta: false },
      { texto: "Sobre la mesa", correcta: false },
      { texto: "Mi abuela", correcta: true },
    ],
  },
];

const ActividadIdeaPrincipal = () => {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [acertado, setAcertado] = useState(false);
  const [mostrarReintentar, setMostrarReintentar] = useState(false);
  const [completado, setCompletado] = useState(false);

  const verificar = (index) => {
    setSeleccion(index);
    if (ejercicios[ejercicioActual].opciones[index].correcta) {
      setAcertado(true);
      setMostrarReintentar(false);
    } else {
      setMostrarReintentar(true);
    }
  };

  const siguienteEjercicio = () => {
    if (ejercicioActual < ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setSeleccion(null);
      setAcertado(false);
      setMostrarReintentar(false);
    } else {
      setCompletado(true);
    }
  };

  const reintentar = () => {
    setSeleccion(null);
    setAcertado(false);
    setMostrarReintentar(false);
  };

  const reiniciar = () => {
    setEjercicioActual(0);
    setSeleccion(null);
    setAcertado(false);
    setMostrarReintentar(false);
    setCompletado(false);
  };

  if (completado) {
    return (
      <div className="contenedor-actividad">
        <div className="tarjeta-pregunta">
          <h2 className="titulo-final">🎉 ¡Sección completada!</h2>
          <p className="texto-final">Has concluido exitosamente todos los ejercicios de esta sección.</p>
          <div className="contenedor-botones">
            <button onClick={reiniciar} className="boton-reiniciar">
              🔄 Volver a intentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contenedor-actividad">
      <h2 className="titulo-actividad"> Ejercicio {ejercicioActual + 1} de {ejercicios.length}</h2>
      <div className="tarjeta-pregunta">
        {/* Instrucciones solo en el primer ejercicio */}
        {ejercicioActual === 0 && (
          <div className="instrucciones-ejercicio">
            <p>📝 <strong>Instrucciones:</strong> Lee y selecciona la respuesta correcta.</p>
          </div>
        )}
        
        <p className="texto-pregunta">{ejercicios[ejercicioActual].pregunta}</p>
        
        <div className="contenedor-opciones">
          {ejercicios[ejercicioActual].opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => verificar(index)}
              className={`opcion ${
                seleccion !== null
                  ? opcion.correcta
                    ? "correcta"
                    : seleccion === index
                    ? "incorrecta"
                    : "neutra"
                  : ""
              }`}
              disabled={acertado || (seleccion !== null && !opcion.correcta)}
            >
              {opcion.texto}
              {seleccion !== null && opcion.correcta && (
                <span className="icono-respuesta">✓</span>
              )}
              {seleccion !== null && !opcion.correcta && seleccion === index && (
                <span className="icono-respuesta">✕</span>
              )}
            </button>
          ))}
        </div>

        {mostrarReintentar && !acertado && (
          <div className="contenedor-botones">
            <button onClick={reintentar} className="boton-reintentar">
              🔄 Reintentar
            </button>
          </div>
        )}

        {acertado && (
          <div className="contenedor-botones">
            <button onClick={siguienteEjercicio} className="boton-continuar">
              {ejercicioActual < ejercicios.length - 1 
                ? "➡️ Siguiente ejercicio" 
                : "✅ Finalizar sección"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActividadIdeaPrincipal;