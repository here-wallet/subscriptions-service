import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  font-family: "CabinetGrotesk";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #2c3034;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Amount = styled.h3`
  display: flex;
  align-items: flex-end;

  font-family: "CabinetGrotesk";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 79px;
  color: #2c3034;
  margin: 0;

  span {
    margin-left: 8px;
    line-height: 2em;
    font-size: 0.5em;
  }

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`;
