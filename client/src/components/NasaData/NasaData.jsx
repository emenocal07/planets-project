import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './NasaData.css'

const NasaData = ({ dayPicture }) => {
    const { title, url, explanation, date } = dayPicture

    return (

        <Container fluid>
            <Card border='secondary' className='nasaDetails'>
                <Row>

                    <Col sm={8}>
                        <Card.Img className='nasaImg' variant="top" src={url} />
                    </Col>

                    <Col sm={4}>
                        <Card.Title className='nasaTitle'><h3>{title}</h3></Card.Title>
                        <Card.Subtitle>Date: {date}</Card.Subtitle>
                        <Card.Body>
                            <Card.Text className='nasaText'>
                                {explanation}
                            </Card.Text>
                        </Card.Body>
                    </Col>

                </Row>
            </Card>
        </Container>

    )
}

export default NasaData