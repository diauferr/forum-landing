import styled from "styled-components";

interface Props {
    color?: string;
}

export const SectionTitle = styled.h2<Props>`
    font-size: 24px;
    color: ${props => props.color};
    font-family: 'Circular Std Bold';
    max-width: 570px;
    margin-bottom: 33px;

    @media (min-width: 768px) {
        font-size: 34px;
    }

    @media (min-width: 1024px) {
        font-size: 40px;
    }
`;
