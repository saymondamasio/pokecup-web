import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.main`
  background: no-repeat center/100% url(/assets/background-album.png);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 20px;
  padding-bottom: 40px;
`;

export const Header = styled.header`
  margin: 0 40px;
  margin-top: 50px;
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1300px;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(Link)`
  border: none;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-decoration: none;
  /* or 250% */

  display: flex;
  align-items: center;

  color: #000;
`;

export const Album = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PageLeft = styled.div`
  flex: 1;
  background-color: #c4c4c4;
`;

export const FlagCountry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const Title = styled.h2`
  margin-top: 20px;

  font-family: "Inter";
  font-style: italic;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
  /* identical to box height, or 167% */
  text-align: center;
  color: #000000;
`;

export const GridCards = styled.div``;

export const Card = styled.div``;

export const ImageCard = styled.div``;
export const NameCard = styled.div``;

export const PageRight = styled.div`
  flex: 1;
  background-color: #b0afaf;
`;
