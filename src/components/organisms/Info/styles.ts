import styled from "styled-components";

import Image from '/assets/Circle.svg'

export const Main = styled.div`
    padding: 50px;
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: content-box;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    place-items: center;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        min-height: 600px;
    }
`;