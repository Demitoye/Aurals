import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

export function Routes() {
  const [isAuthorized, isSetAuthorized] = useState(true);
  return (
    <Switch>
      {isAuthorized ? (
        <>
          <PrivateRoutes />
        </>
      ) : (
        <PrivateRoutes />
      )}
    </Switch>
  );
}
