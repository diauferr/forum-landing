import styled from "styled-components";

interface Props {
    color?: string;
}

export const Topic = styled.h3<Props>`
    font-size: 24px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 570px;

    @media (min-width: 768px) {
        font-size: 26px;
    }

    @media (min-width: 1024px) {
        font-size: 32spx;
    }
`;
