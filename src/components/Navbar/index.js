import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

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
            <FaRegUserCircle />
          </UserIcon>
        </NavContainer>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
