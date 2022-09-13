import styled from "styled-components";

import { Topic } from "../../atoms/Topic";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    min-height: 450px;
`;

export const Icon = styled.img`
    width: 110px;
    height: 110px;
`;

export const Name = styled(Topic)`
    margin: 15px 0 15px 0;
`;

export const Dot = styled.img`
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
    line-height: 150%;
    margin: 15px 0 15px 0;
`;
