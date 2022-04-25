import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import planetService from '../../services/planet.services'
import PlanetCard from '../../components/PlanetCard/PlanetCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
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
      })
      .catch(err => console.log(err))
  }, [])




  return (

    <Container className='planetListContainer'>
      <Row>

        {isLoading
          ? <LoadingSpinner/>
          : planets.map(planet => <Col sm key={planet._id}><PlanetCard {...planet} /></Col>)}

      </Row>
    </Container>
  )
}
export default PlanetListPage
