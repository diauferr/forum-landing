import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    min-height: 200px;

    @media (min-width: 768px) {
        align-items: center;
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`;

export const Icon = styled.img`
    width: 60px;
    height: 60px;
`;

export const Title = styled.h3`
    color: white;
    font-size: 22px;
    margin: 15px 0 15px 0;
    font-family: 'Circular Std Bold';

    @media (min-width: 768px) {
        text-align: start;
    }
`;

export const Desc = styled.p`
    color: white;
    opacity: 0.7;
    font-family: 'Circular Std Book';
    font-size: 20px;
    max-width: 350px;
    text-align: center;
    margin: 15px 0 15px 0;

    @media (min-width: 1024px) {
        align-items: flex-start;
        text-align: start;
    }
`;