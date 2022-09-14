import styled from "styled-components";

export const Main = styled.div`
    width: fit-content;
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    font-size: 16px;
    background-color: rgb(255, 255, 255, 0.3);
    padding: 0 0 0 15px;
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s;
    border-radius: 10px 0 0 10px;
    font-family: 'Circular Std Book';
    outline: none;
    ::placeholder {
        color: #fff;
    }
    :focus {
        border: 3px solid #fff;
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    color: #D7282F;
    font-size: 16px;
    font-family: 'Circular Std Book';
    border-radius: 0 10px 10px 0;
    cursor: pointer;
`;