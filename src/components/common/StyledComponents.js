import styled from 'styled-components'

let backgroundUrl = 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00025/ids/edr/browse/edl/EAE_0025_0669152786_143ECM_N0030792EDLC00025_0020LUJ01_1200.jpg'

export const LandingContainer = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
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

export const BackgroundDiv = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    z-index: -100;
    background-image: url(${props => props.imgObj ? props.imgObj : backgroundUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
`

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

export const Title = styled.h1`
    color: white;
    font-size: 3em;
    opacity: 4;
    margin-left: 0px;
`