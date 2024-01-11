import React, { useContext } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";
import { UsersContext } from "../../context/UsersContext";

type UserListProps = {
  editMode: boolean;
};

const UserList: React.FC<UserListProps> = ({ editMode }) => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { users } = context;

  return (
    <div className="list-container">
      {users.length ? (
        <ul className="list-user">
          {users.map(
            (
              user,
              key // ideally would use id as key, but that will create an error when we duplicate users
            ) => (
              <li key={key}>
                <UserCard user={user} editMode={editMode} />
              </li>
            )
          )}
        </ul>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default UserList;
