import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import logo from '../img/logo.svg'


const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">features</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
            </ul>
            <PrimaryButton  name={'Sign Up'}/>
        </NavigationStyled>
    )
}

export default Navigation

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
