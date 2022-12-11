import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        font-size: 30px;
        background-color:${({ theme }) => theme.bgcolor};
        Color:${({ theme }) => theme.Color};
`;
