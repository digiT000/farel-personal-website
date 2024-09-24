import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Agar path dapat digunakan kita perlu membungkus home dengan Browser Router

/* It will track the path that we have and different link we have */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
