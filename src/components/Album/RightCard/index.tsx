import * as S from "./styles"
import AbilityContent from "./AbilityContent"
import { Card } from ".."
interface RightCardProps {
    selectedCard: Card | null
}
export default function RightCard({selectedCard}:RightCardProps ){

 if(!selectedCard) {
    return  (<div></div>)
 }

  const  { country,description,name,image,abilities} = selectedCard
const abilitiesArray = Object.values(abilities)
    return(
       <S.WhiteCard>
            <S.TopContent>
                <S.CountryContent>
                    <S.CountryTitle>Pais</S.CountryTitle>
                    <S.Country>{country}</S.Country>
                </S.CountryContent>
                <S.NameContent>
                    <S.PokemonTitle>Nome</S.PokemonTitle>
                    <S.PokemonName>{name}</S.PokemonName>
                </S.NameContent>
            </S.TopContent>
            <S.ImageContainer>
                <img src={image} alt="imagem ilustrativa de um pokemon" />
            </S.ImageContainer>
            <S.AbilityWrapper>
                <S.AbilityContent>

                <AbilityContent ability="Habilidade" value={abilitiesArray[0]} />
                <AbilityContent ability="Defesa" value={abilitiesArray[1]} />
                <AbilityContent  ability="Fraquesa" value={abilitiesArray[2]}/>
                <AbilityContent ability="Finalização" value={abilitiesArray[3]} /> 
                </S.AbilityContent>

            <S.DescriptionWrapper>
                <S.Description>{description}</S.Description>
            </S.DescriptionWrapper>
            </S.AbilityWrapper>
       </S.WhiteCard>
    )

}
