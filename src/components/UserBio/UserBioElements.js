import styled from "styled-components";

export const BioContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(60px, 80px)) max-content;
  grid-auto-columns: 1fr;
  grid-auto-rows: 150px;
  grid-gap: 20px;

  @media only screen and (max-width: 1024px) {
    grid-auto-rows: 200px;
  }

  @media only screen and (max-width: 768px) {
    grid-auto-rows: 180px;
    border-bottom: 2px solid #f3f3f3;
  }
`;

export const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 768px) {
    position: static;
  }
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  color: #afafaf;

  & svg {
    cursor: pointer;
    transition: 0.2s ease;
  }

  & svg:hover {
    fill: #a286fc;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (max-width: 1024px) {
    gap: 10px;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Text = styled.p`
  display: block;
  font-size: ${({ size }) => (size ? size : "17px")};
  color: ${({ color }) => (color ? color : "#a2a2a2")};
  font-weight: ${({ bold }) => (bold ? "700" : "500")};
  letter-spacing: 0.9px;
  word-wrap: break-word;
  padding: 4px;

  & svg {
    font-size: 20px;
    margin-left: 12px;
    fill: #9381fc;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const SecondaryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const UserExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (max-width: 1024px) {
    gap: 6px;
  }
`;

export const Languages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (max-width: 1024px) {
    gap: 6px;
  }

  @media only screen and (max-width: 768px) {
    gap: 8px;
  }
`;

export const Description = styled.div`
  display: block;
  margin-bottom: 18px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
