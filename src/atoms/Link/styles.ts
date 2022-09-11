import styled from "styled-components";

interface Props {
    isActive?: boolean;
}

export const Link = styled.a<Props>`
    font-family: 'Circular Std Medium';
    font-size: 18px;
    margin: 0 20px 0 20px;
    color: ${props => props.isActive === true ? '#D7282F' : '#AE9999'} ;
`;
