import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SelectRover from '../common/SelectRover'
import { 
    LandingContainer, 
    TitleContainer, 
    TitleDiv, 
    FooterContentDiv, 
    Title,
    BackgroundDiv } from '../common/StyledComponents'



function LandingPage() {
    const [data, setData] = useState([])
    const [rover, setRover] = useState('perseverance')
    const [backgroundImgUrl, setBackgroundImgUrl] = useState('')
    
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${process.env.REACT_APP_API_URI}/${rover}/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    let imageUrls = []
                    response.data.latest_photos.map(photo => {
                        return imageUrls.push(photo['img_src'])
                    })
                    setData(imageUrls)
                    setBackgroundImgUrl(imageUrls[0])
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [rover])

    useEffect(() => {
        const interval = setInterval(() => {
            let randomInt = Math.floor(Math.random() * (data.length - 1))
            setBackgroundImgUrl((prevBackgroundImg) => data[randomInt])
        }, 7000)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backgroundImgUrl])

    const selectRover = (newRover) => {
        setRover(newRover)
    }
    
    return (
        <BackgroundDiv imgObj={backgroundImgUrl}>
        <LandingContainer imgObj={backgroundImgUrl}>
        <TitleContainer>
        <TitleDiv>
        <SelectRover value={rover} selectRover={selectRover}/>
        <FooterContentDiv>
        <Title>Postcards from Mars</Title>
        </FooterContentDiv>
        </TitleDiv>
        </TitleContainer>
        </LandingContainer>
        </BackgroundDiv>
    )
}

export default LandingPage