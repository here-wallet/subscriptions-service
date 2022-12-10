import { FC } from "react";
import PhoneInputLibrary, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";

export const PhoneInput: FC<PhoneInputProps & { className?: string }> = ({
  className,
  ...props
}) => (
  <WrapPhoneInput className={className}>
    <PhoneInputLibrary {...props} />
  </WrapPhoneInput>
);

export const WrapPhoneInput = styled.div`
  input.form-control {
    width: 100%;
    background: #ebdedc;
    box-sizing: border-box;
    height: 56px;
    outline: none;

    border: 1px solid #2c3034;
    border-radius: 16px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #2c3034;

    padding: 0 16px;
    padding-left: 48px;

    border: 1px solid #2c3034;
    box-shadow: 4px 4px 0px #2c3034;
    border-radius: 16px;
    transition: 0.2s box-shadow, 0.2s transform;
  }

  ul.country-list {
    border-radius: 17px;
    background: #ebdedc;
    border: 1px solid #2c3034;
    padding: 0;

    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 720px) {
      width: calc(100vw - 48px);
    }
  }

  div.selected-flag {
    background-color: transparent !important;
  }

  div.flag {
    image-rendering: pixelated;
  }

  div.flag-dropdown {
    padding-left: 8px;
    background-color: transparent;
    border: none;
  }

  div.flag-dropdown.open {
    background: transparent;
    background-color: transparent;
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    background: transparent;
    background-color: transparent;
  }
`;
