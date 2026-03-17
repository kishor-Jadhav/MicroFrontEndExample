import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import AngularWrapper from "./AngularWrapper";

const ReactRemote = React.lazy(() =>
  import("reactMfe/ReactComponent")
);

function ShellRoutes() {

  const navigate = useNavigate();

  useEffect(() => {

    const handler = (event) => {
      const path = event.detail.path;
      navigate(path);
    };

    window.addEventListener("shell:navigate", handler);

    return () => {
      window.removeEventListener("shell:navigate", handler);
    };

  }, [navigate]);

  return (
    <>
      <h1>Shell Application</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/react">React MFE</Link> |
        <Link to="/angular">Angular MFE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route
        path="/react/accounts-list"
        element={
          <Suspense fallback="Loading React...">
            <ReactRemote initialRoute="/react/accounts-list" />
          </Suspense>
        }
        />
        <Route
          path="/react"
          element={
            <Suspense fallback="Loading React...">
              <ReactRemote message="Loaded from Shell" />
            </Suspense>
          }
        />

        <Route path="/angular" element={<AngularWrapper />} />
       <Route
          path="/angular/productlist"
          element={<AngularWrapper initialRoute="/angular/productlist" />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ShellRoutes />
    </BrowserRouter>
  );
}

export default App;