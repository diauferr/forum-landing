import styled from "styled-components";

interface Props {
    backgroundColor: string;
    color: string;
  }

export const Button = styled.button<Props>`
    color: ${props => `${props.color}`};
    font-size: 18px;
    height: 58px;
    width: fit-content;
    min-width: 155px;
    padding-right: 57px;
    padding-left: 57px;
    margin: 9px 30px 9px 30px;
    background-color: ${props => `${props.backgroundColor}`};
    border-radius: 18px;
    font-family: 'Circular Std Bold';
    cursor: pointer;
`;
