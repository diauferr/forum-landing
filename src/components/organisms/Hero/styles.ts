import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 3% 10% 3%;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 10% 20px 5% 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 95%;

  @media (min-width: 768px) {
    width: 70%
  }

  @media (min-width: 1024px) {
    min-height: 490px;
    max-width: 49%;
  }
`;
