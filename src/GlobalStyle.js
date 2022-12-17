import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        font-family: "Esamanru";
        background-color:${({ theme }) => theme.bgcolor};
        Color:${({ theme }) => theme.Color};
`;
