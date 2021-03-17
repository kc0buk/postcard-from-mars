import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants'

function LandingPage() {
    const [data, setData] = useState({})

    useEffect(() => {
        console.log(`${process.env.REACT_APP_API_KEY}`)
        const fetchData = () => {
            axios
                .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    return (
        <>
        <h1>This is the landing component</h1>
        </>
    )
}

export default LandingPage