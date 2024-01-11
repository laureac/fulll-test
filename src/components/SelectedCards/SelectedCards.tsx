import React, { useContext } from "react";
import "./SelectedCards.css";
import { UsersContext } from "../../context/UsersContext";
import { GitHubUser } from "../../types/githubProfiles";

const SelectedCards: React.FC = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { selectedCards, setSelectedCards, users } = context;

  const selectAndDiselectAllUser = () => {
    if (selectedCards.length) {
      setSelectedCards([]);
    } else {
      //map through all users and get array of all ids. Then set selectedCards to that array
      const allIds = users.map((user: GitHubUser) => user.id);
      setSelectedCards(allIds);
    }
  };

  return (
    <div className="checkbox-selected-cards">
      <input
        type="checkbox"
        id="selectUser"
        name="selectUser"
        onChange={() => selectAndDiselectAllUser()}
        checked={selectedCards.length > 0}
      />
      <p>{`${selectedCards.length ?? 0} elements selected`}</p>
    </div>
  );
};

export default SelectedCards;
