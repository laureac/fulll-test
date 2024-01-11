import React, { useContext } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";
import { UsersContext } from "../../context/UsersContext";

const UserList: React.FC = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { users } = context;

  return (
    <div className="list-container">
      <ul className="list-user">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
