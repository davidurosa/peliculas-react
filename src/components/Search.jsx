import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import {  useSearchParams } from "react-router-dom";

const Search = () => {


  


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [query,setQuery] = useSearchParams();
const search = query.get("search");
 


  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          value={search||""}
          onChange={(e) => {
            
            const value = e.target.value;

            setQuery({search:value})

          }}
        />
        <button type="submit" className={style.searchButton}>
          <FaSearch fontSize={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
