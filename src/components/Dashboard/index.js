import React, { useEffect } from "react";
import UserProfile from "../UserProfile";
import UserBio from "../UserBio";
import UserSession from "../UserSession";

import { DashboardWrapper, DashboardContainer } from "./DashboardElements";

const Dashboard = ({ user }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DashboardWrapper>
      <DashboardContainer>
        <UserProfile
          image={user.avatar}
          skills={user.skills}
          companies={user.pastCompanies}
          id="profile"
        />
        <UserBio
          name={user.name}
          shortBio={user.shortBio}
          experience={user.experience}
          description={user.description}
          id="bio"
        />
        <UserSession id="session" />
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
