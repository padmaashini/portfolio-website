import styled from 'styled-components';

export const CompanyInfoContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    margin-bottom: 20px;
`;
export const ImageContainer = styled.div`
    margin-right: 5%; 

    @media screen and (max-width: 800px) {
        display: none; 
        margin-right: 0%;
    }
`;

export const StyledImage = styled.img`
    max-width: 300px; 
    border-radius: 10%; 
`;

export const InfoContainer = styled.div`
    text-align: left;
`;

export const CompanyName = styled.h2`
    font-size: 20px; 
    display: inline;
    margin: 0px; 
    color: #013C40;
`;

export const Position = styled.h2`
    font-size: 20px; 
    display: inline; 
    margin: 0px; 
`;

export const Location = styled.i`
    margin-top: 5px; 
    display: block; 
`;

export const Point = styled.li`
    font-size: 15px; 
    margin: 0px; 
`;

export const UnOrderedList = styled.ul`
    list-style-type: circle;
    text-align: justify; 
    padding-left: 20px; 
    margin: 8px 0 8px 0; 
`;
