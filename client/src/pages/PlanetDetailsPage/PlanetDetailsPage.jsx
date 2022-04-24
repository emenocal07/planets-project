import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlanetDetails from '../../components/PlanetDetails/PlanetDetails'
import planetService from '../../services/planet.services'

const PlanetDetailsPage = () => {

    const [planetDetails, setPlanetDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { _id } = useParams()

    useEffect(() => {
        planetService
            .getOnePlanet(_id)
            .then(response => response.data)
            .then(planet => {
                setPlanetDetails(planet)
                setIsLoading(false)})
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <PlanetDetails planetDetails={planetDetails} />

        </>

    )
}

export default PlanetDetailsPage