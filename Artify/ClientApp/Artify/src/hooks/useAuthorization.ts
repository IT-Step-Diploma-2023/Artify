/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { urls } from "../assets/defaults/urls";
import { corsMod } from "../assets/defaults/urls";

function useAuthorization() {
    const dispatch = useDispatch();
    //Returns user login if success, or null if failed
    const authenticateUser = async (userName: string, userPassword: string): Promise<any> => {
        const authData = {
            username: userName,
            password: userPassword,
        };

        const response = await fetch(urls.authentication, {
            method: 'POST',
            mode: corsMod,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authData),
        });
        if (response.status !== 200) return;

        const responseJson: ILoginResponse = await response.json();

        const token = responseJson.token;
        setToken(token);
        return isUserLogged();
    }
    const registerUser = async (userName: string, userEmail: string, userPassword: string) => {
        const registerData = {
            email: userEmail,
            password: userPassword,
            username: userName,
        };

        const response = await fetch(urls.registration, {
            method: 'POST',
            mode: corsMod,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });
        if (response.status !== 200) return;
        const responseJson: ILoginResponse = await response.json();
        const token = responseJson.token;
        setToken(token);
        return isUserLogged();
    }

    const logOut = () => {
        localStorage.clear();
        dispatch(authActions.logout());
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('expiration', expiration.toISOString());
        const loggedUserName = isUserLogged();
        dispatch(authActions.login(loggedUserName));
    }

    return { authenticateUser, registerUser, logOut }
}
export default useAuthorization;


//Returns null or username if user is logged in
export const isUserLogged = (): string => {
    const token = getAuthToken();
    if (token === null || token === 'EXPIRED') return "";
    const tokenData = parseJwt(token);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return tokenData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
}

export const loggedInUserId = (): number => {
    const token = getAuthToken();
    if (token === null || token === 'EXPIRED') return -1;
    const tokenData = parseJwt(token);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    return parseInt(tokenData['Id']);
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
        return 'EXPIRED';
    }
    return token;
}

export const logOut = () => {
    localStorage.clear();
}

export const getTokenDuration = (): number => {
    const storedExpirationDate = localStorage.getItem('expires');
    const expirationDate = new Date(storedExpirationDate ?? '');
    const now = new Date();
    return expirationDate.getTime() - now.getTime();
}

function parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );

    return JSON.parse(jsonPayload);
}

interface ILoginResponse {
    token: string;
}