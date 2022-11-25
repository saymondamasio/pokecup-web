import styled from "styled-components";

export const Wrapper = styled.main`
  background: no-repeat center/100% url(/assets/background-login.png);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background: #333333;
    border-radius: 9999px;
    border: none;
    padding: 10px 25px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    /* identical to box height, or 167% */

    color: #ffffff;
  }
`;
