import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px 10%;  
    background-color: #013C40; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    @media screen and (min-width: 900px) {
        padding: 100px 20%; 
    }
`
export const ImageContainer = styled.div`
    margin-right: 5%; 
    @media screen and (max-width: 600px) {
        display: none; 
    }
`;

export const StyledImage = styled.img`
    max-width: 215px; 
    border-radius: 50%; 
`

export const NameAndLinksContainer = styled.div`
    //for any future styling
`;

export const Title = styled.h1`
    color: white;
`

export const StyledLine = styled.hr`
    margin: 30px 0;
`

export const SubTitle = styled.h3`
    color: white; 
`