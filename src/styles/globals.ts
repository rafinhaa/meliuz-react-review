import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root { /**  Variavel que define o estilo global */
        --background: #F6E3B6;
        --primary-color: #E6AF2E;
        --text-color: #191716;
        --link-color: #5B430B;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) { 
            font-size: 93.75%;
        }
        @media (max-width: 720px) { 
            font-size: 87.15%; 
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button { 
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
`;