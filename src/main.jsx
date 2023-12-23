import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient()

import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import Authprovider from "./Router/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>
);
