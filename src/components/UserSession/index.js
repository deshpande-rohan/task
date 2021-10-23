import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  SessionWrapper,
  SessionContainer,
  SessionBooking,
  Heading,
  SessionButton,
  Button,
} from "./UserSessionElements";

const UserSession = ({ createdAt, updatedAt }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    Aos.init({
      offset: 90,
      duration: 600,
      easing: "ease",
      delay: 800,
      once: true,
    });
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <SessionWrapper data-aos="fade-left">
      <SessionContainer>
        <SessionBooking>
          <Heading>Book Your Session</Heading>
        </SessionBooking>
        <Calendar
          prev2Label={null}
          next2Label={null}
          className="calendar"
          onChange={onChange}
          value={date}
          showNeighboringMonth={false}
        />
        <SessionButton>
          <Button>Request Demo</Button>
        </SessionButton>
      </SessionContainer>
    </SessionWrapper>
  );
};

export default UserSession;
