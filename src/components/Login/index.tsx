import { signIn, signOut, useSession } from "next-auth/react";
import * as S from "./styles";

export const Login = () => {
  const { data: session } = useSession();

  return (
    <S.Wrapper>
      <button onClick={() => signIn()}>Entrar</button>
    </S.Wrapper>
  );
};
