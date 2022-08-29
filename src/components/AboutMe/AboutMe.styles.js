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
`;

export const ImageContainerLarge = styled.div`
    @media screen and (max-width: 800px) {
        display: none; 
    }
`;

export const ImageContainerSmall = styled.div`
    @media screen and (min-width: 801px) {
        display: none; 
    }
`;

export const InfoContainer = styled.div`
    text-align: left; 
    margin-right: 5%; 
    @media screen and (max-width: 800px) {
       text-align: center; 
    }
`;

export const Title = styled.h1`
    margin-top: 0px; 
`;
