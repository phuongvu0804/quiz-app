import styled, { createGlobalStyle } from "styled-components";

//Breakpoints
import { devices } from "./constants";

//@ts-ignore
import BGImage from "./assets/images/background.jpeg"


export const GlobalStyle =  createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        color: white;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    > p {
        color: #fff;
    }
    
    h1 {
        font-size: 80px;
        font-weight: 600;
        text-align: center;
        margin: 40px 0;
    }

    .score {
        score: #fff;
        font-size: 2rem;
        margin: 10px 0;
    }

    .start, .next {
        font-size: 18px;
        padding: 4px 40px;
        color: #E91D2B;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 5px 10px rgba(0,0,0, 0.25);
        cursor: pointer;
    }

    .start:hover, .next:hover {
        background: #f5861e;
        color: #fff;
        transition: background 0.3s ease;
    }

    @media (max-width: ${devices.mobileMaxWidth}) {
        h1 {
            font-size: 40px;
            margin: 0;
        }

        .score {
            font-size: 20px;
            margin: 0 0 5px 0;
        }
    }
`
