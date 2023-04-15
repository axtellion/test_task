import { Box, List } from "./App.styled";
import { UserCart } from "./UserCart/UserCart";
import { GlobalStyle } from "./GlobalStyle";
import { getUsers } from "./apiService";

import { useEffect } from "react";
import { useState } from "react";

// import { addToLokal } from "../../helpers/addToLokal";

export const App = () => {
  const [user, setUser] = useState([]);

  // const lokal = localStorage.getItem("settings");
  // const lokalFollower = JSON.parse(lokal);

  // const [state, setState] = useState(lokal ? lokalFollower.state : false);
  // const [follower, setFollower] = useState(
  //   lokal ? lokalFollower.followers : followers
  // );

  // useEffect(() => {
  //   addToLokal(state, follower, id);
  // }, [state, follower, id]);

  useEffect(() => {
    const users = getUsers();
    users.then((res) => setUser(res));
  }, []);

  return (
    <Box>
      <List>
        {user.map((item) => (
          <UserCart key={item.id} item={item} />
        ))}
      </List>
      <GlobalStyle />
    </Box>
  );
};
