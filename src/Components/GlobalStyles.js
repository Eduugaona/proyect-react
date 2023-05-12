import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }


    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        height: 100%;
        background-color: rgba(5,5,1,1);
        scroll-behavior: smooth;
    }

    p,a,h2,h3,button{
        font-family: 'Rokkitt', serif;
        text-decoration: none;
        margin-bottom: 0;

    }


`
