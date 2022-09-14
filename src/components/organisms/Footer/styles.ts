import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    margin: 40px 0 20px 0;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 200px;
    border-bottom: 1px solid #D6D6D6;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 40px 0;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 0 0 0;
    align-items: center;
    justify-content: space-around;
`;

export const Image = styled.img`
`;

export const Title = styled.h1`
    font-size: 18px;
    font-family: 'Circular Std Bold';
`;

export const Copyright = styled.h1`
    font-size: 14px;
    color: #9398A8;
    font-family: 'Circular Std Bold';
    margin: 10px 0 10px 0;
    line-height: 150%;
`;