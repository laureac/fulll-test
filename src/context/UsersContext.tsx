import React, { createContext, useState } from "react";
import { GitHubUser } from "../types/githubProfiles";

type UsersContextType = {
  users: GitHubUser[];
  setUsers: (users: GitHubUser[]) => void;
  selectedCards: number[];
  setSelectedCards: (selectedCards: number[]) => void;
  toggleCardSelection: (cardId: number) => void;
};

const defaultToggleCardSelection = (cardId: number) => {
  console.warn("toggleCardSelection called without a provider", cardId);
};

export const UsersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => {},
  selectedCards: [],
  setSelectedCards: () => {},
  toggleCardSelection: defaultToggleCardSelection,
});

type UsersProviderProps = {
  children: React.ReactNode;
};

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  // state setters and initial values
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [users, setUsers] = useState<GitHubUser[]>([]);

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards((prev) => {
      // Check if the cardId is already in the array. If exist remove it, otherwise add it.
      if (prev.includes(cardId)) {
        return prev.filter((id) => id !== cardId);
      } else {
        return [...prev, cardId];
      }
    });
  };

  return (
    <UsersContext.Provider
      value={{
        selectedCards,
        setSelectedCards,
        toggleCardSelection,
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
