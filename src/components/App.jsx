import { Box, List, Btn } from "./App.styled";
import { UserCart } from "./UserCart/UserCart";
import { GlobalStyle } from "./GlobalStyle";
import { getUsers } from "./apiService";

import { useEffect, useState } from "react";
import { slice } from "lodash";

export const App = () => {
  const lokal = localStorage.getItem("users");
  const lokalFollower = JSON.parse(lokal);

  const [user, setUser] = useState(lokalFollower);
  const [index, setIndex] = useState(9);

  const initialPosts = slice(user, 0, index);
  const array = [];

  const loadMore = () => {
    setIndex(index + 9);
  };

  useEffect(() => {
    const users = getUsers();
    users.then((res) => setUser(res));
  }, []);

  return (
    <Box>
      <List>
        {user &&
          initialPosts.map((item) => (
            <UserCart key={item.id} item={item} array={array} />
          ))}
      </List>
      {index <= user.length && <Btn onClick={loadMore}>Load More</Btn>}

      <GlobalStyle />
    </Box>
  );
};
