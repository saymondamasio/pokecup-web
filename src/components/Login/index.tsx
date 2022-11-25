import { signIn, signOut, useSession } from "next-auth/react";
import * as S from "./styles";

export const Login = () => {
  const { data: session } = useSession();

  return session ? (
    <S.Wrapper>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sair</button>
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <S.LoginButton onClick={() => signIn()}>Fazer login </S.LoginButton>
    </S.Wrapper>
  );
};
