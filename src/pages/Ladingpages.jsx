import React from "react";
import { useSearchParams } from "react-router-dom";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

const Ladingpages = () => {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search,300);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};

export default Ladingpages;
