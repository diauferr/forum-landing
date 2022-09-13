import styled from "styled-components";

import Image from '/assets/Sign.svg'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 40px;
    background-image: url(${Image});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: content-box;

    @media (min-width: 768px) {
        flex-direction: column;
    }

    @media (min-width: 1024px) {
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media (min-width: 1024px) {
    }
`;