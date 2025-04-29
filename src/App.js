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
          <h1>Menú</h1>
          <p>Actividades del Nivel 3</p>
          <Link to="/"><button>Inicio</button></Link>
          <Link to="/idea-principal"><button>Idea Principal</button></Link>
          <Link to="/comparacion"><button>Comparación</button></Link>
          <Link to="/arrastra-palabra"><button>Arrastra Palabra</button></Link>
          <Link to="/ordenar-oraciones"><button>ordenar-oraciones</button></Link>
        </div>

        {/* Contenido principal */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <h2>🧠 Bienvenido al Nivel 3</h2>
                <p>Selecciona una actividad para comenzar.</p>
              </>
            } />
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