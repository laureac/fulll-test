import React from "react";
import UserCard from "../UserCard/UserCard";
import { GitHubUser } from "../../types/githubProfiles";
import "./UserList.css";

type UserListProps = {
  users: GitHubUser[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="list-container">
      <ul className="list">
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
