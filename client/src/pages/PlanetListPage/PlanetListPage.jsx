import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import planetService from '../../services/planet.services'
import PlanetCard from '../../components/PlanetCard/PlanetCard'
import './PlanetListPage.css'

const PlanetListPage = () => {

    const [planets, setPlanets] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        planetService
            .getAllPlanets()
            .then(response => {
                setPlanets(response.data)
                setIsLoading(false)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])




    return (

        <Container className='planetListContainer'>
            <Row>

                {isLoading
                    ? <h1>Loading...</h1>
                    : planets.map(planet => <Col xs={6} md={4} key={planet._id}><PlanetCard {...planet} /></Col>)}

            </Row>
        </Container>
    )
}
export default PlanetListPage