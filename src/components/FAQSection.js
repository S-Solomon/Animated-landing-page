import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import lines from '../img/lines.svg'
import questionsData from '../data/questionsData'
import Questions from './Questions'

const FAQSection = () => {
    return (
        <FAQStyled>
            <InnerLayout>
                <h3 className="small-heading">
                    Frequently <span>asked questions</span>
                </h3>
                <p className="c-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>
                <div className="questions-container">
                    {
                        questionsData.map((question) => {
                            return <Questions key={question.id} {...question}/>
                        })
                    }
                </div>
            </InnerLayout>
        </FAQStyled>
    )
}

export default FAQSection


const FAQStyled = styled.section`
    .c-para{
        max-width: 60%;
        margin: 0 auto;
    }
    .questions-contaioner{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`;