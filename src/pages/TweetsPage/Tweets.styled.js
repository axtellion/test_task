import styled from "styled-components";

export const Box = styled.div`
  max-width: 1600px;
  height: 100%;

  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #48d1cc;
`;

export const List = styled.ul`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  margin-top: 50px;
  padding: 8px 16px;
  border-radius: 10px;

  background-color: #ebd8ff;
  color: #000;
  border: 0;

  cursor: pointer;
  font-family: Montserrat;
  font-size: 18px;

  height: 50px;
  min-width: 196px;

  box-shadow: 0px 3.44px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #5cd3a8;
  }
`;
