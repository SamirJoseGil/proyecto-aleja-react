import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default Manual;
function Manual() {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card.Body>
                        <h2 className="text-center custom-title-small">
                            Manual de Ensamble y Desensamble
                        </h2>
                        <Card.Subtitle className="mb-2 text-muted text-center ">
                            Por Alejandra Garcia y Salome Serna
                        </Card.Subtitle>
                        <Card.Text  className='mt-4'>
                            El presente proyecto tiene como finalidad enseñar a los estudiantes de la Institución Educativa Rural Jaipera (I.E.R Jaipera) los procesos de ensamble y desensamble de componentes de sistemas informáticos. Actualmente, la Institución Educativa Rural Jaipera ofrece una formación técnica en sistemas enfocada en el desarrollo de habilidades prácticas y teóricas en el área de hardware y software, con el objetivo de fortalecer la formación de los nuevos estudiantes.
                        </Card.Text>
                        <Card.Text>
                            Para cumplir con este propósito, se implementarán herramientas web como HTML, CSS y JavaScript, lo que garantiza que el manual sea accesible desde cualquier dispositivo con conexión a internet. Además, al ser una plataforma digital, se asegura que el contenido pueda ser fácilmente actualizado.
                        </Card.Text>
                        <Card.Text>
                            El manual interactivo no solo proporcionará contenido teórico, sino que incluirá demostraciones visuales, actividades prácticas y recursos interactivos que permitirán a los estudiantes aprender a su propio ritmo. De esta manera, el manual no solo se posicionará como una simple guía de estudio, sino como una herramienta pedagógica integral que facilitará el proceso formativo tanto dentro como fuera del aula.
                        </Card.Text>
                        <Card.Text>
                            Además, el proyecto responde a la necesidad de un recurso educativo que supere las limitaciones actuales en el acceso a materiales de apoyo, especialmente en un contexto rural como el de la Institución Educativa Rural Jaipera. La falta de recursos digitales y la limitación de materiales físicos han sido identificadas como barreras significativas para el aprendizaje práctico en el área de sistemas informáticos.
                        </Card.Text>
                        <div className="text-center mt-5">
                            <Button variant="primary" className='blue-background custom-buttom-text' href="/Manual/Pautas">Comenzar</Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}