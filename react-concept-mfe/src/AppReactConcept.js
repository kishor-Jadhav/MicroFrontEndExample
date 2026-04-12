 import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
 
import RegistrationComponent from "./Components/RegistrationComponent";
import WelCome from "./Components/WelCome";

const AppReactConcept = ({ initialRoute = "/" }) => {
  return (
    <>
      
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <RegistrationComponent />
                </Suspense>
              }
            />
             <Route
              path="/user-registration"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <RegistrationComponent />
                </Suspense>
              }
            />
          </Routes>
        </MemoryRouter>
     
    </>
  );
};

export default AppReactConcept;
