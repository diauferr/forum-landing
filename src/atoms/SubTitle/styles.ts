import styled from "styled-components";

interface Props {
    fontSize?: number;
    color?: string;
}

export const SubTitle = styled.h3<Props>`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.color === 'blue' ? '#1D2538': '' || props.color === 'black' ? '#000000': ''};
    font-family: 'Circular Std Bold';
    max-width: 570px;
    opacity: 0.7;
`;