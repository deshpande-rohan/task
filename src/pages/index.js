import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import User from "../apis/User";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await User.get("/api/users").catch((err) =>
      console.log(err)
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      <Table users={users} />
    </main>
  );
};

export default Home;
