import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { api } from "../../services/api";
import * as S from "./styles";

interface Card {
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

  useEffect(() => {
    const getCards = async () => {
      console.log(process.env.API_URL);
      const responseCards = await api.get<Card[]>("cards?_page=1&_limit=6");

      console.log(responseCards);
      setCards(responseCards.data);
    };

    getCards();
  }, []);

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
                src="/assets/qatar.png"
                alt="Qatar"
                width={500}
                height={200}
              />
              <S.Title>QATAR</S.Title>
            </S.FlagCountry>

            <S.GridCards>
              {cards.map((card) => (
                <S.Card key={card.name}>
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
          <S.PageRight></S.PageRight>
        </S.Album>
        <S.PaginationAlbum>
          <S.PreviousPage>
            <AiOutlineArrowLeft size={20} />
          </S.PreviousPage>
          <S.NextPage>
            <AiOutlineArrowRight size={20} />
          </S.NextPage>
        </S.PaginationAlbum>
      </S.Main>
    </S.Wrapper>
  );
};
