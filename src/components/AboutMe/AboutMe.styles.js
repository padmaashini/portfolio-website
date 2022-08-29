import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 10%; 
    background-color: #F9F8F7; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    @media screen and (min-width: 1000px) {
        padding: 50px 20%; 
    }
    @media screen and (max-width: 800px) {
        flex-direction: column; 
    }
`
export const ImageContainer = styled.div`
    @media screen and (max-width: 600px) {
        // display: none; 
    }
`;

export const StyledImage = styled.img`
    max-width: 300px; 
    border-radius: 10%; 
`
export const InfoContainer = styled.div`
    text-align: left; 
    margin-right: 5%; 
`

export const Title = styled.h1`
    margin-top: 0px; 
    text-align: left; 
`
