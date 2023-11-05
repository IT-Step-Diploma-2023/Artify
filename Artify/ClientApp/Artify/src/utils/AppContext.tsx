import { TFunction } from "i18next";
import { Dispatch, SetStateAction, createContext } from "react";


interface IAppContext {
    signinState: boolean,
    setSigninState?: Dispatch<SetStateAction<boolean>>
    translation?: TFunction<"translation", undefined>
    setTranslation?: Dispatch<SetStateAction<TFunction<"translation", undefined>>>
}

const defaultState = {
    signinState: false,
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;

