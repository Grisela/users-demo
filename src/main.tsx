import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import GlobalContainer from "./components/GlobalContainer/index.tsx";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Provider store={store}>
        <GlobalContainer>
          <App />
        </GlobalContainer>
      </Provider>
    </MantineProvider>
  </StrictMode>,
);
