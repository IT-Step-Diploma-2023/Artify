import { TFunction } from "i18next";
import { Dispatch, SetStateAction, createContext } from "react";
import { IBasicUserFormData } from "../assets/interfaces/usersInterfaces";


interface IAppContext {
    signinState: boolean,
    setSigninState?: Dispatch<SetStateAction<boolean>>
    translation?: TFunction<"translation", undefined>
    setTranslation?: Dispatch<SetStateAction<TFunction<"translation", undefined>>>,
    user?:IBasicUserFormData
    setUser?:Dispatch<SetStateAction<IBasicUserFormData | undefined>>
}

const defaultState = {
    signinState: false,
    user: undefined
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;

