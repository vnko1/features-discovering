import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices";

export const makeStore = () => {
  return configureStore({
    reducer: { [counterSlice.name]: counterSlice.reducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
