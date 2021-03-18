import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


let backgroundUrl = 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00025/ids/edr/browse/edl/EAE_0025_0669152786_143ECM_N0030792EDLC00025_0020LUJ01_1200.jpg'

const LandingContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    background-image: url(${props => props.imgObj ? props.imgObj : backgroundUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
`

const TitleDiv = styled.div`
    background-color: black;
    opacity: 0.75;
    margin-bottom: 3em;
    margin-left: 0px;
    padding-bottom: 4em;
    padding-top: 2em;
    padding-left: 3.5em;
    padding-right: 6em;
`

const Title = styled.h1`
    color: white;
    font-size: 3em;
    /* font-variant: small-caps; */
    opacity: 4;
    /* margin-bottom: 1em; */
    margin-left: 0px;
    /* padding: 1em 2em; */
`

function LandingPage() {
    const [data, setData] = useState([])
    const [rover, setRover] = useState('perseverance')
    const [backgroundImgUrl, setBackgroundImgUrl] = useState('')
    const [imgIndex, setImgIndex] = useState(0)
    
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${process.env.REACT_APP_API_URI}/${rover}/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    let imageUrls = []
                    response.data.latest_photos.map(photo => {
                        imageUrls.push(photo['img_src'])
                    })
                    setData(imageUrls)
                    setBackgroundImgUrl(imageUrls[0])
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            let randomInt = Math.floor(Math.random() * (data.length - 1))
            setBackgroundImgUrl((prevBackgroundImg) => data[randomInt])
        }, 1000)
        return () => clearInterval(interval)
    }, [backgroundImgUrl])
    
    return (
        <LandingContainer imgObj={backgroundImgUrl}>
        <TitleContainer>
        <TitleDiv>
        <Title>Postcards from Mars ...</Title>
        </TitleDiv>
        </TitleContainer>
        </LandingContainer>
    )
}

export default LandingPage