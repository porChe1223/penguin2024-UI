import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Layout } from "./notEdit/Layout/index.tsx";
import { WorkContainer } from "./notEdit/WorkContainer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <WorkContainer>
        <App />
      </WorkContainer>
    </Layout>
  </React.StrictMode>
);
