import { AuthenticationManager } from '../../utils/AuthenticationManager';
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth";

const LogoutPage = () => {
  const dispatch = useDispatch();

  const authManager : AuthenticationManager = new AuthenticationManager();
  authManager.logOut();
  dispatch(authActions.logout());

  return (
    <>
      <h1>Log out successful!</h1>
    </>
  );
};
export default LogoutPage;
