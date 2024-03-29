import React, { useContext } from "react";
import { GitHubUser } from "../../types/githubProfiles";
import "./UserCard.css";
import { truncateString } from "../../utils/truncate";
import { UsersContext } from "../../context/UsersContext";

type UserCardProps = {
  user: GitHubUser;
  editMode: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, editMode }) => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { toggleCardSelection, selectedCards } = context;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__checkbox">
          {editMode && (
            <input
              type="checkbox"
              id={`selectUser-${user.id}`}
              name="selectUser"
              onChange={() => toggleCardSelection(user.id)}
              checked={selectedCards.includes(user.id)}
            />
          )}
        </div>
        <div className="card__img-wrapper">
          <img
            src={user.avatar_url}
            alt={`Profile of ${user.login}`}
            className="card__avatar"
          />
        </div>
      </div>
      <div className="card__body">
        <p className="card__id">{user.id}</p>
        <p className="card__login">{truncateString(user.login, 10)}</p>
      </div>
      <div className="card__footer">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card__link btn"
        >
          View profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
