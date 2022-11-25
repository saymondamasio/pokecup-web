import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { isClassElement } from "typescript";
import { api } from "../../services/api";
import RightCard from "./RightCard";
import * as S from "./styles";

const countries = [
  { name: "Catar", flagImage: "qatar.png" },
  { name: "Brasil", flagImage: "brasil.png" },
  { name: "Inglaterra", flagImage: "inglaterra.png" },
  { name: "França", flagImage: "franca.png" },
  { name: "Portugal", flagImage: "portugal.png" },
  { name: "Argentina", flagImage: "argentina.png" },
  { name: "Belgica", flagImage: "belgica.png" },
  { name: "Espanha", flagImage: "espanha.png" },
];

interface Country {
  name: string;
  flagImage: string;
}

export interface Card {
  name: string;
  country: string;
  description: string;
  image: string;
  abilities: {
    ability: string;
    defense: string;
    finalization: string;
    weakness: string;
  };
}

export const Album = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);

  const getCardsFromCountry = async (country: string) => {
    const responseCards = await api.get<Card[]>(
      `cards?country=${country}&_limit=6`
    );

    setCards(responseCards.data);
    return responseCards.data;
  };

  const setNextCountry = () => {
    const indexCountryActual = countries.indexOf(selectedCountry);
    const nextCountry = countries[indexCountryActual + 1];

    if (nextCountry) {
      setSelectedCountry(nextCountry);
      setSelectedCountryIndex(indexCountryActual + 1);
    }
  };

  const setPreviousCountry = () => {
    const indexCountryActual = countries.indexOf(selectedCountry);
    const previousCountry = countries[indexCountryActual - 1];

    if (previousCountry) {
      setSelectedCountry(previousCountry);
      setSelectedCountryIndex(indexCountryActual - 1);
    }
  };

  useEffect(() => {
    (async () => {
      const responseCards = await getCardsFromCountry(selectedCountry.name);

      setSelectedCard(responseCards[0]);
      setCards(responseCards);
    })();
  }, [selectedCountry.name]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.BackButton href="/menu">
          <AiOutlineArrowLeft /> Voltar
        </S.BackButton>
      </S.Header>

      <S.Main>
        <S.Album>
          <S.PageLeft>
            <S.FlagCountry>
              <Image
                src={`/countries/${selectedCountry.flagImage}`}
                alt={selectedCountry.name}
                width={400}
                height={230}
              />
              <S.Title>{selectedCountry.name}</S.Title>
            </S.FlagCountry>

            <S.GridCards>
              {cards.map((card) => (
                <S.Card key={card.name} onClick={() => setSelectedCard(card)}>
                  <S.ImageCard
                    src={card.image}
                    width={100}
                    height={100}
                    alt={card.name}
                  />
                  <S.NameCard>{card.name}</S.NameCard>
                </S.Card>
              ))}
            </S.GridCards>
          </S.PageLeft>
          <S.PageRight><RightCard selectedCard={selectedCard}/></S.PageRight>
        </S.Album>
        <S.PaginationAlbum>
          <S.PreviousCountry
            onClick={setPreviousCountry}
            disabled={selectedCountryIndex <= 0}
          >
            <AiOutlineArrowLeft size={20} />
          </S.PreviousCountry>
          <S.NextCountry
            onClick={setNextCountry}
            disabled={selectedCountryIndex >= countries.length - 1}
          >
            <AiOutlineArrowRight size={20} />
          </S.NextCountry>
        </S.PaginationAlbum>
      </S.Main>
    </S.Wrapper>
  );
};
