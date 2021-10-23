import styled from "styled-components";

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0 30px;
  background: transparent;
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 14px;
  }

  @media only screen and (max-width: 768px) {
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media only screen and (max-width: 1024px) {
    gap: 14px;
  }

  @media only screen and (max-width: 768px) {
    gap: 16px;
    align-items: center;
  }
`;

export const Ques = styled.h3`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.7px;
  color: #262626;

  @media only screen and (max-width: 1024px) {
    font-size: 17px;
    letter-spacing: normal;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Desc = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #878383;
  letter-spacing: 0.7px;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    letter-spacing: normal;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  display: inline-block;
  outline: none;
  border: 2px solid #a286fc;
  border-radius: 4px;
  padding: 10px 26px;
  color: #a286fc;
  background: transparent;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #fff;
    background: #a286fc;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
    padding: 8px 22px;
  }
`;
