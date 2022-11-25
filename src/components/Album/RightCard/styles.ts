import styled from "styled-components"

export const WhiteCard = styled.div`
width: 480px;
height:100%;
margin:0 auto;
background-color:#FFF;

`

export const TopContent = styled.div`
width:100%;
height:17%;
overflow:hidden;
display:flex;
justify-content:space-between;
padding 10px;

`
const NameAndCountryStyle = styled.div`
    width:48%;
    heigth: 100%;
    font-size: 1rem;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
export const CountryContent = styled(NameAndCountryStyle)`
background-color:#AF4734;
`
export const CountryTitle = styled.p`
color:#FFF;
`
const NameAndCountryTitleStyle = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: #FFF;
`
export const Country = styled(NameAndCountryTitleStyle)`

`

export const PokemonTitle = styled.p`
color:#FFF;

`
export const PokemonName = styled(NameAndCountryTitleStyle)`

`


export const NameContent = styled(NameAndCountryStyle)`
    background-color:#E25941;
`