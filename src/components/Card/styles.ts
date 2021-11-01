import styled from 'styled-components';

export const Content = styled.div`
    background: var(--primary-color);
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.25rem;
    text-align: center;
    height: 22rem;
    width: 18rem;

    img{
        border-radius: 0.25rem;
        width: 12rem;
        height: 18rem;
    }

    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.7);
    }
`;

export const Description = styled.div`
    p {
        color: var(--text-color);
        font-size: 1.2rem;
        font-weight: 600;
    }
    a {
        text-decoration: none;
        color: var(--link-color);
        font-weight: 600;
        cursor: pointer;
    }
`;