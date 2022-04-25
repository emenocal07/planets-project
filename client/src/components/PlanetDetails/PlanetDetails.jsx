import { Card, Col, Container, Row } from 'react-bootstrap'
import './PlanetDetails.css'
const PlanetDetails = ({ planetDetails }) => {
    const { name, image, description, velocity, distance, _id } = planetDetails

    console.log(name, image, description, velocity, distance, _id)
    return (

        <Container>

            <Card className='detailsCard'>
                <Row>
                    <Col sm>
                        <Card.Img variant="top" className='detailsImg' src={image} />
                    </Col>
                    <Col sm>
                        <Card.Body className='detailsText'>
                            <Card.Title><h1>{name}</h1></Card.Title>
                            <Card.Text>
                                DESCRIPTION: {description}
                            </Card.Text>
                            <Card.Text>
                                ORBIT VELOCITY: {velocity} km/s
                            </Card.Text>
                            <Card.Text>
                                DISTANCE FROM THE SUN: {distance} million kilometers
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>

            </Card>

        </Container>
    )
}

export default PlanetDetails




