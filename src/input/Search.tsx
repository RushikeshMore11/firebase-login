import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the update of the debounced query state
  const debouncedHandleSearch = useDebounce(
    () => setDebouncedQuery(query),
    300
  );

  // Effect to listen to query changes and debounce them
  useEffect(() => {
    debouncedHandleSearch();
  }, [query, debouncedHandleSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(debouncedQuery);
  };
  useDebounce(handleSearch);
  return (
    <input
      value={query}
      onChange={(e) => handleSearch(e)}
      placeholder="Search here"
    />
  );
};

export default Search;


