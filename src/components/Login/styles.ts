import styled from "styled-components";

export const Wrapper = styled.main`
// background-color: #ccc;
background-image: url('/login-background-screen-new.png');
background-repeat: no-repeat;
background-position:center;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position:relative;
`;


export const LoginButton = styled.button`
background-color:rgba(0,0,0,0.4);
border-radius 15px;
color:#FFF;
font-weight: 700;
position :absolute;
border:1px solid rgba(255,255,255,0.2);
width: 150px;
cursor:pointer;
font-size:1.5rem;
padding:10px 0;
top: 50%;
right: 44%;
transition:background-color 300ms ease;
&:hover{
  background-color:rgba(0,0,0,0.9)
  
}
`