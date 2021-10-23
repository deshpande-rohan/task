import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr repeat(2, 1fr);
  grid-row-gap: 22px;
  padding: 12px;
  justify-items: center;
  align-items: center;
  height: 80vh;
  max-height: 100vh;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
    grid-row-gap: 24px;
  }

  @media only screen and (max-width: 768px) {
    height: auto;
    border-bottom: 2px solid #f3f3f3;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    gap: 14px;
  }

  @media only screen and (max-width: 768px) {
    gap: 18px;
  }
`;

export const Avatar = styled.img`
  disply: block;
  width: 180px;
  height: 180px;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 6px;

  @media only screen and (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;

  & .socialIcon {
    font-size: 22px;
    cursor: pointer;
  }

  & .socialIcon.lin {
    color: #0e76a8;
  }

  & .socialIcon.tw {
    color: #1da1f2;
  }

  & .socialIcon.gh {
    color: #333;
  }

  @media only screen and (max-width: 1024px) {
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    gap: 28px;

    & .socialIcon {
      font-size: 24px;
    }
  }
`;

export const UserSkills = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    gap: 14px;
  }

  @media only screen and (max-width: 768px) {
    gap: 18px;
    align-items: center;
  }
`;

export const Heading = styled.h3`
  font-size: 17px;
  color: #101010;
  letter-spacing: 0.9px;
  color: #5d5c5c;

  @media only screen and (max-width: 1024px) {
    letter-spacing: normal;
  }
`;

export const Skills = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media only screen and (max-width: 1024px) {
    gap: 10px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Skill = styled.p`
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  background-color: #e5e5e5;
  color: #a7a7a7;
  border-radius: 100px;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    padding: 6px 10px;
    font-size: 15px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PastCompanies = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    gap: 18px;
    align-items: center;
  }
`;

export const SmallImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
