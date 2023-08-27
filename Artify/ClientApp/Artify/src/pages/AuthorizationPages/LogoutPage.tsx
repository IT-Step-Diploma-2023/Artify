import { AuthenticationManager } from '../../utils/AuthenticationManager';
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth";
import { useNavigate } from 'react-router-dom';


const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authManager : AuthenticationManager = new AuthenticationManager();
  authManager.logOut();
  dispatch(authActions.logout());

  //navigate('/');

  return (
    <>
      <h1>Log out successful!</h1>
    </>
  );
};
export default LogoutPage;
