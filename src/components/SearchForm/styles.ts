import styled from 'styled-components';

export const Content = styled.div`
    max-width: 900px;    
    padding: 1rem;
    margin: 0 auto;
    display: block;
    text-align: center;
    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
    }
    .form {  
        width: 100%;
        h2 {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 2rem;        
        }
        input {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            background-color: #FFF;
            border: 1px solid #FFF;
            font-weight: 400;
            font-size: 1rem;
            &::placeholder {
                color: var(--text-color);
            }
            & + input { // Todo o input que não seja o primeiro deve ter um margin-top
                margin-top: 1rem;   
            }
        }
        input[type="submit"] { //Estilizando o button de submit */
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--primary-color);
            color: var(--text-color);
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;
            transition: filter 0.2s;
            &:hover { /* Ao passar o mouse sobre o botão */
                filter: brightness(0.9); /* Diminuir a luminosidade em 90% */
            }
        }    
    }
`;