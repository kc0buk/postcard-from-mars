import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Rover select dropdown box component
import SelectRover from '../common/SelectRover'

// Custom components from styled components
import { 
    LandingContainer, 
    FooterContainer, 
    TitleDiv, 
    FooterContentDiv, 
    Title,
    BackgroundDiv } from '../common/StyledComponents'


// Renders the entire app
function LandingPage() {
    // Used to hold api data in state
    const [data, setData] = useState([])

    // Used to hold the selected rover (defaulted to perseverance) to change the images displayed
    const [rover, setRover] = useState('perseverance')

    // Used to hold and set the URL of the currently displayed image
    const [backgroundImgUrl, setBackgroundImgUrl] = useState('')
    
    // Fetches data from the NASA API for the selected rover and sets into state
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${process.env.REACT_APP_API_URI}/${rover}/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    let imageUrls = []

                    // Strips all data from the response except for image URLs
                    response.data.latest_photos.map(photo => {
                        return imageUrls.push(photo['img_src'])
                    })
                    setData(imageUrls)

                    // Defaults initial image displayed
                    setBackgroundImgUrl(imageUrls[0])
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [rover])

    // Used to generate a randomly selected image and set the URL of the currently displayed image
    useEffect(() => {
        const interval = setInterval(() => {
            let randomInt = Math.floor(Math.random() * (data.length - 1))
            setBackgroundImgUrl((prevBackgroundImg) => data[randomInt])
        }, 7000)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backgroundImgUrl])

    // Handles rover select dropdown and sets new selection into state
    const selectRover = (newRover) => {
        setRover(newRover)
    }
    
    return (
        <BackgroundDiv imgObj={backgroundImgUrl}>
            <LandingContainer imgObj={backgroundImgUrl}>
                <FooterContainer>
                    <TitleDiv>
                        <SelectRover value={rover} selectRover={selectRover}/>
                        <FooterContentDiv>
                        <Title>Postcards from Mars</Title>
                        </FooterContentDiv>
                    </TitleDiv>
                </FooterContainer>
            </LandingContainer>
        </BackgroundDiv>
    )
}

export default LandingPage