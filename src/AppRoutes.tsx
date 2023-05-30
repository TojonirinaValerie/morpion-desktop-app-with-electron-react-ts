import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import routes from './constants/routes.json';
import MultiplayerScreen from "./screen/MultiplayerScreen";
import SinglePlayerScreen from "./screen/SinglePlayer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomeScreen />} />
      <Route path={routes.NEW_GAME} element={<SinglePlayerScreen />} />
      <Route path={routes.MULTIPLAYER} element={<MultiplayerScreen />} />
    </Routes>
  );
};

export default AppRoutes;
