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
    margin: 0 0 33px 0;

    @media (min-width: 768px) {
        font-size: 22px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;
