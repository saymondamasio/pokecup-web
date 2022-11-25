import { signIn, signOut, useSession } from "next-auth/react";
import * as S from "./styles";

export const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <S.Wrapper>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sair</button>
      </S.Wrapper>
    );
  } else
    return (
      <S.Wrapper>
        <button onClick={() => signIn()}>Entrar</button>
      </S.Wrapper>
    );
};
