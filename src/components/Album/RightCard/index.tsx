import * as S from "./styles"


export default function RightCard(){
    return(
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
       </S.WhiteCard>
    )
}