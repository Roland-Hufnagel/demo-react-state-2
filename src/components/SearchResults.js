const topics = [
  "react",
  "render",
  "JSX",
  "component",
  "declarative",
  "string interpolation",
  "nesting",
  "children prop",
  "Fragment",
  "composition",
  "application design",
  "create-react-app",
  "project scaffolding",
  "bundler",
  "transpilation",
  "npm dependencies",
  "npm scripts",
  "state",
  "useState",
  "re-render",
  "onClick",
  "set function",
  "map",
  "array",
  "key prop",
  "unique identifier",
  "keyed fragment",
];

export default function SearchResults({ searchTerm }) {
  const results = topics.filter((topic) => topic.includes(searchTerm));

  return (
    <section>
      {!searchTerm || !results.length ? (
        <p>No results</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
