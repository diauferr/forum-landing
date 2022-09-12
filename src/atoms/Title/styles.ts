import styled from "styled-components";

interface Props {
    fontSize?: number;
    color?: string;
}

export const Title = styled.h1<Props>`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 620px;
`;
