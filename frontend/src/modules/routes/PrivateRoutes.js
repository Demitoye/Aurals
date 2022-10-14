import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Waitlist from "../pages/waitlist/Waitlist";

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/" component={Waitlist} />
      <Redirect to="/" />
    </Switch>
  );
}

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>; */
}
