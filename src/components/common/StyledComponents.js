import styled from 'styled-components'

// Used to set an initial, static background image from the api
let backgroundUrl = 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00025/ids/edr/browse/edl/EAE_0025_0669152786_143ECM_N0030792EDLC00025_0020LUJ01_1200.jpg'

// Holds a static version of the background image to help smooth transitions between images as the component re-renders
export const BackgroundDiv = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    z-index: -100;
    background-image: url(${props => props.imgObj ? props.imgObj : backgroundUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0%;
    padding: 0%;
`

// Holds the primary image and controls transitions between images
export const LandingContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 0%;
    padding: 0%;
    background-image: url(${props => props.imgObj ? props.imgObj : backgroundUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 5s ease-in-out;
    @keyframes ease-in-out {
        0% {
            opacity: 1;
        }
        16% {
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        93% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

// Holds the footer at the bottom of the page
export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
`

// Holds the app title in the footer (lower right corner)
export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: black;
    opacity: 0.75;
    margin-left: 0px;
    padding-bottom: 4em;
    padding-top: 2em;
    padding-left: 3.5em;
    padding-right: 6em;
`
// Used to style the app title (lower right corner)
export const Title = styled.h1`
    color: white;
    font-size: 3em;
    opacity: 4;
    margin-left: 0px;
`

// Hold the rover select dropdown
export const FooterContentDiv = styled.div`
    width: 33%;
    select {
        height: 3em;
        width: 20em;
        background-color: rgba(0,0,0,.75);
        color: white;
        font-size: 1em;
        padding: 0 0.5em;
        border: 1px solid white;
    }
`
