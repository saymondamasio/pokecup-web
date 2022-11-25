import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import * as S from "./styles";

export const Menu = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.ButtonMenu href="/exchange-stickers">Trocar figurinhas</S.ButtonMenu>
        <S.ButtonMenu href="/album">Ver Album</S.ButtonMenu>
        <S.ButtonMenu href="/buy-stickers">Comprar figurinhas</S.ButtonMenu>
        <S.ButtonMenu href="/quiz">Quiz</S.ButtonMenu>
      </S.Header>

      <S.Main>
        <Image
          src="/assets/album.png"
          alt="Album da Copa"
          width={400}
          height={600}
        />
      </S.Main>
    </S.Wrapper>
  );
};
