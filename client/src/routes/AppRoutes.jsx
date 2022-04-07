import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import PlanetListPage from '../pages/PlanetListPage/PlanetListPage'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<IndexPage />} />
            <Route path='/planetas' element={<PlanetListPage />} />
        </Routes>
    )
}

export default AppRoutes