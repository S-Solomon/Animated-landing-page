import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavendar-secondary: #6A6D9E;
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        font-family: 'Nunito', sans-serif;
        color: white;
        font-size: 1.2rem;
    }

    a {
        color: inherit;
    }

    p {
        line-height: 1.9;
        letter-spacing: 1.1px;
        color: var(--lavendar-secondary);
    }

    .secondary-heading {
        font-size: 3rem;
        color: var(--purple-primary);
    }
`;

export default GlobalStyle