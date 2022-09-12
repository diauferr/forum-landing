import styled from "styled-components";

interface Props {
    color?: string;
}

export const Title = styled.h1<Props>`
    font-size: 40px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 620px;
`;
