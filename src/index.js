import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';  // Asegúrate de que la ruta sea correcta
import Mascotas from './components/mascotas'; // Asegúrate de que la ruta sea correcta
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Container className="mt-3">
      <Row>
        <Routes>
          {/* Ruta para ver el listado de mascotas */}
          <Route path="/" element={<Mascotas />} />
          {/* Ruta para ver los detalles de una mascota */}
          <Route path="/detail/:mascotaId" element={<Detail />} />
        </Routes>
      </Row>
    </Container>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
