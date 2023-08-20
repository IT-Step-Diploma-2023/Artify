import { AuthenticationManager } from '../../utils/AuthenticationManager';

const LogoutPage = () => {
  const authManager = new AuthenticationManager();
  authManager.logOut();
  return (
    <>
      <h1>Log out successful!</h1>
    </>
  );
};
export default LogoutPage;
