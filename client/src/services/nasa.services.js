import axios from 'axios'

class NasaService {
    constructor() {
        this.api = axios.create({ baseURL: `https://api.nasa.gov/planetary/apod?api_key=ZHjRDuIRqUJaC4eeAEz6BVgZxSWw06EbrU5yWmEy` })
    }

    getTodayPic = () => {
        return this.api.get()
    }

    getOneDayPic = date => {
        return this.api.get(`?${date}`)
    }

}
const nasaService = new NasaService()

export default nasaService