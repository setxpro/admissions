import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/GlobalStyles.ts";
import AuthProvider from "./contexts/Auth/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Router>
         <AuthProvider>
            <App />
            <GlobalStyles />
         </AuthProvider>
      </Router>
   </React.StrictMode>
);
