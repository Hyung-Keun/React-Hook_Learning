import { createContext } from "react";

const initialState = {
  first: "Hyung-Keun",
  last: "Kang",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
