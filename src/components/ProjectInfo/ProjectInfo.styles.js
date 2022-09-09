import styled from 'styled-components';

export const ProjectInfoContainer = styled.div`
    display: flex; 
    background: #013C40;
    padding: 30px; 
    color: #F9F8F7; 
    align-items: center; 
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
        flex-wrap: wrap;  
    }
    @media screen and (max-width: 800px) {
        overflow: scroll; 
`;

export const ImageContainer = styled.div`
    margin-right: 5%;
    @media screen and (max-width: 400px) {
        display: none; 
    }
`;

export const StyledImage = styled.img`
    max-width: 300px; 
`;

export const InfoContainer = styled.div`
    text-align: left;
`;

export const ProjectTitle = styled.h2`
    font-size: 20px; 
    padding: 0 0 10px 0; 
    color: #ffd700; 
    margin: 0px; 
`;

export const InfoText = styled.p`
    margin-top: 0px; 
    & > a {
        color: white;
    }
`;
