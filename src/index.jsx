import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import WinInsta from './WinInsta/WinInsta';

function Container() {

    //container style
    const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: royalblue;
    `;
    //container style

    return (
        <Wrapper>
            <WinInsta/>
        </Wrapper>
    );
}

ReactDOM.render(
    <Container />,
    document.querySelector('#root')
);