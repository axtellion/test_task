import styled from "styled-components";

export const Box = styled.li`
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
  top: 8px;

  width: 56px;
  height: 56px;

  border-radius: 30px;
`;

export const List = styled.ul`
  font-family: Montserrat;
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
  font-family: Montserrat;
  cursor: pointer;
  display: block;
  width: 196px;
  height: 50px;
  font-weight: 600;

  background-color: ${({ bg }) => bg};
  border: none;
  border-radius: 10px;

  box-shadow: 0px 3.44px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #90ee90;
  }
`;
