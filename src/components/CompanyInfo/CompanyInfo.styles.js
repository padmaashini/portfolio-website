import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: left;  
`

export const StyledImage = styled.img`
    max-width: 300px; 
    border-radius: 10%; 
    margin-right: 5%; 

    @media screen and (max-width: 800px) {
        display: none; 
        margin-right: 0%;
    }
`
export const InfoContainer = styled.div`
    text-align: left;
    
`
export const CompanyName = styled.h2`
    font-size: 20px; 
    margin: 0px; 
`

export const Text = styled.p`
    // font-size: 14px; 
    margin: 0px; 
`