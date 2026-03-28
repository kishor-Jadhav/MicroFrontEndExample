import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import AngularWrapper from "./AngularWrapper";
import { setData } from "./GlobalState/shellStore";
import TestRedux from "./Components/TestRedux";
import TestReduxPublish from "./Components/TestReduxPublish";
import TestReduxSubscribe from "./Components/TestReduxSubscribe";

const ReactRemote = React.lazy(() => import("reactMfe/ReactComponent"));

function ShellRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      const path = event.detail.path;
      navigate(path);
    };
    const dataHandler = (event) => {
      setData(event.detail);
    };
    window.addEventListener("shell:navigate", handler);
    window.addEventListener("shell:set-data", dataHandler);
    return () => {
      window.removeEventListener("shell:navigate", handler);
      window.removeEventListener("shell:set-data", dataHandler);
    };
  }, [navigate]);

  return (
    <>
      <h1>Shell Application</h1>

      <nav>
        <Link to="/">Home</Link> |<Link to="/react">React MFE</Link> |
        <Link to="/angular">Angular MFE</Link>
        <Link to="/reduxtest">Redux Test</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Shell components */}
        <Route path="/reduxtest" element={<TestRedux />} />
        <Route path="/redux-component-1" element={<TestReduxPublish />} />
        <Route path="/redux-component-2" element={<TestReduxSubscribe />} />
        {/* Shell components End */}

        {/* React MFA1 components */}
        <Route
          path="/react"
          element={
            <Suspense fallback="Loading React...">
              <ReactRemote message="Loaded from Shell" />
            </Suspense>
          }
        />
        <Route
          path="/react/accounts-list"
          element={
            <Suspense fallback="Loading React...">
              <ReactRemote initialRoute="/react/accounts-list" />
            </Suspense>
          }
        />        
         {/* React MFA1 components End */}

        {/* Angular MFA1 components  */}
        <Route path="/angular" element={<AngularWrapper />} />
        <Route
          path="/angular/productlist"
          element={<AngularWrapper initialRoute="/angular/productlist" />}
        />
         {/* Angular MFA1 components End */}
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
