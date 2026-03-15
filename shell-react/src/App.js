import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AngularWrapper from "./AngularWrapper";

const ReactRemote = React.lazy(() =>
  import("reactMfe/ReactComponent")
);

const AngularRemote = React.lazy(() =>
  import("angularMfe/AngularApp")
);

function App() {

  return (
    <BrowserRouter>

      <h1>Shell Application</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/react">React MFE</Link> |
        <Link to="/angular">Angular MFE</Link>
      </nav>

      <Routes>

        <Route path="/" element={<h2>Home Page</h2>} />

        <Route
          path="/react"
          element={
            <Suspense fallback="Loading React...">
              <ReactRemote message="Loaded from Shell"/>
            </Suspense>
          }
        />

       <Route path="/angular" element={<AngularWrapper />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;