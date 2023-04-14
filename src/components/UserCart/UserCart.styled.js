import styled from "styled-components";

export const Box = styled.div`
  width: 380px;
  height: 460px;
  background-color: #5736a3;
  border-radius: 20px;
  position: relative;

  padding-top: 213px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const UserBox = styled.div`
  height: 238px;
  width: 100%;

  padding-bottom: 36px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const Line = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const BoxAvatar = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;

  top: -30px;
  left: 150px;

  display: flex;
  justify-content: center;
`;

export const Elips = styled.img`
  position: absolute;
`;

export const AvatarUser = styled.img`
  position: absolute;
  top: 2px;

  width: 62px;
  height: 62px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-flow: column;
  align-items: center;

  color: #ebd8ff;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 62px;
  margin-bottom: 26px;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  display: block;
  width: 196px;
  height: 50px;

  background-color: ${({ bg }) => bg};
  border: none;
  border-radius: 10px;
`;
