import styled from "styled-components";

interface Props {
    fontSize: number;
    backgroundColor: string;
    color: string;
  }

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 0 20px 0;
    @media (min-width: 1024px) {
        margin: 60px 0 0 0;
  }
`;

export const Button = styled.button<Props>`
    color: ${props => `${props.color}`};
    font-size: 18px;
    height: 72px;
    width: fit-content;
    min-width: 155px;
    padding: 0 27px 0 27px;
    background-color: ${props => `${props.backgroundColor}`};
    border-radius: 20px;
    font-family: 'Circular Std Bold';
`;

export const Image = styled.img`
    margin: 0 0 0 16px;
`;
