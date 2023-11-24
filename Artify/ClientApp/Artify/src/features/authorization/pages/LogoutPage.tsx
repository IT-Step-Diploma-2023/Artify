import { useContext } from "react";
import AppContext from "../../../utils/AppContext";
import CommonButton from "../../../components/UI/CommonButton";
import { colors } from "../../../assets/defaults/colors";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import useAuthorization from "../../../hooks/useAuthorization";
import RegLogPageContent from "../components/layout/RegLogPageContent";


const LogoutPage = () => {

  const { translation, setSigninState, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const { logOut } = useAuthorization();

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
