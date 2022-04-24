import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './NasaData.css'

const NasaData = ({ dayPicture }) => {
    const { title, url, explanation, date } = dayPicture

    return (
        <Container>

            <Card className='nasaDetails'>
                <Card.Img className='nasaImg' variant="top" src={url} />
                <Card.Body>
                    <Card.Title><h2>{title}</h2></Card.Title>
                    <Card.Text className='nasaText'>
                        {explanation}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{date}</small>
                </Card.Footer>

            </Card>

        </Container>

    )
}

export default NasaData