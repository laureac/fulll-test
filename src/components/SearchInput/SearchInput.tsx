import React, { useState, useEffect } from "react";
import "./SearchInput.css";
import { debounce } from "../../utils/debounce";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce(onSearch, 500);
    if (input) {
      debouncedSearch(input);
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
    />
  );
};

export default SearchInput;
