import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.main`
  background: no-repeat center/100% url(/assets/background-album.png);
  width: 100%;
  height: 100%;
  overflow: overlay;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 20px;
  padding-bottom: 40px;
`;

export const Header = styled.header`
  margin: 0 40px;
  margin-top: 30px;
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;

  margin-top: 30px;

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
  padding: 40px;

  display: flex;
  flex-direction: column;
`;

export const FlagCountry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const GridCards = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const Card = styled.div`
  background-color: #fff;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCard = styled(Image)``;

export const NameCard = styled.h3`
  margin-top: 30px;

  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 250% */

  color: #000000;
`;

export const PageRight = styled.div`
  flex: 1;
  background-color: #b0afaf;
`;

export const PaginationAlbum = styled.div`
  max-width: 600px;
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

export const PreviousPage = styled.button`
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextPage = styled.button`
  background-color: #fff;
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;
`;
