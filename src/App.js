import "./App";

import styles from "./App.module.css";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Ladingpages from "./pages/Ladingpages";

const App = () => {
  return (
    <div>
      <header className={styles.title}>
        <Link to="/">Movies David</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Ladingpages />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*"  element={<Navigate replace to="/"/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
