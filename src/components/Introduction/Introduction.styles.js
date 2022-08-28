import styled from 'styled-components';

export const Container = styled.div`
    // height: 600px; 
    padding: 100px; 
    background-color: #ECEDF4; 
    display: flex; 
    flex-direction: row; 
`
export const ImageContainer = styled.div`
    // disappear when in mobile mode
    flex: 2; 
    // height: 100px; 
    // width: 100px; 
`;

export const StyledImage = styled.img`
    // max-height: 500px; 
    // max-width: 500px;
    max-width: 80%; 
    border-radius: 50%; 
`

export const NameAndLinksContainer = styled.div`
    //centered when in mobile mode
    flex: 3; 
`;

export const Title = styled.h1`
    padding: 30px;
`