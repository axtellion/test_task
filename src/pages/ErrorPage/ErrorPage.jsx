import ImgPageError from "../../img/errorPage.jpg";
import { ImgError, Box } from "./ErrorPage.styled";
import { BtnBack } from "../../components/BtnBack/BtnBack";

export const ErrorPage = () => {
  return (
    <Box>
      <BtnBack title="Go Home" to="/" />
      <ImgError src={ImgPageError} alt="Error" />
    </Box>
  );
};
