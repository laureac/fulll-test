import React from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import UserList from "./components/UserList/UserList";
import "./App.css";
import Header from "./components/Header/Header";
import SelectedCards from "./components/SelectedCards/SelectedCards";
import DuplicateItems from "./components/DuplicateItems/DuplicateItems";
import DeleteItems from "./components/DeleteItems/DeleteItems";
import { UsersProvider } from "./context/UsersContext";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header title="GitHub Search" />
      <UsersProvider>
        <section className="search-wrapper container">
          <SearchInput />
        </section>

        <section className="container">
          <div className="actions">
            <SelectedCards />
            <div className="copy-delete">
              <DuplicateItems />
              <DeleteItems />
            </div>
          </div>
        </section>
        <section className="container">
          <UserList />
        </section>
      </UsersProvider>
    </div>
  );
};

export default App;
