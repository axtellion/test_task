import { Box } from "./App.styled";
import { UserCart } from "./UserCart/UserCart";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <Box>
      <UserCart />
      <GlobalStyle />
    </Box>
  );
};
