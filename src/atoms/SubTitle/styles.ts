import styled from "styled-components";

interface Props {
    color?: string;
}

export const SubTitle = styled.h2<Props>`
    font-size: 20px;
    color: ${props => props.color};
    font-family: 'Circular Std Book';
    max-width: 470px;
    opacity: 0.7;
    margin-bottom: 33px;
`;
