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

import { getFollowers } from "../../helpers/getFollowers";
import { addToLokal } from "../../helpers/addToLokal";

export const UserCart = ({ item, array }) => {
  const { tweets, followers, avatar = defAvatar, state: isOpen = false } = item;
  const [state, setState] = useState(isOpen);
  const [follower, setFollower] = useState(followers);

  useEffect(() => {
    const newFollow = { ...item, followers: follower, state };
    const id = array.findIndex(({ id }) => id === newFollow.id);
    if (id !== -1) {
      array.splice(id, 1, newFollow);
    } else {
      array.push(newFollow);
    }

    addToLokal(array);
  }, [item, state, follower, array]);

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
