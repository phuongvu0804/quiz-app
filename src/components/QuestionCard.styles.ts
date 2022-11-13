import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 350px;
    background: #ffebdb;
    border-radius: 10px;
    border: 2px solid #000;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        color: #000;
        font-size: 1rem;
    }
`

type ButtonWrapperPropsType = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperPropsType>`
    transition: all 0.3s ease;
    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked}) => 
            correct 
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
                : !correct && userClicked
                ? 'linear-gradient(90deg, #ff4d45, #ee1e24)'
                : 'linear-gradient(90deg, #f8931f, #ff4d45)'
        };
        border: 1px solid #000;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: black;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)
    }

`