import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ActividadIdeaPrincipal from "./components/ActividadIdeaPrincipal";
import ActividadComparacion from "./components/ActividadComparacion";
import ActividadArrastraPalabra from "./components/ActividadArrastraPalabra";
import ActividadOrdenarOraciones from "./components/ActividadOrdenarOraciones";


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Menú lateral */}
        <div className="sidebar">
          <h1>LeePlus</h1>
          <p>Actividades del Modulo 3</p>
          <Link to="/"><button>Inicio</button></Link>
          <Link to="/idea-principal"><button>Selecciona la respuesta correcta</button></Link>
          <Link to="/comparacion"><button>Verdadero o Falso</button></Link>
          <Link to="/arrastra-palabra"><button>Arrastra Palabra</button></Link>
          <Link to="/ordenar-oraciones"><button>ordenar-oraciones</button></Link>

          <hr style={{ margin: "20px 0" }} />
<button
  onClick={() => {
    window.location.href = "http://10.33.24.81:5173/perfil";
  }}
  style={{
    backgroundColor: "#e11d48",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  }}
>
  Volver a la página principal
</button>

        </div>

        {/* Contenido principal */}
        <div className="main-content">
          <Routes>

            <Route 
              path="/" 
              element={
                <div className="welcome-container">
                  <div className="welcome-card">
                    <div className="welcome-icon"></div>
                    <h2>Bienvenido al Módulo 3</h2>
                    <p>Explora y disfruta de las actividades interactivas que hemos preparado para ti.</p>
                    <div className="welcome-grid">
                      <div className="grid-item">
                        <span>📚</span>
                        <p>Aprendizaje interactivo</p>
                      </div>
                      <div className="grid-item">
                        <span>🎯</span>
                        <p>Ejercicios prácticos</p>
                      </div>
                      <div className="grid-item">
                        <span>🏆</span>
                        <p>Desafíos emocionantes</p>
                      </div>
                    </div>
                    <button className="start-button">Selecciona una actividad para comenzar</button>
                  </div>
                </div>
              } 
            />
            <Route path="/idea-principal" element={<ActividadIdeaPrincipal />} />
            <Route path="/comparacion" element={<ActividadComparacion />} />
            <Route path="/arrastra-palabra" element={<ActividadArrastraPalabra />} />
            <Route path="/ordenar-oraciones" element={<ActividadOrdenarOraciones />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;