"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "@/modules";

const store = createStore(rootReducer);

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
