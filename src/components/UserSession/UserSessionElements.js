import styled from "styled-components";

export const SessionWrapper = styled.div`
  display: flex;
  border: 2px solid #f2f2f2;
  border-radius: 8px;
  padding: 14px 20px;
  height: 75%;
  max-height: 85%;

  @media only screen and (max-width: 1024px) {
    padding: 12px 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 20px;
    margin-bottom: 20px;
    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 85%;
    padding: 12px;
  }
`;

export const SessionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 1024px) {
    gap: 16px;
  }

  @media only screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const SessionBooking = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #f2f2f2;

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    letter-spacing: 0.5px;
  }
`;

export const SessionButton = styled.div`
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  text-align: center;
  outline: none;
  border: none;
  background: #9281fc;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    color: #9281fc;
    background: #e3e3e3;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
