import React, { useContext } from "react";
import Icon from "../Icon/Icon";
import { UsersContext } from "../../context/UsersContext";
import { GitHubUser } from "../../types/githubProfiles";

const DuplicateItems: React.FC = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { users, setUsers, selectedCards } = context;

  const duplicateSelectedUsers = () => {
    const usersToDuplicate = users.filter((user) =>
      selectedCards.includes(user.id)
    );
    const duplicateUsers: GitHubUser[] = [...usersToDuplicate];
    setUsers([...users, ...duplicateUsers]);
  };

  return (
    <button onClick={duplicateSelectedUsers} className="actions-btn">
      <Icon iconName="copy" />
    </button>
  );
};

export default DuplicateItems;
