import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./fonts.css";

//fonts

import "./assets/fonts/Rota-Black.otf";
import "./assets/fonts/Rota-ThinItalic.otf";
import "./assets/fonts/Rota-SemiBoldItalic.otf";
import "./assets/fonts/Rota-SemiBold.otf";
import "./assets/fonts/Rota-Regular.otf";
import "./assets/fonts/Rota-MediumItalic.otf";
import "./assets/fonts/Rota-Medium.otf";
import "./assets/fonts/Rota-Italic.otf";
import "./assets/fonts/Rota-Light.otf";
import "./assets/fonts/Rota-LightItalic.otf";
import "./assets/fonts/Rota-Bold.otf";
import "./assets/fonts/Rota-ExtraBold.otf";
import "./assets/fonts/Rota-BoldItalic.otf";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "./modules/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
