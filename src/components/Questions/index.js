import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  QuestionWrapper,
  QuestionContainer,
  Ques,
  Desc,
  Button,
} from "./QuestionElements";

const Question = () => {
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
    <QuestionWrapper data-aos="fade-up">
      <QuestionContainer>
        <Ques>What is Data Engineering ?</Ques>
        <Desc>Learn the basic of Data Engineering, Big Data and Hadoop</Desc>
      </QuestionContainer>
      <Button>Book</Button>
    </QuestionWrapper>
  );
};

export default Question;
