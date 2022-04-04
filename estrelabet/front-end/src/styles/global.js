import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background:#121214;
        --red:#E52E4D;
        --green:#33CC95;
        --blue:#5429CC;
        --white: #FFFFFF;
    
        --gray-100: #e1e1e6;
        --gray-300: #a8a8b3;
        --gray-800:#29292e;
        --gray-850:#1f2729;
        --gray-900: #121214;


        --cyan-500:#61dafb;
        --yellow-500: #eba417;

        --blue-light:#6933FF;

        --text-title:rgb(229, 238, 149);;
        --text-body:#969CB3;

        --shape:#FFFFFF;

    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
    @media(max-width:1080px){
        font-size:93.75%;
    }
    @media(max-width:720px){
        font-size:87.5%;
    }


    body{
        background: var(--background);
        -webkit-font-smooting: antialiased;
        }
    
    
    body, input,textarea,button{

        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    
    }

    h1,h2,h3,h6,strong{
        color: white;
        font-weight: 600;
    }
    
    button{
        cursor: pointer;
        text-decoration:none;
    }



    a{
        text-decoration:none;
        cursor: pointer;
    }

}
`   