import { Button, Container } from 'react-bootstrap'
import './IndexPage.css'
import { useNavigate } from 'react-router-dom'
import InputDateNasa from '../../components/InputDateNasa/InputDateNasa'

const IndexPage = () => {

    const navigate = useNavigate()

    return (

        <Container>

            <section className='main'>
                <article>

                    <h2>Planets of the solar system</h2>
                    <Button className='nasaBtn' variant="light" onClick={() => navigate('/planets')}><img className='btnImg' src="https://res.cloudinary.com/deif2qotx/image/upload/v1650811481/146-1466732_planet-png_pmezfr.png" alt="planet" /></Button>

                </article>


                <article>
                    <h2>Todays' Astronomy Picture</h2>
                    <Button className='nasaBtn' variant="light" onClick={() => navigate('/nasaData')}>
                        <img className='btnImg' src="https://res.cloudinary.com/deif2qotx/image/upload/v1650810016/nasabkg_ohlifm.png" alt="nasa logo" />
                    </Button>
                </article>

                <article>
                    <h2>Pick a date</h2>
                    <InputDateNasa />
                </article>



            </section>

        </Container>



    )
}

export default IndexPage