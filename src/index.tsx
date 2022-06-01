import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./app/Root";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={"Loading..."}
        persistor={persistor}
      >
        <Root />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
