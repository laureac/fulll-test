import React, { useState, useEffect, useContext } from "react";
import "./SearchInput.css";
import { debounce } from "../../utils/debounce";
import { UsersContext } from "../../context/UsersContext";

const SearchInput: React.FC = () => {
  const [input, setInput] = useState("");

  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("must be used within a SelectedCardsProvider");
  }

  const { setUsers, selectedCards } = context;

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
    <input
      type="text"
      placeholder="Search users"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="search-input"
      disabled={selectedCards.length > 0}
    />
  );
};

export default SearchInput;
