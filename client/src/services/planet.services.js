import axios from 'axios'

class PlanetService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    getAllPlanets = () => {
        return this.api.get('/planets')
    }

    getOnePlanet = planet_id => {
        return this.api.get(`/planets/${planet_id}`)
    }

    savePlanet = planet => {
        return this.api.post(`planets/create`, planet)
    }

}
const planetService = new PlanetService()

export default planetService