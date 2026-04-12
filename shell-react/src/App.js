import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import AngularWrapper from "./AngularWrapper";
import { setEventData } from "./GlobalState/store";
import TestRedux from "./Components/TestRedux";
import TestReduxPublish from "./Components/TestReduxPublish";
import TestReduxSubscribe from "./Components/TestReduxSubscribe";
import CustomEventExample from "./Components/CustomEventExample";

const ReactRemote = React.lazy(() => import("reactMfe/ReactComponent"));
const ReactConceptRemote = React.lazy(() => import("reactConceptMfe/ReactConceptComponent"));

function ShellRoutes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (event) => {
      const path = event.detail.path;
      navigate(path);
    };
    const dataHandler = (event) => {
      dispatch(setEventData(event.detail));
    };
    window.addEventListener("shell:navigate", handler);
    window.addEventListener("shell:set-data", dataHandler);
    return () => {
      window.removeEventListener("shell:navigate", handler);
      window.removeEventListener("shell:set-data", dataHandler);
    };
  }, [navigate, dispatch]);

  return (
    <>
      <h1>Shell Application</h1>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/react">React MFE</Link> |
        <Link to="/angular">Angular MFE</Link> |
        <Link to="/reduxtest">Redux Test</Link> |
        <Link to="/custom-events">Custom Events</Link>|
        <Link to="/react-concept">React Concepts</Link>|
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Shell components */}
        <Route path="/reduxtest" element={<TestRedux />} />
        <Route path="/redux-component-1" element={<TestReduxPublish />} />
        <Route path="/redux-component-2" element={<TestReduxSubscribe />} />
        <Route path="/custom-events" element={<CustomEventExample />} />
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

         {/* React Concept MFA2 components */}
         <Route
          path="/react-concept"
          element={
            <Suspense fallback="Loading React...">
              <ReactConceptRemote message="Loaded from Shell" />
            </Suspense>
          }
        />
              
         {/* React Concept MFA1 components End */}
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
