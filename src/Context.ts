import { createContext } from "react";

interface DataContextValue {
  loginResponse: any;
  setLoginResponse: (value: any) => void;
}
type emoji = "smile" | "heart";
type card = {
  name: string;
  reactions: emoji[];
  count: number;
};

interface CardContextValue {
  cards: card[];
  setCards: (value: any) => void;
}

export const DataContext = createContext<DataContextValue>({
  loginResponse: undefined,
  setLoginResponse: function (value: any): void {
    throw new Error("Function not implemented.");
  },
});

export const CardsContext = createContext<CardContextValue>({
  cards: [],
  setCards: function (value: any): void {
    throw new Error("Function not implemented.");
  },
});
