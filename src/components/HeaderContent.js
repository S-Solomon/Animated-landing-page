import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="text-container">
                    <h1>Smart Banking for Freelancers</h1>
                    <p className="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Eligendi, libero tenetur doloremque odit, excepturi sit cupiditate magni quam corporis 
                        minima fuga exercitationem possimus commodi fugit dolore dicta natus doloribus eum.
                    </p>
                    <SecondaryButton name={'Register Now'}/>
                </div>
            </div>
            <div className="right-content">
                <img src={phone} alt="phone"  className="phone"/>
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1"/>
                <img src={message2} alt="" className="message2"/>
            </div>
        </HeaderContentStyled>
    )
}

export default HeaderContent


const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding-top: 3rem;
    .left-content {
        display: flex;
        align-items: center;
        padding-right: 3rem;
        h1 {
            font-size: 4rem;
            font-weight: 600;
        }
        .white {
            padding: 1.4rem 0;
        }
    }
    .right-content {
        /* margin: 0 auto; */
        position: relative;
        display: flex;
        justify-content: center;
        .phone {
            width: 80%;
        }
        .ring1 {
            position: absolute;
            bottom: 0;
            right: 0;
            left: auto;
            bottom: 10%;
        }
        .message1 {
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
        }
        .message2 {
            position: absolute;
            bottom: 15%;
            left: 0;
        }
    }
`;