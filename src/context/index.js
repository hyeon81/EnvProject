//index.js 전체코드

import { createContext, useReducer } from "react";
import { ADD_FRUIT } from "./action";

const initialState = {
    productList: {
        computer: [
            { name: "pc", price: 100 },
            { name: "note-book", price: 200 },
        ],
        fruits: [
            { name: "banana", price: 10 },
            { name: "apple", price: 20 },
        ],
    },
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRUIT:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    fruits: [...state.productList.fruits, action.payload],
                },
            };
        default:
            return state;
    }
};

const StoreProvider = ({ childeren }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Context.Provider value={value}>{childeren}</Context.Provider>
};

export { Context, StoreProvider };