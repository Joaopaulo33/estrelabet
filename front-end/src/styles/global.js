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

        --text-title:#363F5F;
        --text-body:#969CB3;

        --shape:#FFFFFF;

    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

 /* quando usuário estiver com uma tela até 1080px de largura vamos diminuir o fontsize para 93.75%
    e quando tiver em uma menor que 720px vai diminuir pra 87.5 porcento */
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
    
    /* Não pode colocar só no corpo porque os outros não importam automaticamente a fonte do corpo do htmel */
    body, input,textarea,button{

        font-family: 'Poppins',sans-serif;
        font-weight: 400;
        
        
    }

    h1,h2,h3,h4,h4,h6,strong{
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