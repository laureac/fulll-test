import React, { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import UserList from "./components/UserList/UserList";
import { GitHubUser } from "./types/githubProfiles";
import "./App.css";
import Header from "./components/Header/Header";

export const App: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);

  const handleSearch = async (query: string) => {
    if (!query) {
      setUsers([]);
      return;
    }
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header title="GitHub Search" />
      <div className="search-wrapper">
        <SearchInput onSearch={handleSearch} />
      </div>
      <UserList users={users} />
    </div>
  );
};

export default App;
