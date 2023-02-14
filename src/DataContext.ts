import { createContext } from "react";

interface DataContextValue {
  loginResponse: any;
  setLoginResponse: (value: any) => void;
}

export const DataContext = createContext<DataContextValue>({
  loginResponse: undefined,
  setLoginResponse: function (value: any): void {
    throw new Error("Function not implemented.");
  }
});
