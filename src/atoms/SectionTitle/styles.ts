import styled from "styled-components";

interface Props {
    color?: string;
}

export const SectionTitle = styled.h2<Props>`
    font-size: 40px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 570px;
    margin-bottom: 33px;
`;
