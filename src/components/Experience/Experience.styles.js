import styled from 'styled-components';

export const Container = styled.div`
    // height: 600px; 
    padding: 50px 10%; 
    // background-color: #ECEDF4; 
    background-color: #F9F8F7;
    display: flex; 
    flex-direction: row; 
    // padding: 0 10%; 
    // text-align: center; 
    justify-content: space-between; 
    align-items: center; 
    // was 600
    @media screen and (min-width: 1000px) {
        padding: 50px 20%; 
    }
`
export const ImageContainer = styled.div`
    // disappear when in mobile mode
    // flex: 2; 
    // height: 100px; 
    // width: 100px; 
    // margin-right: 5%; 
    @media screen and (max-width: 600px) {
        display: none; 
    }
`;

export const StyledImage = styled.img`
    // max-height: 500px; 
    // max-width: 500px;
    // max-width: 80%; 
    max-width: 215px; 
    border-radius: 10%; 
`

export const NameAndLinksContainer = styled.div`
    //centered when in mobile mode
    // flex: 3; 
`;

export const Title = styled.h1`
    // padding-bottom: 30px;
    // font-size: 2rem; 
    // font-size: 3rem; 
    text-align: left; 
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