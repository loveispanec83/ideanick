// Импортируем StrictMode из библиотеки react для обеспечения строгого режима.
// Импортируем createRoot из библиотеки react-dom/client для создания корневого элемента приложения.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Оба варианта кода создают корневой элемент приложения и рендерят компонент App внутри него.
// Импортируется весь объект React и ReactDOM.
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
