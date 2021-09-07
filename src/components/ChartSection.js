import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ChartStats from './ChartStats'
import chart from '../img/chart.svg'
import AnimatedButton from './AnimatedButton'
import { Slide, Bounce } from 'react-reveal'

const ChartSection = () => {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'250'} />
                                <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>

                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time 
                        </h2>
                        <Slide right>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error, 
                            voluptate alias adipisci ducimus nostrum maiores. Ad?
                        </p>
                        </Slide>
                        <Bounce right>
                        <AnimatedButton name={'Learn More'}/>
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

export default ChartSection


const ChartStyled = styled.section`
    .chart-container {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left {
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats {
                img {
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 1.3rem;
                }
            }
        }
        .chart-right {
            padding-left: 2rem;
            .secondary-heading {
                max-width: 600px;
            }
            p {
                padding: 1.3rem 0;
                max-width: 500px;
            }
        }
    }
`;