import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants'

function LandingPage() {
    const [data, setData] = useState([])
    const [rover, setRover] = useState('perseverance')

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${process.env.REACT_APP_API_URI}/${rover}/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    setData(response.data.latest_photos)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [rover])

    return (
        <>
        <h1>This is the landing component</h1>
        </>
    )
}

export default LandingPage