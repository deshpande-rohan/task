import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../apis/User";
import Dashboard from "../components/Dashboard";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await User.get("/api/users").catch((err) =>
        console.log(err)
      );
      setCurrentUser(data.find((record) => record.id === id));
    };

    fetchUsers();
  }, [id]);

  return <Dashboard user={currentUser} />;
};

export default UserProfile;
