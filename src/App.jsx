import React from "react";
import RepoList from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__title">Trending GitHub Repositories</div>
      </header>
      <main>
        <RepoList />
      </main>
    </div>
  );
}

export default App;
