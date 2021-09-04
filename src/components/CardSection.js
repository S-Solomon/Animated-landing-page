import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import card from '../img/creditcard.svg'

const CardSection = () => {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One Card for all your payments
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum excepturi fugit? Ex doloremque tempore quasi harum numquam veritatis quaerat hic, ratione animi et facilis?
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="card" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

export default CardSection


const CardSectionStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .card-left {
            p {
                padding: 1rem 0;
            }
        }
        .card-right {
            display: flex;
            justify-content: flex-end;
            img {
                @media(max-width: 1440px) {
                    width: 85%;
                }
            }
        }
    }
`;