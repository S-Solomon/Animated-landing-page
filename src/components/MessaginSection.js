import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'
import bgCircles from '../img/circleBg.svg'

const MessaginSection = () => {
    return (
        <MessageStyled>
            <InnerLayout>
                <div className="message-container">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p className="m-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
                        </p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image1" />
                            <img src={avatar2} alt="" className="image2" />
                            <img src={avatar3} alt="" className="image3" />
                            <img src={avatar4} alt="" className="image4" />
                            <img src={avatar5} alt="" className="image5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={messaging} alt="" />
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyled>
    )
}

export default MessaginSection


const MessageStyled = styled.section`
    .message-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .left-items {
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-container{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items {
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: 0;
            right: 20%;
            z-index: -1;
            @media (max-width: 1440px) {
                right: -10%;
                bottom: 14%;
            }
        }
    }
`;