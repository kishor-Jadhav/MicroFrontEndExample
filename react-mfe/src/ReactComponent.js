import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import AccountsEntry from "./Accounts/AccountsEntry";
import AccountsList from "./Accounts/AccountsList";

const ReactComponent = ({ initialRoute = "/" }) => {

  return (

    <MemoryRouter initialEntries={[initialRoute]}>

      <div>
        <h1>React Microfrontend App</h1>
        <h3>React Internal Routes</h3>
      </div>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |
        <Link to="/accounts-entry"> Accounts Entry</Link> |
        <Link to="/accounts-list"> Accounts List</Link>
      </nav>

      <Routes>

        <Route path="/" element={<h2>Welcome to React MFE</h2>} />

        <Route
          path="/accounts-entry"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AccountsEntry />
            </Suspense>
          }
        />

        <Route
          path="/accounts-list"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AccountsList />
            </Suspense>
          }
        />

      </Routes>

    </MemoryRouter>
  );
};

export default ReactComponent;