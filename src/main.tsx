import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import App from "./App";
import { fetchUsers } from "./modules/users/model/fetch-users";


fetchUsers(store.dispatch, store.getState);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
