import { Card, Container } from "react-bootstrap"
import './PlanetCard.css'
import { Link } from 'react-router-dom'

const PlanetCard = ({ name, image, _id }) => {

    return (
        
            <Link to={`/planets/${_id}`}>
                <Card className="planetCard text-white" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.ImgOverlay >
                    </Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                </Card>

            </Link>
    )
}

export default PlanetCard

// style={{opacity: '10%' }}