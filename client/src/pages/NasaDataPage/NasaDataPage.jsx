import React, { useEffect, useState } from 'react'
import NasaData from '../../components/NasaData/NasaData'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import nasaService from '../../services/nasa.services'

const NasaDataPage = () => {

    const [dayPicture, setDayPicture] = useState([])
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        nasaService
            .getTodayPic()
            .then(response => response.data)
            .then(picture => {
                setDayPicture(picture)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <>
            {isloading ? <LoadingSpinner/> : <NasaData dayPicture={dayPicture} />}
        </>
    )
}

export default NasaDataPage