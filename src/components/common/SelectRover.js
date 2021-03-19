import React from 'react'
import { FooterContentDiv } from './StyledComponents'

// Generates the select rover dropdown
function SelectRover(props) {
    const {value, selectRover} = props

    // Handles form input change event and passes the value to parent component
    const roverInput = (event) => {
        selectRover(event.target.value)
    }

    return (
        <>
        <form>
            <FooterContentDiv>
            <label>Select a Rover
                <select
                    onChange={roverInput}
                    value={value.rover}
                    name='rover'
                >
                    <option value=''>-- Select a Rover --</option>
                    <option value='curiosity'>Curiosity</option>
                    <option value='opportunity'>Opportunity</option>
                    <option value='perseverance'>Perseverance</option>
                    <option value='spirit'>Spirit</option>
                </select>
            </label>
            </FooterContentDiv>
        </form>
        </>
    )
}

export default SelectRover