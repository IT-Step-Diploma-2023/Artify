// import { AuthenticationManager } from '../../utils/AuthenticationManager';
import { useContext } from "react";
import useAuthorization from "../../hooks/useAuthorization";
import AppContext from "../../utils/AppContext";
import RegLogPageContent from '../../components/Layouts/RegLogPageContent';

// import { useTranslation } from "react-i18next";
import CommonButton from "../../components/UI/CommonButton";
import { colors } from "../../assets/defaults/colors";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";


const LogoutPage = () => {

  // const { setSigninState } = useContext(UserContext);
  const { translation, setSigninState, setUser } = useContext(AppContext);
  // const {t} = useTranslation();
  const navigate = useNavigate();
  const { logOut } = useAuthorization();

  // setSigninState && setSigninState(false);
  logOut();
  if (setSigninState !== undefined) setSigninState(false);
  if (setUser !== undefined) setUser(undefined);

  return (
    <RegLogPageContent title={translation && translation('logoutPage.message').toUpperCase()}>
      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <CommonButton
          color='primary'
          height='bg'
          type='submit'
          sx={{ width: '75%', backgroundColor: colors.darkViolet }}
          onClick={() => navigate("/")}
        >
          {translation && translation('logoutPage.buttonText')}
        </CommonButton>
      </Box>
    </RegLogPageContent>
  );
};
export default LogoutPage;
