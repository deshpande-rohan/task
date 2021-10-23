import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Question from "../Questions";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  BioContainer,
  PrimaryInfo,
  Actions,
  UserInfo,
  Text,
  SecondaryInfo,
  UserExperience,
  Languages,
  Description,
} from "./UserBioElements";

const UserBio = ({ name, shortBio, experience, description }) => {
  useEffect(() => {
    Aos.init({
      offset: 90,
      duration: 600,
      easing: "ease",
      delay: 600,
      once: true,
      disable: "mobile",
    });
  }, []);

  if (experience) {
    experience = parseInt(experience.toString().charAt(0));
  }

  return (
    <BioContainer>
      <PrimaryInfo data-aos="fade-up">
        <Actions>
          <BsBookmark />
          <BsThreeDotsVertical />
        </Actions>
        <UserInfo>
          <Text size={"26px"} color="#171717" bold={true}>
            {name}
            <AiFillCheckCircle />
          </Text>
          <Text size={"21px"} color="#767676">
            {shortBio}
          </Text>
        </UserInfo>
      </PrimaryInfo>
      <SecondaryInfo data-aos="fade-up">
        <UserExperience>
          <Text bold={true}>Experience</Text>
          <Text size="20px" color="#6a6a6a" bold={true}>
            {experience > 1 ? experience + " Years" : experience + " Year"}
          </Text>
        </UserExperience>
        <Languages>
          <Text bold={true}>Languages</Text>
          <Text size="20px" color="#6a6a6a" bold={true}>
            English, Hindi, Tamil
          </Text>
        </Languages>
      </SecondaryInfo>
      <Description data-aos="fade-up">
        <Text size="20px" color="#6a6a6a">
          {description}
        </Text>
      </Description>
      <Question />
      <Question />
    </BioContainer>
  );
};

export default UserBio;
