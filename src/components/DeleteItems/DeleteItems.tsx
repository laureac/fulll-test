import React, { useContext } from "react";
import Icon from "../Icon/Icon";
import { UsersContext } from "../../context/UsersContext";
import { GitHubUser } from "../../types/githubProfiles";

const DeleteItems: React.FC = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { users, setUsers, selectedCards, setSelectedCards } = context;

  const deleteSelectedUsers = () => {
    const updatedUsers: GitHubUser[] = users.filter(
      (user) => !selectedCards.includes(user.id)
    );

    setUsers(updatedUsers);
    setSelectedCards([]);
  };
  return (
    <button onClick={deleteSelectedUsers} className="actions-btn">
      <Icon iconName="trash" />
    </button>
  );
};

export default DeleteItems;
