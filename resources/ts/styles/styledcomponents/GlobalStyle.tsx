import { createGlobalStyle } from "styled-components";
import { COLOR } from "../index";

export const GlobalStyle = createGlobalStyle<{}>`
    body {
        color: ${COLOR.BASEFONTCOLOR};
        font-family: "Nunito", sans-serif;
        height: 100%;
        width: 100%;
        margin: 0;
        font-weight: 400;
        line-height: 1.6;
        text-align: left;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: ${COLOR.BASEFONTCOLOR};
    }
    .underLine {
        background: linear-gradient(transparent 70%, rgba(255, 192, 56, 0.3) 0%);
    }

    .underLineBlue {
        background: linear-gradient(transparent 70%, rgba(29, 170, 252, 0.3) 0%);
    }   

    .underLineYellow {
        background: linear-gradient(transparent 70%, rgba(255, 238, 0, 0.3) 0%);
    }

    .textShadow {
        text-shadow: 1px 1px 2px rgb(44, 130, 230);
    }
`;
