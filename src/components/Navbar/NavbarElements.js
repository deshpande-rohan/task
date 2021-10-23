import styled from "styled-components";

export const NavWrapper = styled.div`
  display: block;
  width: 100%;
  height: 60px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 35px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
`;

export const BrandName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  letter-spacing: 0.92px;
  font-weight: 700;
  color: #fc9656;
  position: relative;
  cursor: pointer;

  & span {
    color: #a78dfc;
  }

  &::before {
    content: "<";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 5%);
  }

  &::after {
    content: "/>";
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, 5%);
  }
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
