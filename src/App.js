import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function changeSearchTerm(value) {
    setSearchTerm(value);
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} changeSearchTerm={changeSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
