import React from "react";

export const initialState = { count: 0 };

export type ACTIONTYPE = { type: "increment"; payload: number };

export function increamentReducer(
  state: typeof initialState,
  action: ACTIONTYPE
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    default:
      throw new Error();
  }
}
