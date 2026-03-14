import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const ReactRemote = React.lazy(() =>
  import("reactMfe/ReactComponent")
);

function AngularWrapper() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src = "http://localhost:4202/remoteEntry.js";

    script.type = "text/javascript";

    document.body.appendChild(script);

  }, []);

  return <angular-mfe-element></angular-mfe-element>;

}

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

        <Route
          path="/angular"
          element={<AngularWrapper />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;