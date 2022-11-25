import styled from "styled-components";

export const WhiteCard = styled.div`
  width: 480px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
`;

export const TopContent = styled.div`
  width: 100%;
  height: 17%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const NameAndCountryStyle = styled.div`
  width: 48%;
  heigth: 100%;
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CountryContent = styled(NameAndCountryStyle)`
  background-color: #af4734;
`;
export const CountryTitle = styled.p`
  color: #fff;
`;
const NameAndCountryTitleStyle = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
`;
export const Country = styled(NameAndCountryTitleStyle)``;

export const PokemonTitle = styled.p`
  color: #fff;
`;
export const PokemonName = styled(NameAndCountryTitleStyle)``;

export const NameContent = styled(NameAndCountryStyle)`
  background-color: #e25941;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;

  img {
    height: 175px;
    width: 100%;
    object-fit: contain;
  }
`;

export const AbilityWrapper = styled.div`
  width: 100%;
  background-color: #e25941;
  height: 100%;
`;

export const AbilityContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-around;
`;

export const DescriptionWrapper = styled.div``;
export const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;
