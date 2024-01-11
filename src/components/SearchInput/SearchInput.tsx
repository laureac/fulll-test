import React, { useState, useEffect, useContext } from "react";
import "./SearchInput.css";
import { debounce } from "../../utils/debounce";
import { UsersContext } from "../../context/UsersContext";

const SearchInput: React.FC = () => {
  //state setters
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { setUsers, selectedCards } = context;

  // Fetch users from GitHub API
  const handleSearch = async (query: string) => {
    if (!query) {
      setUsers([]);
      return;
    }
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data.items || []);
        setError(undefined);
      } else if (response.status === 403) {
        setError(
          "GitHub API rate limit exceeded. Please wait a while and try again."
        );
        setUsers([]);
      } else {
        setError("An error occurred while fetching data.");
        setUsers([]);
      }
    } catch (error: any) {
      console.error(error.message);
      setError("An error occurred while fetching data.");
      setUsers([]);
    }
  };

  // Debounce the API call to avoid unnecessary requests
  useEffect(() => {
    const debouncedSearch = debounce(handleSearch, 500);
    if (input) {
      debouncedSearch(input);
    } else {
      setUsers([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <>
      <input
        type="text"
        placeholder="Search users"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        disabled={selectedCards.length > 0}
      />
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default SearchInput;
