import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 3% 10% 3%;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 10% 0 10% 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 33px;
  }

  h3 {
    margin-bottom: 33px;
  }

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