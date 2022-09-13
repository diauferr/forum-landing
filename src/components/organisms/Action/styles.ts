import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D7282F;
    margin: 0 0 50px 0;

    @media (min-width: 768px) {
        border-radius: 20px;
        align-items: center;
        flex-direction: row;
        margin: 0 30px 50px 30px;
    }

    @media (min-width: 1024px) {
        margin: 0 30px 50px 30px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0 0;

    @media (min-width: 768px) {
        align-items: flex-start;
        padding: 30px;
        margin: 0;
    }

    @media (min-width: 1024px) {
        margin: 20px 0 20px 40px;
    }
`;

export const Desc = styled.p`
    color: #fff;
    font-family: 'Circular Std Book';
    text-align: center;
    max-width: 420px;
    margin: 0 0 30px 0;

    @media (min-width: 768px) {
        text-align: left;
        margin: 0 0 30px 0;
    }

    @media (min-width: 1024px) {
        text-align: left;
        margin: 0;
    }
`;

export const Image = styled.img`
    width: 100%;

    @media (min-width: 768px) {
        max-width: 300px;
    }

    @media (min-width: 1024px) {
        max-width: 500px;
    }
`;
