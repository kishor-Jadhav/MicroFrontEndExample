import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import AccountsEntry from "./Accounts/AccountsEntry";
import AccountsList from "./Accounts/AccountsList";
import LoginComponent from "./LoginComponents/LoginComponent";
 

const ReactComponent = ({ initialRoute = "/" }) => {

  return (

    <MemoryRouter initialEntries={[initialRoute]}>   

      <Routes>

        <Route path="/" 
         element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginComponent />
            </Suspense>
          } />

        <Route
          path="/accounts-entry"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AccountsEntry />
            </Suspense>
          }
        />

        <Route
          path="/react/accounts-list"
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