import {
  Box,
  Logo,
  Picture,
  Line,
  AvatarUser,
  UserBox,
  BoxAvatar,
  Elips,
  List,
  Item,
  Btn,
} from "./UserCart.styled";

import { useState } from "react";
import { useEffect } from "react";

import LogoImg from "../../img/Vector.png";
import questionImg from "../../img/Question.png";
import lineImg from "../../img/RectangleSvg.svg";
import defAvatar from "../../img/Hansel.png";
import elips from "../../img/EllipseSvg.svg";

const getFollowers = (followers) => {
  const follow = followers + "";
  const arrow = follow.split("");
  const coma = ",";

  if (followers >= 100000) {
    arrow.splice(3, 0, coma);
    return arrow;
  } else if (followers >= 10000) {
    arrow.splice(2, 0, coma);
    return arrow;
  } else if (followers >= 1000) {
    arrow.splice(1, 0, coma);
    return arrow;
  } else {
    return arrow;
  }
};

const user = {
  id: 1,
  user: "Elon Reeve Musk",
  tweets: 777,
  followers: 100500,
};

const addToLokal = (state, followers) => {
  const arrowLokal = { state, followers };
  console.log(arrowLokal);
  localStorage.setItem("settings", JSON.stringify(arrowLokal));
};

export const UserCart = () => {
  const { tweets, followers, avatar = defAvatar } = user;

  const lokal = localStorage.getItem("settings");
  const lokalFollower = JSON.parse(lokal);

  const [state, setState] = useState(lokal ? lokalFollower.state : false);
  const [follower, setFollower] = useState(
    lokal ? lokalFollower.followers : followers
  );

  useEffect(() => {
    addToLokal(state, follower);
  }, [state, follower]);

  const addFollower = () => {
    if (!state) {
      setFollower(follower + 1);
      return;
    }
    setFollower(follower - 1);
    return;
  };

  const handleFollow = () => {
    if (state === true) {
      setState(false);
      addFollower();
      return;
    }

    setState(true);
    addFollower();
    return;
  };
  const colorBtn = state ? "#5CD3A8" : "#EBD8FF";
  const newFollowers = getFollowers(follower);

  return (
    <Box>
      <Logo src={LogoImg} alt="GO IT" />
      <Picture src={questionImg} alt="Question" />
      <UserBox>
        <Line src={lineImg} alt="line" />
        <BoxAvatar>
          <Elips src={elips} alt="Elipse" />
          <AvatarUser src={avatar} alt="Avatar User" />
        </BoxAvatar>
        <List>
          <Item>{tweets} tweets</Item>
          <Item>{newFollowers} Followers</Item>
        </List>
        <Btn type="button" onClick={handleFollow} bg={colorBtn}>
          {state ? "Following" : "Follow"}
        </Btn>
      </UserBox>
    </Box>
  );
};
