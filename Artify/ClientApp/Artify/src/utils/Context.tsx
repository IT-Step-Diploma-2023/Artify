import { Dispatch, SetStateAction, createContext } from "react";

interface IHomePageContext {
    filterActive: boolean,
    setFilterActive?: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    filterActive: false
};

const Context = createContext<IHomePageContext>(defaultState);

export default Context;

