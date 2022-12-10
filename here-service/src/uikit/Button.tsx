import styled from "styled-components";

export const Button = styled.button`
  border: none;

  background: #2c3034;
  border-radius: 32px;
  height: 80px;
  width: 100%;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;

  text-decoration: none;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;

  &:disabled {
    color: #6b6661;
    background: #cbc6c5;
    cursor: default;
  }

  @media (max-width: 720px) {
    height: 64px;
    border-radius: 24px;
  }
`;

export const LinkButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #fd84e3;
`;

export const StrokeButton = styled(Button)`
  background: transparent;
  border: 2px solid #2c3034;
  color: #2c3034;
`;

export const PinkButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;

  height: 46px;
  background: #fd84e3;
  cursor: pointer;

  border: 1px solid #2c3034;
  box-shadow: 4px 4px 0px #2c3034;
  border-radius: 16px;

  transition: 0.2s box-shadow, 0.2s transform;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2c3034;

  &:hover {
    box-shadow: 0 0 0 #2c3034;
    transform: translate(4px, 4px);
  }
`;
