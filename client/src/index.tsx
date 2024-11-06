import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useDarkMode } from "./hooks/useDarKMode";

const container = document.getElementById("root")!;
const root = createRoot(container);

const RootApp = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        theme={isDarkMode ? "dark" : "light"}
      />
      <App />
    </>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <RootApp />
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);
