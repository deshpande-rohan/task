import styled from "styled-components";

export const SessionWrapper = styled.div`
  display: flex;
  border: 2px solid #f2f2f2;
  border-radius: 8px;
  padding: 15px 20px;
  height: 70vh;
  max-height: 70vh;

  @media only screen and (max-width: 1024px) {
    padding: 12px 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 20px;
    margin-bottom: 20px;
  }
`;

export const SessionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

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

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
