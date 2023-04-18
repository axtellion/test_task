import { Box, List, Btn } from "./Tweets.styled";
import { UserCart } from "../../components/UserCart/UserCart";
import { getUsers } from "../../components/apiService";

import { useEffect, useState } from "react";
import { slice } from "lodash";

export const Tweets = () => {
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
    </Box>
  );
};
