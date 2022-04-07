import { Button } from 'react-bootstrap'
import './IndexPage.css'

const IndexPage = () => {

    return (
        <header className='header'>
            <h1>Planet and Stars</h1>
            <Button  variant="light" onClick={() => '/planetas'}>Ver planetas</Button>
        </header>
    )
}

export default IndexPage