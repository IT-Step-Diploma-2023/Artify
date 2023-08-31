// import { AuthenticationManager } from '../../utils/AuthenticationManager';
import useAuthorization from "../../hooks/useAuthorization";

const LogoutPage = () => {
  const {logOut} = useAuthorization();
  logOut();
  return (
    <>
      <h1>Log out successful!</h1>
    </>
  );
};
export default LogoutPage;
