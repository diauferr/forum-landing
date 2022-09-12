import styled from "styled-components";

import { Title } from "../../atoms/Title";

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    place-items: center;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        min-height: 600px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    min-height: 400px
`;

export const Icon = styled.img`
    width: 110px;
    height: 110px;
`;

export const Name = styled(Title)`
    font-size: 32px;
    margin: 15px 0 15px 0;
`;

export const Topic = styled.img`
    width: 64px;
    height: 64px;
    margin: 15px 0 15px 0;
`;

export const Desc = styled.p`
    color: #273150;
    opacity: 0.7;
    font-family: 'Circular Std Book';
    font-size: 20px;
    max-width: 350px;
    text-align: center;
    margin: 15px 0 15px 0;
`;