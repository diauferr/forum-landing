import styled from "styled-components";

export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;

    @media (min-width: 768px) {
        align-items: flex-start;
    }

    @media (min-width: 1024px) {
    }
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
`;

export const Name = styled.h1`
    font-size: 18px;
    font-family: 'Circular Std Bold';
    text-align: center;
    color: #003A70;
    padding: 20px 0 5px;

    @media (min-width: 768px) {
        font-size: 16px;
        text-align: left;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const Desc = styled.p`
    max-width: 200px;
    font-size: 14px;
    font-family: 'Poppins Regular';
    text-align: center;
    color: #6B6B6B;

    @media (min-width: 768px) {
        text-align: left;
    }
`;
