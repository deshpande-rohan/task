import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineTextFormat } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { CgLoadbarSound } from "react-icons/cg";

import { TableWrapper, TableContainer } from "./TableElements";

const Table = ({ users }) => {
  const fixExperience = (exp) => parseInt(exp.toString().charAt(0));

  return (
    <TableWrapper>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>
                <MdOutlineTextFormat />
                Name
              </th>
              <th>
                <BiHash />
                Experience
              </th>
              <th>
                <CgLoadbarSound />
                See More
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <span>{user.name}</span>
                  </td>
                  <td>{fixExperience(user.experience)}</td>
                  <td>
                    <Link to={`/user/${user.id}`}>View Profile</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </TableWrapper>
  );
};

export default Table;
