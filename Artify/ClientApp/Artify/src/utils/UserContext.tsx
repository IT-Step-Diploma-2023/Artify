import { Dispatch, SetStateAction, createContext } from "react";


interface IUserContext {
    isUserLogged: boolean,
    setUserIsLogged?: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    isUserLogged: false
};

const UserContext = createContext<IUserContext>(defaultState);

export default UserContext;

