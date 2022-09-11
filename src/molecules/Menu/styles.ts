import styled from "styled-components";

interface Props {
    isActive?: boolean;
}

export const Menu = styled.ul`
    list-style: none;
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
