import styled from 'styled-components';

export const ExternalLinkButtonContainer = styled.a`
    margin-top: 10px; 
    display: flex; 
    text-decoration: none; 
    color: inherit; 

    &:hover {
        opacity: 0.7; 
        background: #809ea0;
    }

    border-radius: 10px; 
    padding: 10px; 
    margin-right: 20px;

`;

export const LinkText = styled.div`
    margin: 5.5px 0px 5.5px 10px;
`;
