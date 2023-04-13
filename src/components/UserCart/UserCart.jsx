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

export const UserCart = () => {
  const user = {
    id: 1,
    user: "Elon Reeve Musk",
    tweets: 777,
    followers: 100500,
  };
  const { tweets, followers, avatar = defAvatar } = user;

  const follower = getFollowers(followers);
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
          <Item>{follower} Followers</Item>
        </List>
        <Btn>Follow</Btn>
      </UserBox>
    </Box>
  );
};
