import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.main`
  background: no-repeat center/100% url(/assets/background-menu.gif);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding: 0 20px;
`;

export const Header = styled.header`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonMenu = styled(Link)`
  background: #333333;
  border-radius: 99999px;

  padding: 30px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-decoration: none;
  /* or 250% */

  display: flex;
  align-items: center;

  color: #ffffff;
`;
