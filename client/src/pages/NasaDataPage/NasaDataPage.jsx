import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NasaData from '../../components/NasaData/NasaData'

const NasaDataPage = () => {

    const [dayPicture, setDayPicture] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API}`)
        .then(response => response.data)
            .then(picture => {
                setDayPicture(picture)
                console.log(picture)
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <>
            <NasaData dayPicture={dayPicture} />
        </>
    )
}

export default NasaDataPage