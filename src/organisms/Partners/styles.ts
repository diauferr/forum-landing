import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 50px;

        @media (min-width: 1024px) {
            font-size: 40px;
        }
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
    margin: 0 0 20px 0;
    min-height: 70px;
    place-items: center;

    @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
    }
`;

export const Image = styled.img`
    height: 35px;

    @media (min-width: 768px) {
        height: 45px;
    }

    @media (min-width: 1024px) {
        height: 60px;
    }
`;
