import * as S from "./styles"
import { AbilityProps } from "../types"


export default function AbilityContent({ability,value}:AbilityProps) {
    return(
        <S.AbilityContentWrapper>
            <S.AbilityName>{ability}</S.AbilityName>
            <S.AbilityValue>{value}</S.AbilityValue>
        </S.AbilityContentWrapper>
    )
}