import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ProfileContainer,
  UserAvatar,
  Avatar,
  SocialLinks,
  UserSkills,
  Heading,
  Skills,
  Skill,
  PastCompanies,
  SmallImage,
} from "./UserProfileElements";

const UserProfile = ({ image, skills, companies }) => {
  useEffect(() => {
    Aos.init({
      offset: 90,
      duration: 600,
      easing: "ease",
      delay: 800,
      once: true,
    });
  }, []);
  return (
    <ProfileContainer data-aos="fade-right">
      <UserAvatar>
        <Avatar src={image} alt="User Image" />
        <SocialLinks>
          <BsLinkedin className="socialIcon lin" />
          <AiFillTwitterCircle className="socialIcon tw" />
          <BsGithub className="socialIcon gh" />
        </SocialLinks>
      </UserAvatar>
      <UserSkills>
        <Heading>Core Skills</Heading>
        <Skills>
          <Skill>{skills}</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
        </Skills>
      </UserSkills>
      <PastCompanies>
        <Heading>Past Companies</Heading>
        <SmallImage src={companies} />
      </PastCompanies>
    </ProfileContainer>
  );
};

export default UserProfile;
