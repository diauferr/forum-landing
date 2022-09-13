import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.54);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.3px);
    -webkit-backdrop-filter: blur(9.3px);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        border-radius: 16px;
    }
`;

export const Message = styled.p`
    font-size: 14px;
    color: #003A70;
    line-height: 150%;
    font-family: 'Circular Std Book';
    margin: 25px 15px 45px 25px;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 17px;
    }
`;

export const Author = styled.h1`
    font-size: 16px;
    color: #003A70;
    line-height: 150%;
    font-family: 'Circular Std Bold';

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

export const Description = styled.h2`
    font-size: 14px;
    color: #6B6B6B;
    line-height: 32px;
    font-family: 'Poppins Regular';
    padding: 0 0 15px 0;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;