import { Box, List } from "./App.styled";
import { UserCart } from "./UserCart/UserCart";
import { GlobalStyle } from "./GlobalStyle";
import { getUsers } from "./apiService";

import { useEffect } from "react";
import { useState } from "react";

export const App = () => {
  const lokal = localStorage.getItem("users");
  const lokalFollower = JSON.parse(lokal);

  const [user, setUser] = useState(lokalFollower);
  const array = [];

  useEffect(() => {
    if (!user) {
      const users = getUsers();
      users.then((res) => setUser(res));
    }
  }, [user]);

  return (
    <Box>
      <List>
        {user
          ? user.map((item) => (
              <UserCart key={item.id} item={item} array={array} />
            ))
          : false}
      </List>
      <GlobalStyle />
    </Box>
  );
};
