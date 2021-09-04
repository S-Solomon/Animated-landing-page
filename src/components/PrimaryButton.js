import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({ name }) => {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

export default PrimaryButton


const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 2rem;
    border-radius: 20px;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2);
    }
`;