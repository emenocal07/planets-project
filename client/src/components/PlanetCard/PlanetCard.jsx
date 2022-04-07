import { Card, Container } from "react-bootstrap"
import './PlanetCard.css'

const PlanetCard = ({name, image }) => {

    return (
<Container>



<Card className="planetCard text-white" style={{ width: '18rem'  }}>
  <Card.Img  variant="top" src={image} />
  <Card.ImgOverlay >
    </Card.ImgOverlay>
    <Card.Title>{name}</Card.Title>
</Card>
</Container>
    )
}

export default PlanetCard

// style={{opacity: '10%' }}