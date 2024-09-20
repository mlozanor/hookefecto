import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
                    <Col md={6} key={mascota.id} className="mb-4">
                        <Card>
                            <Row noGutters>
                                {/* Columna para la imagen */}
                                <Col md={4}>
                                    <Card.Img 
                                        variant="top" 
                                        src={mascota.foto} 
                                        alt={mascota.descripcion} 
                                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                                    />
                                </Col>
                                {/* Columna para el texto */}
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{mascota.nombre}</Card.Title>
                                        <Card.Text>
                                            {mascota.descripcion}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Mascotas;
