//import { useState } from "react";

export default function SearchForm({ searchTerm, changeSearchTerm }) {
  //let searchTerm = "";
  //const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //searchTerm = event.target.searchTerm.value;
    //setSearchTerm(event.target.searchTerm.value);
    changeSearchTerm(event.target.searchTerm.value);
    console.log("in submit");
    console.log("searchTerm: ", searchTerm);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(event) => changeSearchTerm(event.target.value)}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </section>
  );
}
