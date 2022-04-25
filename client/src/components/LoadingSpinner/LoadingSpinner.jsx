import { Spinner } from 'react-bootstrap'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <Spinner className='spinner' animation="grow" variant="warning" />
  )
}

export default LoadingSpinner