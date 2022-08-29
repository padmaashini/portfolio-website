import styled from 'styled-components';

export const Container = styled.div`
    // height: 600px; 
    padding: 100px 10%; 
    // background-color: #EBF1FF; 
    background-color: #013C40; 
    display: flex; 
    flex-direction: row; 
    // padding: 0 10%; 
    // text-align: center; 
    justify-content: center; 
    align-items: center; 
    @media screen and (min-width: 900px) {
        padding: 100px 20%; 
    }
`
export const ImageContainer = styled.div`
    // disappear when in mobile mode
    // flex: 2; 
    // height: 100px; 
    // width: 100px; 
    margin-right: 5%; 
    @media screen and (max-width: 600px) {
        display: none; 
    }
`;

export const StyledImage = styled.img`
    // max-height: 500px; 
    // max-width: 500px;
    // max-width: 80%; 
    max-width: 215px; 
    border-radius: 50%; 
`

export const NameAndLinksContainer = styled.div`
    //centered when in mobile mode
    // flex: 3; 
    
`;

export const Title = styled.h1`
    // padding-bottom: 30px;
    font-size: 2rem; 
    // color: #002060;
    color: white;
`
export const IconLink = styled.a`
    &:link{
        color: inherit; 
        text-decoration: none; 
    }
    &:hover: {
        opacity: 0.2
    }
`

export const IconsContainer = styled.div`
    justify-content: space-between;
    > * {
        font-size: 40px; 
        margin-right: 20px; 
        
    }
`

export const StyledLine = styled.hr`
    margin: 30px 0;
`