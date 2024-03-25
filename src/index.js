import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Firstpage from "./pages/firstPage/firstpage";
import Howpage from "./pages/howPage/howpage";
import Character from "./pages/selectP1/character";
import Character2 from "./pages/selectP2/character2";
import Gameplay from "./pages/gameplay/gameplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Firstpage />,
  },
  {
    path: "/how",
    element: <Howpage />,
  },
  {
    path: "/Character",
    element: <Character />,
  },
  {
    path: "/Character2",
    element: <Character2 />
  },{
    path: "/play",
    element: <Gameplay />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
