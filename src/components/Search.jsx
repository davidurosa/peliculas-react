import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const Search = () => {

  const navigate = useNavigate();

  


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const query = useQuery();
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
            navigate("/?search="+value, { replace: true });

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
