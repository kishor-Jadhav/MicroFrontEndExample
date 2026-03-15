import React, { useEffect, useRef } from "react";

function AngularWrapper() {

  const ref = useRef(null);

  useEffect(() => {

    import("angularMfe/AngularApp").then(module => {

      module.mountAngular(ref.current);

    });

  }, []);

  return <div ref={ref}></div>;

}

export default AngularWrapper;