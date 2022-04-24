import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import NasaDataPage from '../pages/NasaDataPage/NasaDataPage'
import PlanetDetailsPage from '../pages/PlanetDetailsPage/PlanetDetailsPage'
import PlanetListPage from '../pages/PlanetListPage/PlanetListPage'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<IndexPage />} />
            <Route path='/planets' element={<PlanetListPage />} />
            <Route path='/planets/:_id' element={<PlanetDetailsPage />} />
            <Route path='/nasaData' element={<NasaDataPage />} />


        </Routes>
    )
}

export default AppRoutes