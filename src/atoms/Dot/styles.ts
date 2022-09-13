import styled from "styled-components";

import Image from "/assets/Dot.svg";

interface Props {
    color?: string;
}

export const Dot = styled.div<Psrops>`
    width: 64px;
    height: 64px;
    margin: 15px 0 15px 0;
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: content-box;
    font-size: 24px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }
`;
