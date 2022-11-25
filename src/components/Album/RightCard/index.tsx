import AbilityContent from "./AbilityContent";
import * as S from "./styles";

export default function RightCard() {
  return (
    <S.WhiteCard>
      <S.TopContent>
        <S.CountryContent>
          <S.CountryTitle>Pais</S.CountryTitle>
          <S.Country>Catar</S.Country>
        </S.CountryContent>
        <S.NameContent>
          <S.PokemonTitle>Nome</S.PokemonTitle>
          <S.PokemonName>Seaking</S.PokemonName>
        </S.NameContent>
      </S.TopContent>
      <S.ImageContainer>
        <img src="/catar/Seaking.png" alt="imagem ilustrativa de um pokemon" />
      </S.ImageContainer>
      <S.AbilityWrapper>
        <S.AbilityContent>
          <AbilityContent ability="Habilidade" value="67" />
          <AbilityContent ability="Defesa" value="67" />
          <AbilityContent ability="Fraquesa" value="67" />
          <AbilityContent ability="Finalização" value="67" />
        </S.AbilityContent>

        <S.DescriptionWrapper>
          <S.Description>Lorem ipsulum e nois Brasil</S.Description>
        </S.DescriptionWrapper>
      </S.AbilityWrapper>
    </S.WhiteCard>
  );
}
