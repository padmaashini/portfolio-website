import styled from 'styled-components';

export const ProjectInfoContainer = styled.div`
    display: flex; 
    background: #013C40;
    padding: 30px; 
    color: #F9F8F7; 
    align-items: center; 
`;

export const ImageContainer = styled.div`
    margin-right: 5%;
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

export const InfoText = styled.text`
    & > a {
        color: white;
    }
`;

export const ExternalLinks = styled.div`
    margin-top: 10px; 
    font-weight: 670; 
`;

export const ExternalLinkIconText = styled.a`
    margin-top: 10px; 
    display: flex;
    text-decoration: none;
    color: inherit;

    &:hover {
        opacity: 0.7; 
        background: #809ea0;
    }
    border-radius: 10px; 
    // width: ${(props) => (props.large ? '230px' : '110px')};
    padding: 10px; 
    margin-right: 20px;

`;

export const ExternalLinkText = styled.div`
    margin: 5.5px 0px 5.5px 10px;
`;
