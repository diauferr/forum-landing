import styled from "styled-components";

interface Props {
    color?: string;
}

export const Title = styled.h1<Props>`
    font-size: 40px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 620px;
    font-size: 32px;
    margin: 0 0 33px 0;

    @media (min-width: 1024px) {
        font-size: 65px;
    }
`;
