import React, { useEffect, useRef } from "react";

function AngularWrapper({ initialRoute }) {

  const ref = useRef(null);

  useEffect(() => {

    import("angularMfe/AngularApp").then(module => {
    if (ref.current && initialRoute) {
      ref.current.setAttribute("initial-route", initialRoute);
    }
      module.mountAngular(ref.current);

    });

  }, [initialRoute]);

  return <div ref={ref}></div>;

}
 
export default AngularWrapper;