import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Mascotas() {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then(data => data.json())
            .then(data => {
                setMascotas(data);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h1>Listado de mascotas</h1>
            <hr />
            <Row>
                {mascotas.map((mascota) => (
                    <Col md={4} key={mascota.id} className="mb-4">
                        <Container style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "0", overflow: "hidden" }}>
                            {/* Barra negra con "Adóptame" */}
                            <div style={{ backgroundColor: "#000", color: "#fff", padding: "10px", textAlign: "center" }}>
                                <h5>Adóptame</h5>
                            </div>

                            {/* Imagen de la mascota */}
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                                <img 
                                    src={mascota.foto} 
                                    alt={mascota.descripcion} 
                                    style={{ objectFit: 'cover', height: '250px', width: '250px', borderRadius: '10px' }}
                                />
                            </div>

                            {/* Texto debajo de la imagen */}
                            <div style={{ padding: "10px", textAlign: "center" }}>
                                <h3>{mascota.nombre}</h3>
                                <p>{mascota.descripcion}</p>
                                <p><strong>{mascota.raza}</strong></p>
                            </div>
                        </Container>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Mascotas;
