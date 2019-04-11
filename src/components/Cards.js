import React from 'react';
import styled from 'styled-components';



const Base = styled.div`
    background: white;
    width: 100%;
    height: 30rem;
`;

const BorderUp = styled(Base)`
    border-top: solid #333 10px;
    border-left: solid #333 10px;
`;


const BorderDown = styled(Base)`
    border-bottom: solid #333 10px;
    border-right: solid #333 10px;
`;


export class Card extends React.Component {

    render() {
        return (
            <>
                { this.props.up &&
                    <BorderUp>
                        {this.props.children}
                    </BorderUp>
                }

                { this.props.down &&
                    <BorderDown>
                        {this.props.children}
                    </BorderDown>
                }
            </>
        );
    }
}
