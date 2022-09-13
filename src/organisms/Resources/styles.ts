import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D7282F;
    background-origin: content-box;
    padding: 50px 0 0 0;
    margin: 0 0 50px 0;
    text-align: justify;

    @media (min-width: 1024px) {
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px; 
    place-items: top;
    margin: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        min-height: 500px;
    }
`;

export const Picture = styled.img`
    max-width: 100%;
`;
