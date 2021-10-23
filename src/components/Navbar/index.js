import React from "react";
import { BiUserCircle } from "react-icons/bi";

import {
  NavWrapper,
  Nav,
  NavContainer,
  BrandName,
  UserIcon,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavWrapper>
      <Nav>
        <NavContainer>
          <BrandName>
            hyper<span>learn</span>
          </BrandName>
          <UserIcon>
            <BiUserCircle />
          </UserIcon>
        </NavContainer>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
