import styled from "styled-components";

import Image from '/assets/Clouds.svg'

export const Main = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D7282F;
    background-image: url(${Image});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
`;

export const Desc = styled.p`
    color: #fff;
    font-family: 'Circular Std Bold';
    margin: 0 0 30px 0;
    max-width: 360px;
`;