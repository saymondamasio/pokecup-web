import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from "./styles";

export const Album = () => {
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
              <S.Card>
                <S.ImageCard />
                <S.NameCard />
              </S.Card>
            </S.GridCards>
          </S.PageLeft>
          <S.PageRight></S.PageRight>
        </S.Album>
      </S.Main>
    </S.Wrapper>
  );
};
