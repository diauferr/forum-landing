import styled from "styled-components";

interface Props {
    color?: string;
}

export const Topic = styled.h3<Props>`
    font-size: 22px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 570px;
    margin-bottom: 33px;
`;
