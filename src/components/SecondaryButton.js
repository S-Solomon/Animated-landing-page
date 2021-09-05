import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

const SecondaryButton = ({ name }) => {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="arrow" />
        </SecondaryButtonStyled>
    )
}

export default SecondaryButton


const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    border-radius: 20px;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        padding-left: .9rem;
    }
`;