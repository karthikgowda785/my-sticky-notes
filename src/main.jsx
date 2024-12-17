import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Compose from "./context/Compose.jsx";
import { NotesDataProvider } from "./context";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Compose components={[NotesDataProvider]}>
        <App />
      </Compose>
    </QueryClientProvider>
  </React.StrictMode>
);
